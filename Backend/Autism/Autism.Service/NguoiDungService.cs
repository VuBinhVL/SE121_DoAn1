using Autism.Common.ConstValue;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Autism.Common.DTOs.Response;
using Autism.Common.DTOs.Request.NguoiDung;
using Autism.Common.Helpers;
using Autism.DataAccess.Models;
using Microsoft.AspNetCore.Http;
using Autism.Common.DTOs.Response.NguoiDung;
using Autism.DataAccess.Repositories;
using Autism.DataAccess.Infrastructure;
using Microsoft.Extensions.Configuration;
using Autism.Common.Security;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Model;

namespace Autism.Service
{
    public interface INguoiDungService
    {
        Task<Response_Login> LoginAsync(Request_LoginDTO data);
        Task<ResponseMessage> RegisterAsync(Request_RegisterDTO data);
        Task<NguoiDung> GetNguoiDungByHttpContext(HttpContext httpContext);
        Task<ResponseMessage> ForgotPasswordAsync(Request_ForgotPasswordDTO data);
        Task<Reponse_HienThiThongTinNguoiDungDTO> HienThiThongTinNguoiDungAsync(HttpContext httpContext);
        Task<ResponseMessage> ChangePasswordAsync(HttpContext httpContext, Request_ChangePasswordDTO data);
        Task<ResponseMessage> UpdateThongTinCaNhanAsync(HttpContext httpContext, Request_UpdateThongTinCaNhanDTO data);

    }

    public class NguoiDungService : INguoiDungService
    {

        private readonly INguoiDungRepository _nguoiDungRepository;
        private readonly IConfiguration _configuration;
        private readonly IMailService _mailService;
        private readonly TokenStore _tokenStore;
        private readonly IUnitOfWork _unitOfWork;

        public NguoiDungService(INguoiDungRepository nguoiDungRepository, IConfiguration configuration, TokenStore tokenStore, IMailService mailService, IUnitOfWork unitOfWork)
        {
            _nguoiDungRepository = nguoiDungRepository;
            _configuration = configuration;
            _tokenStore = tokenStore;
            _mailService = mailService;
            _unitOfWork = unitOfWork;
        }


        public async Task<ResponseMessage> RegisterAsync(Request_RegisterDTO data)
        {

            if (!Common.Helpers.Validation.IsAlphanumeric(data.TenTaiKhoan))
            {
                return new ResponseMessage(HttpStatusCode.BadRequest, "Tên tài khoản không được có kí tự đặc biệt");
            }
            if (!Common.Helpers.Validation.IsAlphanumeric(data.MatKhau))
            {
                return new ResponseMessage(HttpStatusCode.BadRequest, "Mật khẩu không được có kí tự đặc biệt");
            }
            var checkEmail = (await _nguoiDungRepository.FindAsync(u => u.Email == data.Email)).FirstOrDefault();
            if (checkEmail != null)
            {
                return new ResponseMessage(HttpStatusCode.BadRequest, "Email đã có người sử dụng");
            }

            var checkUserName = (await _nguoiDungRepository.FindAsync(u => u.TenTaiKhoan == data.TenTaiKhoan)).FirstOrDefault();
            if (checkUserName != null)
            {
                return new ResponseMessage(HttpStatusCode.BadRequest, "Tên tài khoản đã tồn tại");
            }
            //dữ liệu từ request
            var nguoiDung = new NguoiDung()
            {
                HoTen = data.HoTen,
                Email = data.Email,
                TenTaiKhoan = data.TenTaiKhoan,
                MatKhau = EncryptionHelper.Encrypt(data.MatKhau)
            };

            //dữ liệu default
            nguoiDung.Image = "no_img.png";
            nguoiDung.GioiTinh = "Khác";
            nguoiDung.NgaySinh = null;

            await _nguoiDungRepository.AddAsync(nguoiDung);
            await _unitOfWork.CommitAsync();
            return new ResponseMessage(HttpStatusCode.Ok, "Đăng ký thành công");
        }

        public async Task<ResponseMessage> ForgotPasswordAsync(Request_ForgotPasswordDTO data)
        {
            var nguoidungs = await _nguoiDungRepository.GetAllAsync();
            var findNguoiDungByTenTaiKhoan = nguoidungs.Where(u => ParseHelpers.ParseTaiKhoan(u.TenTaiKhoan).Contains(data.TenTaiKhoan)).FirstOrDefault();
            if (findNguoiDungByTenTaiKhoan == null || findNguoiDungByTenTaiKhoan.Email != data.Email)
            {
                return new ResponseMessage(HttpStatusCode.BadRequest, "Tên tài khoản hoặc Email không hợp lệ");
            }

            var passNew = Utils.RandomPassword();
            findNguoiDungByTenTaiKhoan.MatKhau = EncryptionHelper.Encrypt(passNew);
            _nguoiDungRepository.Update(findNguoiDungByTenTaiKhoan);
            await _unitOfWork.CommitAsync();
            var rsSend = await _mailService.SendEmailAsync(data.Email, "Quên mật khẩu", $"<h5>Mật khẩu mới của bạn là: {passNew}</h5>");
            if (rsSend)
            {
                return new ResponseMessage(HttpStatusCode.Ok, "Mật khẩu mới đã được gửi vào email của bạn");
            }
            return new ResponseMessage(HttpStatusCode.BadRequest, "Có lỗi xảy ra khi gửi mật khẩu mới tới email.Vui lòng liên hệ admin");
        }

        public async Task<NguoiDung> GetNguoiDungByHttpContext(HttpContext httpContext)
        {
            try
            {
                var userId = int.Parse(httpContext.User.FindFirst("UserId")?.Value);
                return await _nguoiDungRepository.GetSingleByIdAsync(userId);
            }
            catch
            {
                return null;
            }
        }

        public async Task<Response_Login> LoginAsync(Request_LoginDTO data)
        {
            var nguoidungs = await _nguoiDungRepository.GetAllAsync();
            var nguoiDung = nguoidungs.Where(u => ParseHelpers.ParseTaiKhoan(u.TenTaiKhoan).Contains(data.TenTaiKhoan)).FirstOrDefault();
            if (nguoiDung == null || nguoiDung.MatKhau != EncryptionHelper.Encrypt(data.MatKhau))
            {
                return new Response_Login()
                {
                    HttpStatusCode = HttpStatusCode.BadRequest,
                    Message = "Tên tài khoản hoặc mật khẩu không chính xác"
                };
            }
            var token = GenerateJwtToken(nguoiDung);
            _tokenStore.AddToken(nguoiDung.NguoiDungId, token);
           

            return new Response_Login()
            {
                HttpStatusCode = HttpStatusCode.Ok,
                Token = token,
            };
        }


        private string GenerateJwtToken(NguoiDung nguoiDung)
        {
            var issuer = _configuration["Jwt:Issuer"];
            var key = _configuration["Jwt:Key"];

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            // Tạo danh sách claims cơ bản
            var claims = new List<Claim>
            {
            new Claim("UserId", nguoiDung.NguoiDungId.ToString()), // Lưu UserId vào claims
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

           
            // Tạo JWT token
            var token = new JwtSecurityToken(
                issuer: issuer,
                claims: claims,
                expires: DateTime.UtcNow.AddHours(2),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public async Task<Reponse_HienThiThongTinNguoiDungDTO> HienThiThongTinNguoiDungAsync(HttpContext httpContext)
        {
            var nguoiDung = await GetNguoiDungByHttpContext(httpContext);

            var rs = new Reponse_HienThiThongTinNguoiDungDTO()
            {
                NguoiDungId = nguoiDung.NguoiDungId,
                TenNguoiDung = nguoiDung.HoTen,
                Email = nguoiDung.Email,
                GioiTinh = nguoiDung.GioiTinh,
                NgaySinh = nguoiDung.NgaySinh,
                Image = nguoiDung.Image
            };
            return rs;
        }

        public async Task<ResponseMessage> ChangePasswordAsync(HttpContext httpContext, Request_ChangePasswordDTO data)
        {
            var findNguoiDung = await GetNguoiDungByHttpContext(httpContext);
            if (findNguoiDung == null)
            {
                return new ResponseMessage(HttpStatusCode.Unauthorized, "");
            }

            if (data.MatKhauMoi != data.MatKhauNhapLai)
            {
                return new ResponseMessage(HttpStatusCode.BadRequest, "Mật khẩu mới và mật khẩu nhập lại không khớp");
            }

            if (findNguoiDung.MatKhau != EncryptionHelper.Encrypt(data.MatKhauHienTai))
            {
                return new ResponseMessage(HttpStatusCode.BadRequest, "Mật khẩu hiện tại không chính xác");
            }

            findNguoiDung.MatKhau = EncryptionHelper.Encrypt(data.MatKhauMoi);
            await _unitOfWork.CommitAsync();
            return new ResponseMessage(HttpStatusCode.Ok, "Thay đổi mật khẩu thành công");
        }

        public async Task<ResponseMessage> UpdateThongTinCaNhanAsync(HttpContext httpContext, Request_UpdateThongTinCaNhanDTO data)
        {
            var findNguoiDung = await GetNguoiDungByHttpContext(httpContext);
            if (findNguoiDung == null)
            {
                return new ResponseMessage(HttpStatusCode.Unauthorized, "");
            }

            var findNguoiDungByEmail = (await _nguoiDungRepository.FindAsync(u => u.Email == data.Email && u.NguoiDungId != findNguoiDung.NguoiDungId)).FirstOrDefault();
            if (findNguoiDungByEmail != null)
            {
                return new ResponseMessage(HttpStatusCode.BadRequest, "Email đã có người sử dụng");
            }

            if (!string.IsNullOrEmpty(data.Image))
            {
                findNguoiDung.Image = data.Image;
            }

            findNguoiDung.HoTen = data.HoTen;
            findNguoiDung.GioiTinh = data.GioiTinh;
            findNguoiDung.Email = data.Email;
            findNguoiDung.NgaySinh = data.NgaySinh;
            await _unitOfWork.CommitAsync();
            return new ResponseMessage(HttpStatusCode.Ok, "Cập nhật thông tin cá nhân thành công");
        }
    }
}

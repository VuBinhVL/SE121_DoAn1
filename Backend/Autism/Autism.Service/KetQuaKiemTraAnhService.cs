using Autism.Common.ConstValue;
using Autism.Common.DTOs.Request.BaiQuizz;
using Autism.Common.DTOs.Request.KiemTraAnh;
using Autism.Common.DTOs.Response;
using Autism.Common.DTOs.Response.BaiQuizz;
using Autism.Common.DTOs.Response.KiemTraAnh;
using Autism.DataAccess.Infrastructure;
using Autism.DataAccess.Models;
using Autism.DataAccess.Repositories;
using Microsoft.AspNetCore.Http;
using Org.BouncyCastle.Asn1.Ocsp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.Service
{
    public interface IKetQuaKiemTraAnhService
    {
        Task<ResponseMessage> SaveImageHistory(Request_SaveImageHistoryDTO request);
        Task<Response_LichSuKiemTraAnhDTO> GetListLichSuKiemTraAnhAsync(HttpContext httpContext);
    }

    public class KetQuaKiemTraAnhService : IKetQuaKiemTraAnhService
    {
        private readonly IKetQuaKiemTraAnhRepository _kiemTraAnhRepository;
        private readonly ICauHoiBaiQuizzRepository _cauHoiBaiQuizzRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IChiTietBaiQuizzRepository _chiTietBaiQuizzRepository;
        private readonly IDapAnBaiQuizzDaChonRepository _dapAnBaiQuizzDaChonRepository;
        private readonly IDapAnBaiQuizzRepository _dapAnBaiQuizzRepository;
        private readonly INguoiKiemTraRepository _nguoiKiemTraRepository;
        private readonly INguoiDungRepository _nguoiDungRepository;
        public KetQuaKiemTraAnhService(IKetQuaKiemTraAnhRepository kiemTraAnhRepository, ICauHoiBaiQuizzRepository cauHoiBaiQuizzRepository
            , IUnitOfWork unitOfWork, IChiTietBaiQuizzRepository chiTietBaiQuizzRepository, IDapAnBaiQuizzDaChonRepository dapAnBaiQuizzDaChonRepository,
            IDapAnBaiQuizzRepository dapAnBaiQuizzRepository, INguoiKiemTraRepository nguoiKiemTraRepository, INguoiDungRepository nguoiDungRepository)
        {
            _kiemTraAnhRepository = kiemTraAnhRepository;
            _cauHoiBaiQuizzRepository = cauHoiBaiQuizzRepository;
            _unitOfWork = unitOfWork;
            _chiTietBaiQuizzRepository = chiTietBaiQuizzRepository;
            _dapAnBaiQuizzDaChonRepository = dapAnBaiQuizzDaChonRepository;
            _dapAnBaiQuizzRepository = dapAnBaiQuizzRepository;
            _nguoiKiemTraRepository = nguoiKiemTraRepository;
            _nguoiDungRepository = nguoiDungRepository;
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
        public async Task<Response_LichSuKiemTraAnhDTO> GetListLichSuKiemTraAnhAsync(HttpContext httpContext)
        {
            var findNguoiDung = await GetNguoiDungByHttpContext(httpContext);
            if (findNguoiDung == null)
            {
                throw new Exception("Nguoi Dung ko hop le");
            }

            // Giả định rằng _kiemTraAnhRepository.GetAllAsync() lấy tất cả kết quả kiểm tra ảnh của người dùng
            var listKiemTraAnh = await _kiemTraAnhRepository.GetAllAsync();

            var lichSuKiemTraAnhs = new List<LichSuKiemTraAnhDTO>();

            foreach (var kiemTraAnh in listKiemTraAnh)
            {
                // Lấy thông tin người kiểm tra bằng cách sử dụng ID
                var nguoiKiemTra = await _nguoiKiemTraRepository.GetSingleByIdAsync(kiemTraAnh.NguoiKiemTraId);

                lichSuKiemTraAnhs.Add(new LichSuKiemTraAnhDTO
                {
                    TenNguoiKiemTra = nguoiKiemTra?.HoTen ?? "Không xác định",
                    NgayKiemTra = kiemTraAnh.NgayKiemTra,
                    KetQua = kiemTraAnh.KetQua,
                    AutismProb = kiemTraAnh.AutismProb,
                    Non_AutismProb = kiemTraAnh.Non_AutismProb,
                    Image = kiemTraAnh.Image
                });
            }

            var rs = new Response_LichSuKiemTraAnhDTO
            {
                lichSuKiemTraAnhs = lichSuKiemTraAnhs
            };

            return rs;
        }
        public async Task<ResponseMessage> SaveImageHistory(Request_SaveImageHistoryDTO request)
        {
            var saveImage = new KetQuaKiemTraAnh()
            {
                NgayKiemTra = request.NgayKiemTra,
                NguoiDungId= request.NguoiDungId,
                NguoiKiemTraId= request.NguoiKiemTraId,
                AutismProb= request.AutismProb,
                Non_AutismProb = request.Non_AutismProb,
                KetQua= request.KetQua,
                Image = request.Image
            };
            await _kiemTraAnhRepository.AddAsync(saveImage);
            await _unitOfWork.CommitAsync();
            return new ResponseMessage(HttpStatusCode.Ok, "Lưu lịch sử kết quả kiểm tra ảnh thành công");
        }
    }
}
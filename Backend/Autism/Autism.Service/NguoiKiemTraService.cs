using Autism.Common.ConstValue;
using Autism.Common.DTOs.Request.NguoiDung;
using Autism.Common.DTOs.Response;
using Autism.Common.DTOs.Response.NguoiDung;
using Autism.Common.Helpers;
using Autism.DataAccess.Infrastructure;
using Autism.DataAccess.Models;
using Autism.DataAccess.Repositories;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.Service
{
    public interface INguoiKiemTraService
    {
        Task<NguoiKiemTra> AddNguoiKiemTraAsync(Request_AddNguoiKiemTraDTO request);
        Task<Reponse_DanhSachNguoiKiemTraDTO> GetListNguoiKiemTraAsync();
    }
    public class NguoiKiemTraService : INguoiKiemTraService
    {
        private readonly INguoiKiemTraRepository _nguoiKiemTraRepository;
        private readonly IUnitOfWork _unitOfWork;

        public NguoiKiemTraService(INguoiKiemTraRepository nguoiKiemTraRepository, IUnitOfWork unitOfWork)
        {
            _nguoiKiemTraRepository = nguoiKiemTraRepository;

            _unitOfWork = unitOfWork;
        }
        public async Task<NguoiKiemTra> AddNguoiKiemTraAsync(Request_AddNguoiKiemTraDTO request)
        {
            if (request == null)
            {
                throw new Exception("input ko hợp lệ");
            }

            // Tìm người kiểm tra bằng họ tên
            var findNguoiKiemTraBangHoTen = await _nguoiKiemTraRepository.FindAsync(n => n.HoTen == request.HoTen);

            if (findNguoiKiemTraBangHoTen != null && findNguoiKiemTraBangHoTen.Any())
            {
                // Nếu tìm thấy người kiểm tra bằng họ tên, kiểm tra ngày sinh
                var findNguoiKiemTraBangNgaySinh = await _nguoiKiemTraRepository.FindAsync(n => n.NgaySinh == request.NgaySinh);
                if (findNguoiKiemTraBangNgaySinh != null && findNguoiKiemTraBangNgaySinh.Any())
                {
                    // Trả về người đầu tiên trong danh sách nếu có kết quả
                    return findNguoiKiemTraBangNgaySinh.First();
                }
            }

            // Nếu không tìm thấy, tạo người kiểm tra mới
            var nguoiKiemTra = new NguoiKiemTra
            {
                HoTen = request.HoTen,
                NgaySinh = request.NgaySinh
            };
            await _nguoiKiemTraRepository.AddAsync(nguoiKiemTra);
            await _unitOfWork.CommitAsync();

            return nguoiKiemTra;
        }

        public async Task<Reponse_DanhSachNguoiKiemTraDTO> GetListNguoiKiemTraAsync()
        {
            var listNguoiKiemTra = await _nguoiKiemTraRepository.GetAllAsync();

            var rs = new Reponse_DanhSachNguoiKiemTraDTO
            {
                listNguoiKiemTra = listNguoiKiemTra.Select(nguoi => new NguoiKiemTraDTO
                {
                    NguoiKiemTraId = nguoi.NguoiKiemTraId, // Giả định rằng 'Id' là tên thuộc tính ID trong entity
                    HoTen = nguoi.HoTen,
                    NgaySinh = nguoi.NgaySinh
                }).ToList()
            };

            return rs;
        }
    }
}

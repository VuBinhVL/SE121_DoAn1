using Autism.Common.ConstValue;
using Autism.Common.DTOs.Request.NguoiDung;
using Autism.Common.DTOs.Response;
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
        Task<ResponseMessage> AddNguoiKiemTraAsync(Request_AddNguoiKiemTraDTO request);
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
        public async Task<ResponseMessage> AddNguoiKiemTraAsync(Request_AddNguoiKiemTraDTO request)
        {
            if (request == null)
            {
                throw new Exception("input ko hợp lệ");
            }
            var nguoiKiemTra = new NguoiKiemTra()
            {
                HoTen = request.HoTen,
                NgaySinh = request.NgaySinh
            };
            await _nguoiKiemTraRepository.AddAsync(nguoiKiemTra);
            await _unitOfWork.CommitAsync(); 

            return new ResponseMessage(HttpStatusCode.Ok, "Tạo người kiểm tra thành công");
        }
    }
}

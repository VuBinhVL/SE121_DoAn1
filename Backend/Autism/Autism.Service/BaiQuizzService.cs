using Autism.Common.ConstValue;
using Autism.Common.DTOs.Request.BaiQuizz;
using Autism.Common.DTOs.Response;
using Autism.Common.DTOs.Response.BaiQuizz;
using Autism.DataAccess.Infrastructure;
using Autism.DataAccess.Models;
using Autism.DataAccess.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.Service
{
    public interface IBaiQuizzService
    {
        Task<Response_BaiQuizzDTO> HienThiBaiQuizz();
        Task<ResponseMessage> SaveQuizzHistory(Request_SaveQuizHistoryDTO request);
        Task<Response_LichSuLamBaiDTO> GetListLichSuLamBai(HttpContext httpContext);
        Task<Response_ChiTietLamBaiQuizzDTO> GetChiTietLamBaiQuizz(int idBaiQuizz);
    }
    public class BaiQuizzService : IBaiQuizzService
    {
        private readonly IBaiQuizzRepository _baiQuizzRepository;
        private readonly ICauHoiBaiQuizzRepository _cauHoiBaiQuizzRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IChiTietBaiQuizzRepository _chiTietBaiQuizzRepository;
        private readonly IDapAnBaiQuizzDaChonRepository _dapAnBaiQuizzDaChonRepository;
        private readonly IDapAnBaiQuizzRepository _dapAnBaiQuizzRepository;
        private readonly INguoiKiemTraRepository _nguoiKiemTraRepository;
        private readonly INguoiDungRepository _nguoiDungRepository;
        public BaiQuizzService (IBaiQuizzRepository baiQuizzRepository,ICauHoiBaiQuizzRepository cauHoiBaiQuizzRepository
            ,IUnitOfWork unitOfWork, IChiTietBaiQuizzRepository chiTietBaiQuizzRepository, IDapAnBaiQuizzDaChonRepository dapAnBaiQuizzDaChonRepository,
            IDapAnBaiQuizzRepository dapAnBaiQuizzRepository,INguoiKiemTraRepository nguoiKiemTraRepository,INguoiDungRepository nguoiDungRepository)
        {
            _baiQuizzRepository =baiQuizzRepository;
            _cauHoiBaiQuizzRepository = cauHoiBaiQuizzRepository;
            _unitOfWork = unitOfWork;
            _chiTietBaiQuizzRepository = chiTietBaiQuizzRepository;
            _dapAnBaiQuizzDaChonRepository = dapAnBaiQuizzDaChonRepository;
            _dapAnBaiQuizzRepository = dapAnBaiQuizzRepository ;
            _nguoiKiemTraRepository = nguoiKiemTraRepository;
            _nguoiDungRepository = nguoiDungRepository;
        }

        public async Task<Response_ChiTietLamBaiQuizzDTO> GetChiTietLamBaiQuizz(int idBaiQuizz)
        {
            // Lấy thông tin bài quizz chính
            var baiQuizz = await _baiQuizzRepository.GetSingleByIdAsync(idBaiQuizz);
            if (baiQuizz == null)
            {
                throw new ArgumentException("Bài quiz không tồn tại", nameof(idBaiQuizz));
            }

            // Lấy thông tin người kiểm tra
            var nguoiKiemTra = await _nguoiKiemTraRepository.GetSingleByIdAsync(baiQuizz.NguoiKiemTraId);
            var tenNguoiKiemTra = nguoiKiemTra?.HoTen ?? "Không xác định";

            // Lấy chi tiết của bài làm (các câu hỏi và đáp án đã chọn)
            var chiTietBaiQuizzs = await _chiTietBaiQuizzRepository.FindAsync(ct => ct.BaiQuizzId == idBaiQuizz);
            // Lấy tất cả các đáp án đã chọn cho bài quiz này
            var dapAnBaiQuizzDaChons = await _dapAnBaiQuizzDaChonRepository
                                            .FindAsync(d => d.CauHoiBaiQuizz.ChiTietBaiQuizzs.Any(ct => ct.BaiQuizzId == idBaiQuizz));

            var response = new Response_ChiTietLamBaiQuizzDTO
            {
                TenNguoiKiemTra = tenNguoiKiemTra,
                NgayLamQuizz = baiQuizz.NgayLamQuizz,
                TongDiem = baiQuizz.TongDiem,
                ChiTietBaiQuizzs = new List<QuestionAnswerHasDoneDTO>()
            };

            foreach (var chiTiet in chiTietBaiQuizzs)
            {
                var cauHoi = await _cauHoiBaiQuizzRepository.GetSingleByIdAsync(chiTiet.CauHoiBaiQuizzId);

                if (cauHoi != null)
                {
                    var questionAnswer = new QuestionAnswerHasDoneDTO
                    {
                        TenCauHoi = cauHoi.TenCauHoi,
                        TenDapAn = string.Empty, // Chúng ta sẽ set giá trị này sau
                        DungSai = false           // Giá trị mặc định, sẽ được cập nhật nếu có đáp án
                    };

                    // Tìm đáp án đã chọn cho câu hỏi này
                    var dapAnDaChons = dapAnBaiQuizzDaChons.Where(d => d.CauHoiBaiQuizzId == chiTiet.CauHoiBaiQuizzId).ToList();

                    if (dapAnDaChons.Any())
                    {

                        var dapAn = await _dapAnBaiQuizzRepository.GetSingleByIdAsync(dapAnDaChons.First().DapAnBaiQuizzId);
                        if (dapAn != null)
                        {
                            questionAnswer.TenDapAn = dapAn.TenDapAn;
                            questionAnswer.DungSai = dapAnDaChons.First().DungSai;
                        }
                    }

                    response.ChiTietBaiQuizzs.Add(questionAnswer);
                }
            }

            return response;
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
        public async Task<Response_LichSuLamBaiDTO> GetListLichSuLamBai(HttpContext httpContext)
        {
            var findNguoiDung = await GetNguoiDungByHttpContext(httpContext);
            if (findNguoiDung == null)
            {
                throw new Exception("Nguoi Dung ko hop le");
            }
            var rs = new Response_LichSuLamBaiDTO
            {
                LichSuLamBai = new List<LichSuLamBaiDTO>()
            };

            // Lấy danh sách bài làm từ repository
            var baiQuizzs = await _baiQuizzRepository.FindAsync(bq=> bq.NguoiDungId == findNguoiDung.NguoiDungId);

            foreach (var baiQuizz in baiQuizzs)
            {
                // Giả sử bạn có phương thức để lấy tên người kiểm tra từ ID
                var nguoiKiemTra = await _nguoiKiemTraRepository.GetSingleByIdAsync(baiQuizz.NguoiKiemTraId);
                var tenNguoiKiemTra = nguoiKiemTra?.HoTen ?? "Không xác định"; 

                rs.LichSuLamBai.Add(new LichSuLamBaiDTO
                {
                    IdBaiQuizz = baiQuizz.BaiQuizzId,
                    TenNguoiKiemTra = tenNguoiKiemTra,
                    NgayLamQuizz = baiQuizz.NgayLamQuizz,
                    TongDiem = baiQuizz.TongDiem
                });
            }

            return rs;
        }

        public async Task<Response_BaiQuizzDTO> HienThiBaiQuizz()
        {
            var listCauHoi = await _cauHoiBaiQuizzRepository.GetAllAsync();

            var response = new Response_BaiQuizzDTO
            {
                Questions = listCauHoi.Select(cauHoi => new QuestionDTO
                {
                    QuestionId = cauHoi.CauHoiBaiQuizzId,
                    QuestionText = cauHoi.TenCauHoi,
                    Answers = cauHoi.ChiTietDapAnQuizzs.Select(ct => new AnswerDTO
                    {
                        AnswerId = ct.DapAnBaiQuizzId,
                        AnswerText = ct.DapAnBaiQuizz.TenDapAn,
                        IsCorrect = ct.DapAnBaiQuizz.DungSai
                    }).ToList()
                }).ToList()
            };

            return response;
        }

        public async Task<ResponseMessage> SaveQuizzHistory(Request_SaveQuizHistoryDTO request)
        {
            var baiQuizz = new BaiQuizz
            {
                NguoiDungId = request.NguoiDungId,
                NgayLamQuizz = request.NgayLamQuizz,
                NguoiKiemTraId = request.NguoiKiemTraId,
                TongDiem = 0 // Khởi tạo tổng điểm là 0, chúng ta sẽ cập nhật nó sau
            };

            await _baiQuizzRepository.AddAsync(baiQuizz);
            await _unitOfWork.CommitAsync(); // Lưu để lấy BaiQuizzId

            int correctAnswersCount = 0; // Biến để đếm số câu trả lời đúng

            // Lưu chi tiết bài thi
            foreach (var questionAnswer in request.ChiTietBaiQuizzs)
            {
                var chiTietBaiQuizz = new ChiTietBaiQuizz
                {
                    BaiQuizzId = baiQuizz.BaiQuizzId,
                    CauHoiBaiQuizzId = questionAnswer.CauHoiBaiQuizzId
                };
                await _chiTietBaiQuizzRepository.AddAsync(chiTietBaiQuizz);

                // Lưu đáp án đã chọn cho từng câu hỏi và đếm số câu trả lời đúng
                foreach (var dapAnId in questionAnswer.DapAnBaiQuizzIds)
                {
                    var dungSai = await _dapAnBaiQuizzRepository.GetDungSaiAsync(dapAnId);
                    var dapAnDaChon = new DapAnBaiQuizzDaChon
                    {
                        CauHoiBaiQuizzId = questionAnswer.CauHoiBaiQuizzId,
                        DapAnBaiQuizzId = dapAnId,
                        DungSai = dungSai
                    };
                    await _dapAnBaiQuizzDaChonRepository.AddAsync(dapAnDaChon);

                    if (dungSai)
                    {
                        correctAnswersCount++;
                    }
                }
            }

            // Cập nhật tổng điểm sau khi đếm số câu trả lời đúng
            baiQuizz.TongDiem = correctAnswersCount;
            _baiQuizzRepository.Update(baiQuizz);
            await _unitOfWork.CommitAsync(); // Lưu lại tổng điểm đã cập nhật

            return new ResponseMessage(HttpStatusCode.Ok, "Lưu lịch sử làm bài thành công");
        }
    }
}

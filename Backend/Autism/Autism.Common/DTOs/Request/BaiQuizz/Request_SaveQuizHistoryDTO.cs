using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.Common.DTOs.Request.BaiQuizz
{
    public class Request_SaveQuizHistoryDTO
    {
        [Required]
        public int NguoiDungId { get; set; }

        [Required]
        public DateTime NgayLamQuizz { get; set; } // Ngày làm bài

        [Required]
        public int NguoiKiemTraId { get; set; } // ID của người kiểm tra bài

        [Required]
        public List<QuestionAnswerDTO> ChiTietBaiQuizzs { get; set; } // Chi tiết từng câu hỏi và câu trả lời
    }

    public class QuestionAnswerDTO
    {
        [Required]
        public int CauHoiBaiQuizzId { get; set; } // ID của câu hỏi

        [Required]
        public List<int> DapAnBaiQuizzIds { get; set; } // Danh sách các ID của đáp án mà người dùng đã chọn
    }
}

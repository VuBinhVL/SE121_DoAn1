
using Autism.Common.DTOs.Request.BaiQuizz;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.Common.DTOs.Response.BaiQuizz
{
    public class Response_ChiTietLamBaiQuizzDTO
    {
        public string TenNguoiKiemTra { get; set; }
        public DateTime NgayLamQuizz { get; set; }
        public int TongDiem { get; set; }
        public List<QuestionAnswerHasDoneDTO> ChiTietBaiQuizzs { get; set; } // Chi tiết từng câu hỏi và câu trả lời
    }
    public class QuestionAnswerHasDoneDTO
    {
        public string TenCauHoi { get; set; } 
        public string TenDapAn { get; set; } 
        public bool DungSai { get; set; } 
    }
}

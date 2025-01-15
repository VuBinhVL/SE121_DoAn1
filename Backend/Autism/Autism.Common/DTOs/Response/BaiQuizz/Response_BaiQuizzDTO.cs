using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autism.Common.DTOs.Response.BaiQuizz
{
    public class Response_BaiQuizzDTO
    {
        public List<QuestionDTO> Questions { get; set; }
    }

    public class QuestionDTO
    {
        public int QuestionId { get; set; } // ID của câu hỏi
        public string QuestionText { get; set; } // Nội dung câu hỏi
        public List<AnswerDTO> Answers { get; set; } // Danh sách đáp án
    }

    public class AnswerDTO
    {
        public int AnswerId { get; set; } // ID của đáp án
        public string AnswerText { get; set; } // Nội dung đáp án
        public bool IsCorrect { get; set; } // Đáp án có đúng hay không
    }
}

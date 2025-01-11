import React from "react";
import student from "../../../assets/images/student.png";
import ask from "../../../assets/images/ask.png";
import QuestionAnswer from "../../../components/Education/Question/QuestionAnswer";

import "./Question.css";

export default function Question() {
  // Danh sách câu hỏi và câu trả lời
  const questions = [
    {
      question: "Tự kỷ là gì?",
      answer:
        "Tự kỷ (Autism Spectrum Disorder - ASD) là một rối loạn phát triển thần kinh ảnh hưởng đến giao tiếp, hành vi và cách tương tác xã hội của một người.",
    },
    {
      question: "Nguyên nhân gây ra tự kỷ?",
      answer:
        "Nguyên nhân gây ra tự kỷ hiện chưa được xác định rõ ràng. Tuy nhiên, các yếu tố như di truyền, môi trường và sự phát triển của não bộ có thể góp phần gây ra tình trạng này.",
    },
    {
      question: "Dấu hiệu nhận biết trẻ mắc tự kỷ là gì?",
      answer:
        "Dấu hiệu nhận biết bao gồm khó giao tiếp, hạn chế về ngôn ngữ, và hành vi lặp lại. Trẻ thường tránh giao tiếp bằng mắt và có thể có sở thích đặc biệt.",
    },
    {
      question: "Tự kỷ có chữa được không?",
      answer:
        "Tự kỷ không thể chữa khỏi hoàn toàn, nhưng các can thiệp sớm có thể giúp trẻ cải thiện kỹ năng và hòa nhập tốt hơn với xã hội.",
    },
  ];

  return (
    <div className="question-page">
      <div className="question-header">
        <img src={student} alt="Education Icon" className="question-icon" />
        <h2>Giáo dục</h2>
      </div>

      <div className="question-line">
        <img src={ask} alt="Question Icon" className="question-line-icon" />
        <h2 className="question-line-title">Câu hỏi thường gặp</h2>
      </div>
      <hr className="header-line" />

      <div className="question-list">
        {questions.map((item, index) => (
          <QuestionAnswer
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
}

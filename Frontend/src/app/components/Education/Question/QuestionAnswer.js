import React, { useState } from "react";
import icon from "../../../assets/icons/icon-flower.png";
import "./QuestionAnswer.css";

export default function QuestionAnswer({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  //Hiển thị cho câu trả lời
  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="qa-container">
      <div className="qa-question" onClick={toggleAnswer}>
        <img src={icon} alt="Flower Icon" className="qa-icon" />
        <strong>{question}</strong>
        <span className="qa-toggle">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && <div className="qa-answer">{answer}</div>}
    </div>
  );
}

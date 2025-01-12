import React from "react";
import Card from "../../../components/Home/Card/Card"; //Card
import student from "../../../assets/images/student.png";
import ask from "../../../assets/images/ask.png";
import video from "../../../assets/images/video.png";
import "./Education.css";
import { useNavigate } from "react-router-dom";

export default function Education() {
  const navigate = useNavigate();
  //Sự kiện cho nút bài viết video
  const handleVideo = () => {
    navigate("/education/news-video");
  };

  //Sự kiện qua trang câu hỏi
  const handleQuestion = () => {
    navigate("/education/question");
  };

  return (
    <div className="education-page">
      <div className="education-header">
        <img src={student} alt="Education Icon" className="education-icon" />
        <h2>Giáo dục</h2>
      </div>
      <div className="education-cards">
        <Card
          icon={video}
          title="Bài Viết & Video"
          description="Cung cấp kiến thức cơ bản về tự kỉ, các triệu chứng, và cách nhận biết."
          onClick={handleVideo}
        />
        <Card
          icon={ask}
          title="Câu hỏi thường gặp"
          description="Những câu hỏi phổ biến và câu trả lời chi tiết về vấn đề."
          onClick={handleQuestion}
        />
      </div>
    </div>
  );
}

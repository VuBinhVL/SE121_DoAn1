import React from "react";
import Card from "../../../components/Home/Card/Card"; //Card
import test from "../../../assets/images/kiemtra.png";
import quizz from "../../../assets/icons/quizz-test.png";
import image from "../../../assets/icons/image-test.png";
import "./Test.css";

export default function Test() {
  //Sự kiện cho nút bài viết video
  const handleVideo = () => {
    alert("Đã vào bài viết video");
    // navigate("/test");
  };

  //Sự kiện cho nút câu hỏi
  const handleQuestion = () => {
    alert("Đã vào câu hỏi");
  };
  return (
    <div className="test-page">
      <div className="test-header">
        <img src={test} alt="test Icon" className="test-icon" />
        <h2>Kiểm tra</h2>
      </div>
      <div className="test-cards">
        <Card
          icon={quizz}
          title="Kiểm tra bằng hình ảnh"
          description="Áp dụng Deeplearning để phân loại ảnh trẻ có bị tự kỉ hay không."
          onClick={handleVideo}
        />
        <Card
          icon={image}
          title="Kiểm tra bằng bài quiz"
          description="Sử dụng các câu hỏi trắc nghiệm để đánh giá khả năng nhận thức và hành vi của trẻ."
          onClick={handleQuestion}
        />
      </div>
    </div>
  );
}

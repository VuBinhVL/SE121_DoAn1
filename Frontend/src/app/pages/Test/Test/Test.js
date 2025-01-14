import React, { useState } from "react";
import Card from "../../../components/Home/Card/Card"; //Card
import test from "../../../assets/images/kiemtra.png";
import quizz from "../../../assets/icons/quizz-test.png";
import image from "../../../assets/icons/image-test.png";
import "./Test.css";
import Tester from "../Tester/Tester";

export default function Test() {
  const [showPopup, setShowPopup] = useState(false); //Hiển thị popup nhập tên người được kiểm tra
  const [targetPath, setTargetPath] = useState(""); //Lưu đường dẫn cho popup để navigate

  //Sự kiện cho nút kiểm tra ảnh bằng deeplearning
  const handleDeep = () => {
    setTargetPath("/home"); // Đường dẫn
    setShowPopup(true); // Mở popup
  };

  //Sự kiện cho làm quiz
  const handleQuestion = () => {
    setTargetPath("/test/quizz"); // Đường dẫn quiz
    setShowPopup(true); // Mở popup
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
          onClick={handleDeep}
        />
        <Card
          icon={image}
          title="Kiểm tra bằng bài quiz"
          description="Sử dụng các câu hỏi trắc nghiệm để đánh giá khả năng nhận thức và hành vi của trẻ."
          onClick={handleQuestion}
        />
      </div>
      {showPopup && (
        <Tester
          onClose={() => setShowPopup(false)}
          targetPath={targetPath} // Truyền đường dẫn đến popup
        />
      )}
    </div>
  );
}

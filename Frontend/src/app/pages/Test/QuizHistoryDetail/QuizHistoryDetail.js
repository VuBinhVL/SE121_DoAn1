import React, { useEffect, useState } from "react";
import "./QuizHistoryDetail.css";
import { fetchGet } from "../../../lib/httpHandler";
import { showErrorMessageBox } from "../../../components/MessageBox/ErrorMessageBox/showErrorMessageBox";

const QuizHistoryDetail = ({ id, onClose }) => {
  const [quizDetails, setQuizDetails] = useState(null); // Lưu chi tiết bài quiz
  const [loading, setLoading] = useState(true); // Trạng thái loading

  // Gọi API lấy chi tiết bài quiz
  useEffect(() => {
    const uri = `/api/baiquizz/chi-tiet-lich-su-lam-bai?idBaiQuizz=${id}`;
    fetchGet(
      uri,
      (res) => {
        setQuizDetails(res); // Lưu dữ liệu từ API
        setLoading(false); // Tắt trạng thái loading
      },
      (fail) => {
        showErrorMessageBox(fail.message);
        setLoading(false);
      },
      () => {
        showErrorMessageBox("Máy chủ mất kết nối");
        setLoading(false);
      }
    );
  }, [id]);

  if (loading) {
    return (
      <div className="quiz-details-overlay">
        <div className="quiz-details-container">
          <h2>Đang tải...</h2>
        </div>
      </div>
    );
  }

  if (!quizDetails) {
    return (
      <div className="quiz-details-overlay">
        <div className="quiz-details-container">
          <h2>Không tìm thấy dữ liệu</h2>
          <button className="close-button" onClick={onClose}>
            Đóng
          </button>
        </div>
      </div>
    );
  }

  //Định dạng ngày kiểm tra
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  // Destructure dữ liệu từ API
  const { tenNguoiKiemTra, ngayLamQuizz, tongDiem, chiTietBaiQuizzs } =
    quizDetails;

  return (
    <div className="quiz-details-overlay">
      <div className="quiz-details-container">
        <h3>Chi tiết bài Quizz</h3>
        <div className="quiz-info">
          <p>
            <strong>Tên người kiểm tra:</strong> {tenNguoiKiemTra}
          </p>
          <p>
            <strong>Ngày làm Quizz:</strong> {formatDate(ngayLamQuizz)}
          </p>
          <p>
            <strong>Tổng điểm:</strong> {tongDiem}
          </p>
        </div>
        <div className="quiz-questions">
          <h3>Danh sách câu hỏi</h3>
          {chiTietBaiQuizzs.map((question, index) => (
            <div key={index} className="quiz-question-item">
              <p className="question-text">{question.tenCauHoi}</p>
              <p className={`answer ${question.dungSai ? "correct" : "wrong"}`}>
                Đáp án đã chọn: {question.tenDapAn}
              </p>
            </div>
          ))}
        </div>
        <button className="close-button" onClick={onClose}>
          Đóng
        </button>
      </div>
    </div>
  );
};

export default QuizHistoryDetail;

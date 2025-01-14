import React, { useEffect, useState } from "react";
import "./QuizHistory.css";
import { fetchGet } from "../../../lib/httpHandler";
import { showErrorMessageBox } from "../../../components/MessageBox/ErrorMessageBox/showErrorMessageBox";
import QuizHistoryDetail from "../QuizHistoryDetail/QuizHistoryDetail";

const QuizHistory = () => {
  const [historyData, setHistoryData] = useState([]); //Lưu lịch sử làm bài quizz
  const [showPopup, setShowPopup] = useState(false); // Trạng thái hiển thị popup chi tiết bài quiz
  const [selectedQuizId, setSelectedQuizId] = useState(null); // ID bài quiz được chọn

  //Gọi API lấy lịch sử làm quizz
  useEffect(() => {
    const uri = "/api/baiquizz/lich-su-lam-bai";
    fetchGet(
      uri,
      (res) => {
        if (res && res.lichSuLamBai) {
          // Map dữ liệu API thành cấu trúc phù hợp
          const mappedData = res.lichSuLamBai.map((item) => ({
            id: item.idBaiQuizz,
            name: item.tenNguoiKiemTra,
            date: item.ngayLamQuizz, // Lấy phần ngày
            totalScore: item.tongDiem,
          }));
          setHistoryData(mappedData);
        }
      },
      (fail) => showErrorMessageBox(fail.message),
      () => showErrorMessageBox("Máy chủ mất kết nối")
    );
  }, []);

  //Định dạng ngày kiểm tra
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Hiển thị popup khi nhấn "Xem chi tiết"
  const handleViewDetails = (id) => {
    setSelectedQuizId(id); // Lưu ID bài quiz được chọn
    setShowPopup(true); // Hiển thị popup
  };

  return (
    <div className="quiz-history-container">
      <h1>Lịch sử làm bài Quizz</h1>
      <table className="quiz-history-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên người kiểm tra</th>
            <th>Ngày làm Quiz</th>
            <th>Tổng điểm</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {historyData.length > 0 ? (
            historyData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{formatDate(item.date)}</td>
                <td>{item.totalScore}</td>
                <td>
                  <button
                    onClick={() => handleViewDetails(item.id)}
                    className="view-details-button"
                  >
                    Xem chi tiết
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Không có dữ liệu
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {showPopup && (
        <QuizHistoryDetail
          id={selectedQuizId}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default QuizHistory;

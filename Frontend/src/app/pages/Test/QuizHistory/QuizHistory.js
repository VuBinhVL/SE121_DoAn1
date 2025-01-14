import React, { useState } from "react";
import "./QuizHistory.css";

const QuizHistory = () => {
  // Dữ liệu giả lập lịch sử làm quiz
  const [historyData, setHistoryData] = useState([
    {
      id: 1,
      name: "Nguyen Van A",
      date: "2025-01-14",
      totalScore: 85,
    },
    {
      id: 2,
      name: "Le Thi B",
      date: "2025-01-13",
      totalScore: 90,
    },
    {
      id: 3,
      name: "Tran Van C",
      date: "2025-01-12",
      totalScore: 75,
    },
  ]);

  // Xử lý khi nhấn nút "Xem chi tiết"
  const handleViewDetails = (id) => {
    alert(`Xem chi tiết lịch sử làm quiz cho ID: ${id}`);
    // Thực hiện các hành động khác, như điều hướng hoặc mở popup
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
          {historyData.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.date}</td>
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuizHistory;

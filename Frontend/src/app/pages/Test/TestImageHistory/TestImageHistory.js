import React, { useEffect, useState } from "react";
import "./TestImageHistory.css";
import { fetchGet } from "../../../lib/httpHandler";
import { showErrorMessageBox } from "../../../components/MessageBox/ErrorMessageBox/showErrorMessageBox";
import QuizHistoryDetail from "../QuizHistoryDetail/QuizHistoryDetail";

const TestImageHistory = () => {
  const [historyData, setHistoryData] = useState([]); // Lưu lịch sử kiểm tra ảnh
  const [showPopup, setShowPopup] = useState(false); // Trạng thái hiển thị popup chi tiết kiểm tra
  const [selectedCheckId, setSelectedCheckId] = useState(null); // ID kiểm tra ảnh được chọn

  // Gọi API lấy lịch sử kiểm tra ảnh
  useEffect(() => {
    const uri = "/api/kiem-tra-anh/lich-su-kiem-tra"; // Giả sử đây là endpoint mới
    fetchGet(
      uri,
      (res) => {
        if (res && res.lichSuKiemTra) {
          // Map dữ liệu API thành cấu trúc phù hợp
          const mappedData = res.lichSuKiemTra.map((item) => ({
            id: item.idKiemTra,
            name: item.tenNguoiKiemTra,
            date: item.ngayKiemTra, // Lấy phần ngày
            result: item.ketQua, // Kết quả kiểm tra
          }));
          setHistoryData(mappedData);
        }
      },
      (fail) => showErrorMessageBox(fail.message),
      () => showErrorMessageBox("Máy chủ mất kết nối")
    );
  }, []);

  // Định dạng ngày kiểm tra
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Hiển thị popup khi nhấn "Xem chi tiết"
  const handleViewDetails = (id) => {
    setSelectedCheckId(id); // Lưu ID kiểm tra ảnh được chọn
    setShowPopup(true); // Hiển thị popup
  };

  return (
    <div className="quiz-history-container">
      <h1>Lịch sử kiểm tra ảnh</h1>
      <table className="quiz-history-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên người kiểm tra</th>
            <th>Ngày kiểm tra</th>
            <th>Kết quả</th>
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
                <td>{item.result}</td>
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
          id={selectedCheckId}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default TestImageHistory;
import React, { useEffect, useState } from "react";
import "./TestImageHistory.css";
import { fetchGet } from "../../../lib/httpHandler";
import { showErrorMessageBox } from "../../../components/MessageBox/ErrorMessageBox/showErrorMessageBox";

const TestImageHistory = () => {
  const [historyData, setHistoryData] = useState([]); // Lưu lịch sử kiểm tra ảnh

  // Gọi API lấy lịch sử kiểm tra ảnh
  useEffect(() => {
    const uri = "/api/kiem-tra-anh/lich-su-kiem-tra-anh";
    fetchGet(
      uri,
      (res) => {
        console.log("API Response:", res);
        if (res && res.lichSuKiemTraAnhs) {
          // Kiểm tra xem có thuộc tính lichSuKiemTraAnhs
          const mappedData = res.lichSuKiemTraAnhs.map((item) => ({
            id: item.idKiemTraAnh, // ID kiểm tra
            name: item.tenNguoiKiemTra, // Sử dụng đúng tên thuộc tính
            date: item.ngayKiemTra,
            result: item.ketQua,
            autismProb: item.autismProb,
            nonAutismProb: item.non_AutismProb,
            image: item.image,
          }));
          // Log đường dẫn ảnh
          mappedData.forEach((item) => {
            console.log(`Image Path: /images/${item.image}`);
          });
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
    if (isNaN(date.getTime())) {
      // Kiểm tra nếu dateString không hợp lệ
      return "N/A";
    }
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="image-history-container">
      <h1>Lịch sử kiểm tra ảnh</h1>
      <table className="quiz-history-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên người kiểm tra</th>
            <th>Ngày kiểm tra</th>
            <th>Kết quả</th>
            <th>Autism Prob</th>
            <th>Non-Autism Prob</th>
            <th>Ảnh</th>
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
                  {item.autismProb != null
                    ? (item.autismProb * 100).toFixed(2) + "%"
                    : "N/A"}
                </td>
                <td>
                  {item.nonAutismProb != null
                    ? (item.nonAutismProb * 100).toFixed(2) + "%"
                    : "N/A"}
                </td>
                <td>
                  <img
                    src={`https://localhost:7000${item.image}`}
                    alt={item.result}
                    className="history-image"
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                Không có dữ liệu
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TestImageHistory;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Tester.css";
import { showErrorMessageBox } from "../../../components/MessageBox/ErrorMessageBox/showErrorMessageBox";

const Tester = ({ onClose, targetPath }) => {
  const [name, setName] = useState(""); //Tên người kiểm tra
  const [dob, setDob] = useState(""); // Ngày sinh của người kiểm tra
  const navigate = useNavigate(); // Sử dụng điều hướng

  //Nhấn nút xác nhận
  const handleSubmit = () => {
    if (!name || !dob) {
      showErrorMessageBox("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    navigate(targetPath, { state: { userName: name } }); // Điều hướng đến trang đích
    onClose(); // Đóng popup sau khi điều hướng
  };

  return (
    <div className="tester-overlay">
      <div className="tester-container">
        <h3>Thông tin người kiểm tra</h3>
        <div className="form-group">
          <label>Tên người kiểm tra:</label>
          <input
            type="text"
            placeholder="Nhập tên của bạn"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Ngày sinh:</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <div className="button-group">
          <button onClick={onClose}>Hủy</button>
          <button onClick={handleSubmit}>Xác nhận</button>
        </div>
      </div>
    </div>
  );
};

export default Tester;

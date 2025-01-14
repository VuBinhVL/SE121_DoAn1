import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
import { fetchPost } from "../../../lib/httpHandler";

export default function ForgotPassword() {
  const [tentaikhoan, setTentaikhoan] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const uri = "/api/login";
    const data = {
      tenTaiKhoan: tentaikhoan,
      email: email,
    };
    fetchPost(
      uri,
      data,
      (res) => alert("Đăng nhập thành công"),
      (fail) => alert("Đăng nhập thất bại"),
      () => alert("Mất kết nối đến máy chủ")
    );
  };

  const handleRegister = () => {
    // Điều hướng đến trang đăng ký
    navigate("/register");
  };

  const handleLogin = () => {
    // Điều hướng đến trang quên mật khẩu
    navigate("/login");
  };

  return (
    <div className="forgot-password-container">
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <h2>Quên mật khẩu</h2>

        {/* Trường nhập tên tài khoản */}
        <div className="form-group">
          <label htmlFor="tentaikhoan">Tên tài khoản</label>
          <input
            type="tentaikhoan"
            id="tentaikhoan"
            placeholder="Nhập tên tài khoản của bạn"
            value={tentaikhoan}
            onChange={(e) => setTentaikhoan(e.target.value)}
            required
          />
        </div>

        {/* Trường nhập email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Nhập email của bạn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {/* Nút tạo tài khoản và đăng ký */}
        <div className="action-buttons">
          <button
            type="button"
            className="register-button"
            onClick={handleRegister}
          >
            Tạo Tài Khoản
          </button>
          <button type="button" className="login-button" onClick={handleLogin}>
            Đăng nhập
          </button>
        </div>
        {/* Nút gửi password */}
        <button type="submit" className="forgot-password-button">
          Gửi mật khẩu qua email
        </button>
      </form>
    </div>
  );
}

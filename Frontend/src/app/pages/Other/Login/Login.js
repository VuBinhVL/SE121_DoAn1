import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [tentaikhoan, setTentaikhoan] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Tên tài khoản:", tentaikhoan);
    console.log("Password:", password);
    alert("Đăng nhập thành công!");
  };

  const handleRegister = () => {
    // Điều hướng đến trang đăng ký
    navigate("/register");
  };

  const handleForgotPassword = () => {
    // Điều hướng đến trang quên mật khẩu
    navigate("/forgot-password");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Đăng Nhập</h2>

        {/* Trường nhập tên tài khoản */}
        <div className="form-group">
          <label htmlFor="email">Tên tài khoản</label>
          <input
            type="tentaikhoan"
            id="tentaikhoan"
            placeholder="Nhập tên tài khoản của bạn"
            value={tentaikhoan}
            onChange={(e) => setTentaikhoan(e.target.value)}
            required
          />
        </div>

        {/* Trường nhập Mật khẩu */}
        <div className="form-group">
          <label htmlFor="password">Mật khẩu</label>
          <input
            type="password"
            id="password"
            placeholder="Nhập mật khẩu của bạn"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* Nút tạo tài khoản và quên mật khẩu */}
        <div className="action-buttons">
          <button
            type="button"
            className="register-button"
            onClick={handleRegister}
          >
            Tạo Tài Khoản
          </button>
          <button
            type="button"
            className="forgot-password-button"
            onClick={handleForgotPassword}
          >
            Quên Mật Khẩu
          </button>
        </div>
        {/* Nút đăng nhập */}
        <button type="submit" className="login-button">
          Đăng Nhập
        </button>
      </form>
    </div>
  );
}
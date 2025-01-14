import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { fetchPost } from "../../../lib/httpHandler";

export default function Register() {
  const [hoTen, sethoTen] = useState("");
  const [email, setEmail] = useState("");
  const [tentaikhoan, setTentaikhoan] = useState("");
  const [matkhau, setMatKhau] = useState("");
  const navigate = useNavigate();

  //Đăng ký tài khoản
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

  //Chuyển hướng sang trang quên mật khẩu
  const handlePassword = () => {
    // Điều hướng đến trang đăng ký
    navigate("/forgot-password");
  };

  //Chuyển hướng sang trang login
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Đăng ký</h2>
        <div className="form-group">
          <label htmlFor="tentaikhoan">Họ tên</label>
          <input
            type="hoTen"
            id="hoTen"
            placeholder="Nhập họ tên của bạn"
            value={hoTen}
            onChange={(e) => sethoTen(e.target.value)}
            required
          />
        </div>
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

        {/* Trường nhập mật khẩu */}
        <div className="form-group">
          <label htmlFor="matKhau">Mật khẩu</label>
          <input
            type="password"
            id="matKhau"
            placeholder="Nhập mật khẩu"
            value={matkhau}
            onChange={(e) => setMatKhau(e.target.value)}
            required
          />
        </div>
        {/* Nút tạo tài khoản và đăng ký */}
        <div className="action-buttons">
          <button type="button" className="login-button" onClick={handleLogin}>
            Đăng nhập
          </button>
          <button
            type="button"
            className="forgot-password-button"
            onClick={handlePassword}
          >
            Quên mật khẩu
          </button>
        </div>
        {/* Nút đăng ký */}
        <button type="submit" className="register-button">
          Đăng ký
        </button>
      </form>
    </div>
  );
}

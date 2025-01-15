import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png"; //Logo
import avatar from "../../assets/images/avatar_default.png"; //Avatar
import { sIsLoggedIn } from "../../../store";
import "./Header.css";
import "../../styles/index.css";

export default function Header() {
  const navigate = useNavigate();
  const isLoggedInValue = sIsLoggedIn.use();
  const [showMenu, setShowMenu] = useState(false); // Hiển thị menu dropdown

  // Xử lý khi nhấn vào avatar cho đăng nhập và chưa đăng nhập
  const handleAvatarClick = () => {
    if (isLoggedInValue) {
      setShowMenu((prev) => !prev); // Hiển thị/ẩn menu
    } else {
      navigate("/login"); // Điều hướng đến trang đăng nhập nếu chưa đăng nhập
    }
  };

  // Đăng xuất
  const handleLogout = () => {
    setShowMenu(false); // Đóng dropdown
    localStorage.removeItem("jwtToken"); // Xóa thông tin người dùng
    sIsLoggedIn.set(false);
    navigate("/login"); // Chuyển hướng về trang login
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/home">
          <img className="logo-img" src={logo} alt="Logo phòng khám"></img>
        </Link>
        <p className="title">SD-Bridge</p>
      </div>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/home" className="nav-links">
              Trang chủ
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/education" className="nav-links">
              Giáo dục
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/test" className="nav-links">
              Kiểm tra
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/story" className="nav-links">
              Câu chuyện thành công
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/game" className="nav-links">
              Trò chơi
            </Link>
          </li>
          <li className="nav-item">
            <div className="avatar-container" onClick={handleAvatarClick}>
              <img src={avatar} alt="Avatar" className="avatar" />
              {isLoggedInValue && showMenu && (
                <ul className="dropdown-menu">
                  <li onClick={() => navigate("/profile")}>
                    Thông tin tài khoản
                  </li>
                  <li onClick={() => navigate("/image-history")}>
                    Lịch sử kiểm tra ảnh
                  </li>
                  <li onClick={() => navigate("/quiz-history")}>
                    Lịch sử làm quizz
                  </li>
                  <li onClick={handleLogout}>Đăng xuất</li>
                </ul>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

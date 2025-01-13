import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png"; //Logo
import avatar from "../../assets/images/avatar_default.png"; //Avatar
import "./Header.css";
import "../../styles/index.css";

export default function Header() {
  const navigate = useNavigate();
  //Điều hướng đến trang đăng nhập
  const handdleLogin = () => {
    navigate("/login");
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
            <img
              src={avatar}
              alt="Avatar"
              className="avatar"
              onClick={handdleLogin}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

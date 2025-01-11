import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"; //Logo
import avatar from "../../assets/images/avatar_default.png"; //Avatar
import "./Header.css";
import "../../styles/index.css";

export default function Header() {
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
            <Link to="/" className="nav-links">
              Kiểm tra
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Câu chuyện thành công
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Trò chơi
            </Link>
          </li>
          <li className="nav-item">
            <img src={avatar} alt="Avatar" className="avatar" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

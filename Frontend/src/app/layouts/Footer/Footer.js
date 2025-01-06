import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"; //Logo
import gmail from "../../assets/icons/gmail.png"; //Logo
import phone from "../../assets/icons/phone.png"; //Logo
import location from "../../assets/icons/location.png"; //Logo

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="SD-Bridge Logo" />
          <p>SD-Bridge</p>
        </div>

        <div className="footer-menu">
          <h4>Menu</h4>
          <div className="sub-divider"></div>
          <ul>
            <li>
              <Link to="/education" className="nav-link">
                Giáo dục
              </Link>
            </li>

            <li>
              <Link to="/education" className="nav-link">
                Kiểm tra
              </Link>
            </li>
            <li>
              <Link to="/education" className="nav-link">
                Câu chuyện thành công
              </Link>
            </li>
            <li>
              <Link to="/education" className="nav-link">
                Trò chơi
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-contacts">
          <h4>Contacts</h4>
          <div className="sub-divider"></div>
          <ul>
            <li>
              <img src={phone} alt="Phone Icon" className="contact-icon" />
              +84 222222222
            </li>
            <li>
              <img src={gmail} alt="Gmail Icon" className="contact-icon" />
              asdbridge@gmail.com
            </li>
            <li>
              <img
                src={location}
                alt="Location Icon"
                className="contact-icon"
              />
              Ktx Khu B Đhqg, Đông Hòa, Phường Đông Hòa, Thành Phố Dĩ An, Bình
              Dương
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

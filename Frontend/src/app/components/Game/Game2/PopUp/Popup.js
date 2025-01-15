import React from "react";
import "./Popup.css";

export default function Popup({ title, content, image, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        {image && <img src={image} alt="Popup" className="popup-image" />}
        <h3>{title}</h3>
        <p>{content}</p>
        <button onClick={onClose} className="next-level-button">
          Tiếp tục
        </button>
      </div>
    </div>
  );
}

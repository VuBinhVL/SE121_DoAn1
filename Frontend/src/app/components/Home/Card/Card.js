import React from "react";
import "./Card.css";

export default function Card({ icon, title, description }) {
  return (
    <div className="card">
      <img src={icon} alt="Card Icon" className="card-icon" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}

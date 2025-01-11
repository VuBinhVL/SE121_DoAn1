import React from "react";
import video from "../../../assets/images/video.png";
import student from "../../../assets/images/student.png";
import "./NewsVideo.css";

export default function NewsVideo() {
  return (
    <div className="news-video-page">
      <div className="news-video-header">
        <img src={student} alt="Education Icon" className="news-video-icon" />
        <h2>Giáo dục</h2>
      </div>

      <div className="news-video-line">
        <img
          src={video}
          alt="News Video Icon"
          className="news-video-line-icon"
        />
        <h2 className="news-video-line-title">Bài Viết & Video</h2>
      </div>
      <hr className="news-video-header-line" />

      <div className="news-video-list"></div>
    </div>
  );
}

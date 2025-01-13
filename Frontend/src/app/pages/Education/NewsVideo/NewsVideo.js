import React, { useState } from "react";
import video from "../../../assets/images/video.png";
import student from "../../../assets/images/student.png";
import "./NewsVideo.css";
import Topic1 from "../TopicForNewsVideo/Topic1/Topic1";
import Topic2 from "../TopicForNewsVideo/Topic2/Topic2";
import Topic3 from "../TopicForNewsVideo/Topic3/Topic3";
import Topic4 from "../TopicForNewsVideo/Topic4/Topic4";
import Topic5 from "../TopicForNewsVideo/Topic5/Topic5";

export default function NewsVideo() {
  const [selectedTopic, setSelectedTopic] = useState("I. Giới Thiệu Về Tự Kỉ");

  // Dữ liệu các chủ đề
  const topics = [
    { id: 1, title: "I. Giới Thiệu Về Tự Kỉ", content: <Topic1 /> },
    { id: 2, title: "II. Triệu Chứng Của Tự Kỉ", content: <Topic2 /> },
    { id: 3, title: "III. Nguyên nhân", content: <Topic3 /> },
    { id: 4, title: "IV. Cách Nhận Biết Tự Kỉ", content: <Topic4 /> },
    { id: 5, title: "V. Hỗ Trợ Và Can Thiệp", content: <Topic5 /> },
  ];

  const selectedContent = topics.find(
    (topic) => topic.title === selectedTopic
  )?.content;
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

      {/* Layout: Thanh bên trái và nội dung */}
      <div className="news-video-container">
        {/* Thanh bên trái */}
        <div className="news-video-sidebar">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className={`news-video-sidebar-item ${
                selectedTopic === topic.title ? "active" : ""
              }`}
              onClick={() => setSelectedTopic(topic.title)}
            >
              {topic.title} <span>&gt;&gt;</span>
            </div>
          ))}
        </div>

        {/* Nội dung */}
        <div className="news-video-content">
          <h2>{selectedTopic}</h2>
          <div className="news-video-content-body">{selectedContent}</div>
        </div>
      </div>
    </div>
  );
}

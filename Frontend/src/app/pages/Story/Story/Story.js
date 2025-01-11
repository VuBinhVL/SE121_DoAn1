import React from "react";
import story from "../../../assets/icons/story.png";
import sourceLogo from "../../../assets/images/dantri-logo.png";
import sampleImage from "../../../assets/images/image-minhhoa.png";

import NewsCard from "../../../components/Story/NewsCard/NewCard";
import "./Story.css";

export default function Story() {
  // Dữ liệu các bài viết
  const news = [
    {
      image: sampleImage,
      title:
        "Từ cậu bé tự kỷ trở thành thiên tài vật lý, được kỳ vọng đoạt giải Nobel",
      author: "Ngô Trung Dũng",
      time: "Thứ bảy, 20/04/2024 - 10:21",
      source: sourceLogo,
    },
    {
      image: sampleImage,
      title:
        "Từ cậu bé tự kỷ trở thành thiên tài vật lý, được kỳ vọng đoạt giải Nobel",
      author: "Ngô Trung Dũng",
      time: "Thứ bảy, 20/04/2024 - 10:21",
      source: sourceLogo,
    },
    {
      image: sampleImage,
      title:
        "Từ cậu bé tự kỷ trở thành thiên tài vật lý, được kỳ vọng đoạt giải Nobel",
      author: "Ngô Trung Dũng",
      time: "Thứ bảy, 20/04/2024 - 10:21",
      source: sourceLogo,
    },
  ];

  return (
    <div className="story-page">
      <div className="story-header">
        <img src={story} alt="Story Icon" className="story-icon" />
        <h2>Câu chuyện thành công</h2>
      </div>

      <div className="story-list">
        {news.map((item, index) => (
          <NewsCard
            key={index}
            image={item.image}
            title={item.title}
            author={item.author}
            time={item.time}
            source={item.source}
            onClick={() => alert(`Bạn đã chọn bài viết: ${item.title}`)} // Sự kiện khi nhấn vào card
          />
        ))}
      </div>
    </div>
  );
}

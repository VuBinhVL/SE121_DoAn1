import React from "react";
import "./NewsCard.css";

export default function NewsCard({
  image,
  title,
  author,
  time,
  source,
  onClick,
}) {
  const handleCardClick = (e) => {
    e.stopPropagation(); // Ngăn sự kiện chồng lấn nếu cần
    onClick && onClick(); // Gọi sự kiện onClick từ props nếu được truyền
  };

  return (
    <div className="news-card" onClick={handleCardClick}>
      {/* Hình ảnh */}
      <div className="news-card-image">
        <img src={image} alt={title} />
      </div>

      {/* Nội dung */}
      <div className="news-card-content">
        {/* Tiêu đề */}
        <h3 className="news-card-title">{title}</h3>

        {/* Tác giả và thời gian */}
        <div className="news-card-meta">
          <span className="news-card-author">{author}</span>
          <span className="news-card-time">- {time}</span>
        </div>

        {/* Nguồn */}
        <div className="news-card-source">
          <img src={source} alt="Source" />
        </div>

        {/* Đọc thêm
        <div className="news-card-read-more">Đọc thêm &gt;&gt;&gt;</div> */}
      </div>

      {/* Thanh ngang */}
      <hr className="news-card-divider" />
    </div>
  );
}

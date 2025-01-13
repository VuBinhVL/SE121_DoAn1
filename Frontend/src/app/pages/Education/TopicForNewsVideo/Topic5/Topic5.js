import React from "react";
import "./Topic5.css";

export default function Topic5() {
  return (
    <div className="topic5-autism">
      {/* Video */}
      <div className="autism-video">
        <iframe
          width="600"
          height="315"
          src="https://www.youtube.com/embed/JYPeOm5A8XQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

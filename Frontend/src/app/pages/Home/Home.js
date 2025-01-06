import React from "react";
import "./Home.css"; // File CSS sẽ được tạo bên dưới
import familly from "../../assets/images/family.png";
import sunflower from "../../assets/images/sunflower.png";
import student from "../../assets/images/student.png";
import video from "../../assets/images/video.png";
import ask from "../../assets/images/ask.png";
import robot from "../../assets/images/robot.png";
import kiemtra from "../../assets/images/kiemtra.png";
import storyimage from "../../assets/images/storyimage.png";
import story from "../../assets/icons/story.png";
import game from "../../assets/icons/game.png";
import playergame from "../../assets/images/playergame.png";
import Card from "../../components/Home/Card/Card"; //Card
import Button from "../../components/Home//Button/Button"; //Button

export default function Home() {
  return (
    <div className="home">
      <div className="home-introduction">
        <h1>
          Chào mừng đến với <span className="highlight">ASD Bridge</span> - nơi
          chúng tôi cùng nhau xây dựng cầu nối hiểu biết và hỗ trợ cho trẻ tự kỉ
          và gia đình.
        </h1>

        <div className="home-images">
          <img src={familly} alt="Family" className="icon-family" />
          <p>
            <strong>"ASD Bridge"</strong> là cây cầu kết nối kiến thức, sự đồng
            cảm và hỗ trợ giữa các gia đình, giáo viên và trẻ em có ASD (Autism
            Spectrum Disorder). Chúng tôi tin rằng, với sự hiểu biết và giáo dục
            đúng đắn, mỗi trẻ đều có thể đạt được thành công của riêng mình.
          </p>
          <img src={sunflower} alt="Sunflowers" className="icon-sunflower" />
        </div>
      </div>

      {/* Giới thiệu giáo dục */}
      <div className="home-education">
        <div className="education-header">
          <img src={student} alt="Education Icon" className="education-icon" />
          <h2>Giáo dục</h2>
        </div>
        <div className="education-cards">
          <Card
            icon={video}
            title="Bài Viết & Video"
            description="Cung cấp kiến thức cơ bản về tự kỉ, các triệu chứng, và cách nhận biết."
          />
          <Card
            icon={ask}
            title="Câu hỏi thường gặp"
            description="Những câu hỏi phổ biến và câu trả lời chi tiết về vấn đề."
          />
        </div>
      </div>

      {/* Giới thiệu phần kiểm tra */}
      <div className="home-test">
        <div className="test-header">
          <img src={kiemtra} alt="Test Icon" className="test-icon" />
          <h2>Kiểm tra</h2>
        </div>
        <div className="test-body">
          <div className="test-content">
            <p>
              Những câu hỏi độc đáo được thiết kế riêng cho bạn hoặc con bạn và
              xác định chính xác mọi đặc điểm của bệnh tự kỉ. Ngoài ra hệ thống
              AI còn giúp phát hiện hình ảnh trẻ có mắc chứng tự kỉ ngay lập
              tức!!
            </p>
            <Button label="Bắt đầu" />
          </div>
          <div className="test-robot">
            <img src={robot} alt="Robot Assistant" className="robot-icon" />
          </div>
        </div>
      </div>

      {/* Phần giới thiệu câu chuyện */}
      <div className="home-story">
        <div className="story-header">
          <img src={story} alt="Story Icon" className="story-icon" />
          <h2>Câu chuyện thành công</h2>
        </div>
        <div className="story-body">
          <div className="story-content">
            <p>
              Những câu chuyện thành công là minh chứng sống động rằng, với tình
              yêu thương và sự hỗ trợ đúng đắn, mọi rào cản đều có thể vượt qua.
              Hãy cùng khám phá hành trình đầy cảm hứng của những trẻ tự kỉ đã
              vươn lên và tỏa sáng!
            </p>
            <Button label="Đọc thêm" />
          </div>
          <div className="story-image">
            <img src={storyimage} alt="Story Image" className="story-img" />
            <p className="image-caption">
              Khắc Hưng - Cậu bé 14 tuổi vượt qua thử thách của chứng tự kỉ, lập
              kỷ lục Guinness Thế giới
            </p>
          </div>
        </div>
      </div>

      {/* Phần giới thiệu trò chơi */}
      <div className="home-game">
        <div className="game-header">
          <img src={game} alt="Game Icon" className="game-icon" />
          <h2>Trò chơi</h2>
        </div>
        <div className="game-body">
          <div className="game-content">
            <p>
              Trò chơi – Không chỉ là giải trí, mà còn là hành trình học hỏi và
              phát triển. Tại đây, mỗi trò chơi đều được thiết kế để giúp trẻ tự
              kỉ khám phá cảm xúc, hiểu hành vi, kết nối xã hội, và mở ra những
              khả năng tiềm ẩn trong chính mình.
            </p>
            <Button label="Chơi ngay" />
          </div>
          <div className="game-image">
            <img src={playergame} alt="Player Game" className="game-img" />
          </div>
        </div>
      </div>

      {/* Phần khoảng trắng */}
      <div className="home-blank"></div>
    </div>
  );
}

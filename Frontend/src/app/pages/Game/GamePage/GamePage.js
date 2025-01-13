import React from "react";
import Card from "../../../components/Home/Card/Card"; //Card
import student from "../../../assets/icons/game.png";
import ask from "../../../assets/images/ask.png";
import video from "../../../assets/images/video.png";
import "./GamePage.css";
import { useNavigate } from "react-router-dom";

export default function GamePage() {
  const navigate = useNavigate();

  //Sự kiện cho game thứ nhất
  const handleGame1 = () => {
    navigate("/game/game1");
  };

  //Sự kiện cho game thứ hai
  const handleGame2 = () => {
    // navigate("/education/question");
    alert("Đã vào game 2");
  };

  //Sự kiện cho game thứ ba
  const handleGame3 = () => {
    // navigate("/education/question");
    alert("Đã vào game 3");
  };

  return (
    <div className="game-page">
      <div className="game-header">
        <img src={student} alt="game Icon" className="game-icon" />
        <h2>Trò chơi</h2>
      </div>
      <div className="game-cards">
        <Card
          icon={video}
          title="Game 1"
          description="Cung cấp biểu cảm cảm xúc."
          onClick={handleGame1}
        />
        <Card
          icon={ask}
          title="Game 2"
          description="Bức tranh biểu cảm."
          onClick={handleGame2}
        />

        <Card
          icon={ask}
          title="Game 3"
          description="Bức tranh biểu cảm."
          onClick={handleGame3}
        />
      </div>
    </div>
  );
}

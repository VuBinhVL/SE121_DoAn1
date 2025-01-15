import React from "react";
import Card from "../../../components/Home/Card/Card"; //Card
import logogame from "../../../assets/icons/game.png";
import game2 from "../../../assets/images/gameghephinh.png";
import game3 from "../../../assets/images/gamehieuhanhvi.png";
import game1 from "../../../assets/images/gamethehiencamxuc.png";
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
    navigate("/game/game2");
  };

  //Sự kiện cho game thứ ba
  const handleGame3 = () => {
    navigate("/game/game3");
  };

  return (
    <div className="game-page">
      <div className="game-header">
        <img src={logogame} alt="game Icon" className="game-icon" />
        <h2>Trò chơi</h2>
      </div>
      <div className="game-cards">
        <Card
          icon={game1}
          title="Thể hiện cảm xúc"
          description="Cung cấp biểu cảm cảm xúc, giúp trẻ nhận biết nên biểu cảm như thế nào cho đúng"
          onClick={handleGame1}
        />
        <Card
          icon={game2}
          title="Ghép ảnh cảm xúc"
          description="Giúp trẻ nhận biết các cảm xúc khác nhau thông qua việc chơi trò ghép ảnh."
          onClick={handleGame2}
        />

        <Card
          icon={game3}
          title="Hiểu tình huống"
          description="Trò chơi giúp trẻ biết cách ứng xử với các tình huống khác nhau."
          onClick={handleGame3}
        />
      </div>
    </div>
  );
}

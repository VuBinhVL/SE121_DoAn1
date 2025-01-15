import React, { useState } from "react";
import { showSuccessMessageBox } from "../../../components/MessageBox/SuccessMessageBox/showSuccessMessageBox";
import { showErrorMessageBox } from "../../../components/MessageBox/ErrorMessageBox/showErrorMessageBox";
import Popup from "../../../components/Game/Game2/PopUp/Popup"; // Import Popup
import "./Game2.css";
import anger from "../../../assets/images/images_game2/anger.jpg";
import joy from "../../../assets/images/images_game2/joy.jpg";
import disgust from "../../../assets/images/images_game2/disgust.jpg";
import fear from "../../../assets/images/images_game2/fear.jpg";
import { useNavigate } from "react-router-dom";

// Danh sách các màn chơi
const levels = [
  {
    image: anger,
    name: "Tức giận",
    content:
      "Tức giận là cảm xúc tự nhiên khi bạn cảm thấy không hài lòng hoặc bị tổn thương. Tuy nhiên, hãy học cách kiểm soát cảm xúc này để không làm tổn thương bản thân và những người xung quanh.",
  },
  {
    image: joy,
    name: "Vui vẻ",
    content:
      "Vui vẻ là cảm xúc mang lại năng lượng tích cực. Hãy lan tỏa niềm vui đến những người xung quanh và tận hưởng từng khoảnh khắc trong cuộc sống.",
  },
  {
    image: disgust,
    name: "Phàn nàn",
    content:
      "Cảm giác phàn nàn đôi khi phản ánh những điều bạn không hài lòng. Hãy dùng cảm xúc này để cải thiện tình huống thay vì chỉ tập trung vào sự tiêu cực.",
  },
  {
    image: fear,
    name: "Sợ hãi",
    content:
      "Sợ hãi là cảm xúc giúp chúng ta nhận biết nguy hiểm. Tuy nhiên, đừng để nỗi sợ hãi kìm hãm bạn, hãy đối mặt và vượt qua nó.",
  },
];

//Cắt ảnh
const generatePieces = () => {
  const pieces = [];
  const size = 3; // Số hàng/cột
  let id = 1;

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      pieces.push({
        id: id,
        x: (col * 100) / (size - 1), // Tính toán vị trí X của mảnh
        y: (row * 100) / (size - 1), // Tính toán vị trí Y của mảnh
        position: null, // Vị trí hiện tại (null = chưa đặt)
      });
      id++;
    }
  }

  return pieces;
};

export default function Game2() {
  const [currentLevel, setCurrentLevel] = useState(0); // Màn chơi hiện tại
  const [pieces, setPieces] = useState(generatePieces());
  const [showPopup, setShowPopup] = useState(false); // Trạng thái hiển thị popup
  const navigate = useNavigate();

  //Nút xác nhận qua màn
  const checkPuzzle = () => {
    const allPiecesPlaced = pieces.every((piece) => piece.position !== null);

    if (!allPiecesPlaced) {
      showErrorMessageBox(
        "Bạn chưa hoàn thành xếp hình. Hãy đặt tất cả các mảnh ghép!"
      );
      return;
    }

    const puzzleGrid = [...Array(9)];
    pieces.forEach((piece) => {
      if (piece.position !== null) {
        puzzleGrid[piece.position - 1] = piece.id;
      }
    });

    const isCorrect = puzzleGrid.every(
      (pieceId, index) => pieceId === index + 1
    );

    if (isCorrect) {
      setShowPopup(true); // Hiển thị popup
    } else {
      showErrorMessageBox("Sai rồi! Hãy thử lại nhé.");
    }
  };

  const nextLevel = () => {
    setShowPopup(false); // Đóng popup
    if (currentLevel < levels.length - 1) {
      setCurrentLevel(currentLevel + 1);
      setPieces(generatePieces()); // Reset các mảnh
    } else {
      showSuccessMessageBox("Chúc mừng! Bạn đã hoàn thành tất cả các màn!");
      setTimeout(navigate("/game"), 5000);
    }
  };

  const updatePiecePosition = (pieceId, newPosition) => {
    const isSlotOccupied = pieces.some(
      (piece) => piece.position === newPosition
    );
    if (isSlotOccupied) return;

    setPieces((prev) =>
      prev.map((piece) =>
        piece.id === pieceId ? { ...piece, position: newPosition } : piece
      )
    );
  };

  const handleSlotClick = (pieceId) => {
    setPieces((prev) =>
      prev.map((piece) =>
        piece.id === pieceId ? { ...piece, position: null } : piece
      )
    );
  };

  return (
    <div className="game2-container">
      <div className="puzzle-and-reference">
        <div className="puzzle-area">
          <h3>Khu vực xếp hình</h3>
          <div className="puzzle-grid">
            {[...Array(9)].map((_, index) => (
              <div
                key={index}
                className="puzzle-slot"
                onDrop={(e) => {
                  const pieceId = e.dataTransfer.getData("pieceId");
                  updatePiecePosition(parseInt(pieceId), index + 1);
                }}
                onDragOver={(e) => e.preventDefault()}
              >
                {pieces.find((piece) => piece.position === index + 1) && (
                  <div
                    className="puzzle-piece"
                    style={{
                      backgroundImage: `url(${levels[currentLevel].image})`,
                      backgroundPosition: `${
                        pieces.find((piece) => piece.position === index + 1).x
                      }% ${
                        pieces.find((piece) => piece.position === index + 1).y
                      }%`,
                      backgroundSize: `${300}% ${300}%`,
                    }}
                    onClick={() =>
                      handleSlotClick(
                        pieces.find((piece) => piece.position === index + 1).id
                      )
                    }
                  ></div>
                )}
              </div>
            ))}
          </div>
          <p>Hãy sắp xếp bức tranh trên thành biểu cảm bên cạnh.</p>
        </div>

        <div className="reference-area">
          <h3>Ảnh mẫu</h3>
          <img
            src={levels[currentLevel].image}
            alt="Ảnh mẫu"
            className="reference-image"
          />
          <p>
            <b>{levels[currentLevel].name}</b>
          </p>
        </div>
      </div>

      <div className="shuffled-area">
        <h3>Các mảnh ghép</h3>
        <div className="shuffled-grid">
          {pieces
            .filter((piece) => piece.position === null)
            .map((piece) => (
              <div
                key={piece.id}
                className="shuffled-piece"
                style={{
                  backgroundImage: `url(${levels[currentLevel].image})`,
                  backgroundPosition: `${piece.x}% ${piece.y}%`,
                  backgroundSize: `${300}% ${300}%`,
                }}
                draggable
                onDragStart={(e) => e.dataTransfer.setData("pieceId", piece.id)}
              ></div>
            ))}
        </div>
      </div>
      <button onClick={checkPuzzle} className="confirm-button">
        Xác nhận
      </button>

      {/* Popup */}
      {showPopup && (
        <Popup
          title={levels[currentLevel].name}
          content={levels[currentLevel].content}
          image={levels[currentLevel].image} // Truyền ảnh vào popup
          onClose={nextLevel}
        />
      )}
    </div>
  );
}

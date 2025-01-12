import React, { useState, useEffect } from "react";
import "./Game1.css";

const questions = [
  {
    question: "Khi bạn được tặng quà, bạn sẽ cảm thấy như thế nào?",
    image: "https://via.placeholder.com/300", // Thay link hình ảnh thật
    correctAnswer: "😊",
    advice: "Hãy trân trọng món quà từ người khác và bày tỏ lòng biết ơn nhé!",
  },
  {
    question: "Khi bạn làm mất đồ chơi yêu thích, bạn sẽ cảm thấy ra sao?",
    image: "https://via.placeholder.com/300", // Thay link hình ảnh thật
    correctAnswer: "😢",
    advice:
      "Cảm xúc buồn là bình thường, hãy chia sẻ với cha mẹ để tìm lại đồ chơi!",
  },
];

const emotions = [
  { emoji: "😢", description: "Buồn" },
  { emoji: "😡", description: "Tức giận" },
  { emoji: "😊", description: "Vui vẻ" },
  { emoji: "😱", description: "Sợ hãi" },
];

export default function Game1() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [timer, setTimer] = useState(30);

  // Xử lý logic giảm thời gian
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Khi hết giờ, tự động chuyển câu hỏi
    if (timer === 0) {
      handleTimeout();
    }

    return () => clearInterval(countdown);
  }, [timer]);

  // Xử lý khi trả lời câu hỏi
  const handleAnswer = (choice) => {
    const correct = questions[currentQuestion].correctAnswer;

    if (choice === correct) {
      setScore(score + 10);
      setFeedback("Bạn đã trả lời đúng! +10 điểm");
    } else {
      setFeedback(
        `Sai rồi! Đáp án đúng là ${correct}. ${questions[currentQuestion].advice}`
      );
    }

    setTimeout(() => nextQuestion(), 2000);
  };

  // Xử lý khi hết thời gian
  const handleTimeout = () => {
    setFeedback(
      `Hết giờ! Đáp án đúng là ${questions[currentQuestion].correctAnswer}.`
    );
    setTimeout(() => nextQuestion(), 2000);
  };

  // Chuyển sang câu hỏi tiếp theo
  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(30);
      setFeedback(null);
    } else {
      alert(`Trò chơi kết thúc! Tổng điểm của bạn: ${score}`);
      setCurrentQuestion(0);
      setScore(0);
      setTimer(30);
      setFeedback(null);
    }
  };

  return (
    <div className="game-container">
      {/* Điểm của người chơi */}
      <div className="score">Điểm: {score}</div>

      {/* Bộ đếm thời gian */}
      <div className="timer">Thời gian: {timer}s</div>

      {/* Câu hỏi */}
      <div className="question">
        <h2>{questions[currentQuestion].question}</h2>
        <img
          src={questions[currentQuestion].image}
          alt="Câu hỏi hình ảnh"
          className="question-image"
        />
      </div>

      {/* Thẻ cảm xúc */}
      <div className="playcards">
        {emotions.map((emotion, index) => (
          <button
            key={index}
            className="playcard"
            onClick={() => handleAnswer(emotion.emoji)}
          >
            <span className="emoji">{emotion.emoji}</span>
            <span className="description">{emotion.description}</span>
          </button>
        ))}
      </div>

      {/* Phản hồi */}
      {feedback && <div className="feedback">{feedback}</div>}
    </div>
  );
}

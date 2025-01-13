import React, { useState } from "react";
import cau2 from "../../../assets/icons/askgame1/cau2.png"; // Ảnh câu 2
import cau3 from "../../../assets/icons/askgame1/cau3.png"; // Ảnh câu 3
import cau4 from "../../../assets/icons/askgame1/cau4.png"; // Ảnh câu 4
import cau5 from "../../../assets/icons/askgame1/cau5.png"; // Ảnh câu 5
import cau6 from "../../../assets/icons/askgame1/cau6.png"; // Ảnh câu 6
import cau7 from "../../../assets/icons/askgame1/cau7.png"; // Ảnh câu 7
import cau8 from "../../../assets/icons/askgame1/cau8.png"; // Ảnh câu 8
import cau9 from "../../../assets/icons/askgame1/cau9.png"; // Ảnh câu 9
import cau10 from "../../../assets/icons/askgame1/cau10.png"; // Ảnh câu 10
import { showSuccessMessageBox } from "../../../components/MessageBox/SuccessMessageBox/showSuccessMessageBox";
import { showErrorMessageBox } from "../../../components/MessageBox/ErrorMessageBox/showErrorMessageBox";
import "./Game3.css";
import { useNavigate } from "react-router-dom";

// Câu hỏi
const questions = [
  {
    question: "Câu 1: Tại sao cậu bé lại tức giận?",
    image: "https://tazagift.com/wp-content/uploads/2023/02/qua-tang-4.jpeg",
    correctAnswer:
      "Có thể cậu bé bị trêu chọc hoặc bạn bè vừa làm điều gì đó không đúng.",
    advice:
      "Hãy thử quan sát các bạn xung quanh cậu bé. Có điều gì có thể khiến cậu ấy không hài lòng không?",
    answers: [
      "Có thể cậu bé bị trêu chọc hoặc bạn bè vừa làm điều gì đó không đúng.",
      "Cậu bé không thích món quà được tặng.",
      "Cậu bé không muốn tham gia trò chơi với các bạn.",
      "Cậu bé cảm thấy mệt mỏi sau giờ học.",
    ],
  },
  {
    question: "Câu 2: Tại sao cô bé lại chạy nhanh dưới trời mưa?",
    image: cau2,
    correctAnswer: "Cô bé không muốn bị ướt hoặc đang vội đến một nơi nào đó.",
    advice: "Nhìn bầu trời xem, có điều gì đang xảy ra?",
    answers: [
      "Cô bé không muốn bị ướt hoặc đang vội đến một nơi nào đó.",
      "Cô bé đang chơi trò chơi với bạn bè.",
      "Cô bé đang tìm kiếm món đồ bị rơi.",
      "Cô bé đang cố gắng đón xe buýt.",
    ],
  },
  {
    question: "Câu 3: Tại sao cậu bé lại bịt mũi?",
    image: cau3,
    correctAnswer: "Có thể thức ăn bị cháy hoặc có mùi gì đó khó chịu.",
    advice: "Nếu bạn ngửi thấy mùi khó chịu, bạn sẽ làm gì?",
    answers: [
      "Có thể thức ăn bị cháy hoặc có mùi gì đó khó chịu.",
      "Cậu bé đang cảm thấy không khỏe.",
      "Cậu bé không thích mùi nước hoa của bạn.",
      "Cậu bé đang giả vờ để gây cười cho bạn bè.",
    ],
  },
  // {
  //   question: "Câu 4: Tại sao cô bé lại mang con mèo vào nhà?",
  //   image: cau3,
  //   correctAnswer: "Cô bé muốn giúp chú mèo tránh bị ướt hoặc cảm lạnh.",
  //   advice: "Nhìn thời tiết bên ngoài, có điều gì đang xảy ra với con mèo?",
  // },
  // {
  //   question: "Câu 5: Điều gì khiến cậu bé buồn?",
  //   image: cau3,
  //   correctAnswer: "Có thể cậu bé đã trồng cây đó và rất yêu quý nó.",
  //   advice: "Nếu cây của con bị gãy, con sẽ cảm thấy thế nào?",
  // },
  // {
  //   question: "Câu 6: Tại sao các bạn nhỏ lại cười như vậy?",
  //   image: cau3,
  //   correctAnswer:
  //     "Có thể ai đó trong lớp làm điều gì hài hước hoặc một tình huống buồn cười vừa xảy ra.",
  //   advice:
  //     "Nhìn xem các bạn có đang nhìn ai hoặc điều gì không? Có điều gì buồn cười không?",
  // },
  // {
  //   question: "Câu 7: Tại sao cô bé không vui khi nhìn đĩa rau?",
  //   image: cau3,
  //   correctAnswer:
  //     "Có thể cô bé không thích ăn rau hoặc chưa quen với món ăn này.",
  //   advice: "Nếu bạn không thích một món ăn, con sẽ làm gì?",
  // },
  // {
  //   question: "Câu 8: Điều gì vừa xảy ra với cậu bé?",
  //   image: cau3,
  //   correctAnswer:
  //     "Có thể cậu bé bị ngã xe đạp khi đang tập đi hoặc không chú ý.",
  //   advice: "Bạn đã từng ngã xe đạp chưa? Khi đó bạn cảm thấy thế nào?",
  // },
  // {
  //   question: "Câu 9: Tại sao cô bé lại hạnh phúc?",
  //   image: cau3,
  //   correctAnswer: "Cô bé đang được tổ chức sinh nhật và cảm thấy rất vui.",
  //   advice:
  //     "Nhìn xem trên bàn có gì đặc biệt? Đây có phải là một ngày đặc biệt không?",
  // },
  // {
  //   question: "Câu 10: Tại sao cậu bé lại che mặt?",
  //   image: cau3,
  //   correctAnswer: "Có thể cậu bé sợ tiếng sủa của chó hoặc chưa quen với nó.",
  //   advice:
  //     "Con có nghĩ cậu bé cảm thấy không thoải mái với tiếng sủa của chú chó không!",
  // },
];

export default function Game3() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  // Xử lý khi trả lời câu hỏi
  const handleAnswer = (choice) => {
    const correct = questions[currentQuestion].correctAnswer;

    if (choice === correct) {
      setScore(score + 10);
      showSuccessMessageBox("Bạn đã trả lời đúng! +10 điểm");
    } else {
      showErrorMessageBox(`Sai rồi! ${questions[currentQuestion].advice}`);
    }

    setTimeout(() => nextQuestion(), 2000);
  };

  // Chuyển sang câu hỏi tiếp theo
  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      showSuccessMessageBox(
        `Trò chơi kết thúc! Tổng điểm của bạn: ${score + 10}`
      );
      navigate("/game");
    }
  };

  return (
    <div className="game3-container">
      {/* Điểm của người chơi */}
      <div className="score">Điểm: {score}</div>

      {/* Câu hỏi */}
      <div className="question">
        <h3>{questions[currentQuestion].question}</h3>
        <img
          src={questions[currentQuestion].image}
          alt="Câu hỏi hình ảnh"
          className="question-image"
        />
      </div>

      {/* Thẻ cảm xúc */}
      <div className="playcards">
        {questions[currentQuestion].answers.map((answer, index) => (
          <button
            key={index}
            className="playcard"
            onClick={() => handleAnswer(answer)}
          >
            <span className="description">{answer}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

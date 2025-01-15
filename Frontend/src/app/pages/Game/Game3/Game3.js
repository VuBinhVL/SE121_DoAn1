import React, { useState } from "react";
import cau1 from "../../../assets/images/images_game3/cau1.jpg"; // Ảnh câu 1
import cau2 from "../../../assets/images/images_game3/cau2.jpg"; // Ảnh câu 2
import cau3 from "../../../assets/images/images_game3/cau3.jpg"; // Ảnh câu 3
import cau4 from "../../../assets/images/images_game3/cau4.jpg"; // Ảnh câu 4
import cau5 from "../../../assets/images/images_game3/cau5.jpg"; // Ảnh câu 5
import cau6 from "../../../assets/images/images_game3/cau6.jpg"; // Ảnh câu 6
import cau7 from "../../../assets/images/images_game3/cau7.jpg"; // Ảnh câu 7
import cau8 from "../../../assets/images/images_game3/cau8.jpg"; // Ảnh câu 8
import cau9 from "../../../assets/images/images_game3/cau9.jpg"; // Ảnh câu 9
import cau10 from "../../../assets/images/images_game3/cau10.jpg"; // Ảnh câu 10

import { showSuccessMessageBox } from "../../../components/MessageBox/SuccessMessageBox/showSuccessMessageBox";
import { showErrorMessageBox } from "../../../components/MessageBox/ErrorMessageBox/showErrorMessageBox";
import "./Game3.css";
import { useNavigate } from "react-router-dom";

// Câu hỏi
const questions = [
  {
    question: "Câu 1: Tại sao cậu bé lại tức giận?",
    image: cau1,
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
    correctAnswer: "Cô bé không muốn bị ướt.",
    advice: "Nhìn bầu trời xem, có điều gì đang xảy ra?",
    answers: [
      "Cô bé không muốn bị ướt.",
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
  {
    question: "Câu 4: Tại sao cô bé lại mang con mèo vào nhà?",
    image: cau4,
    correctAnswer: "Cô bé muốn giúp chú mèo tránh bị ướt hoặc cảm lạnh.",
    advice: "Nhìn thời tiết bên ngoài, có điều gì đang xảy ra với con mèo?",
    answers: [
      "Cô bé muốn giúp chú mèo tránh bị ướt hoặc cảm lạnh.",
      "Cô bé không thích để con mèo ở ngoài trời.",
      "Cô bé sợ con mèo sẽ đi lạc mất.",
      "Cô bé muốn mang mèo vào để chơi cùng.",
    ],
  },

  {
    question: "Câu 5: Điều gì khiến cậu bé buồn?",
    image: cau5,
    correctAnswer: "Có thể cậu bé đã trồng cây đó và rất yêu quý nó.",
    advice: "Nếu cây của con bị gãy, con sẽ cảm thấy thế nào?",
    answers: [
      "Có thể cậu bé đã trồng cây đó và rất yêu quý nó.",
      "Cậu bé thấy cây bị gãy và không biết tại sao.",
      "Cậu bé không thích có cây trong sân.",
      "Cậu bé buồn vì cây làm hỏng món đồ chơi của cậu.",
    ],
  },

  {
    question: "Câu 6: Tại sao các bạn nhỏ lại cười như vậy?",
    image: cau6,
    correctAnswer:
      "Có thể ai đó trong lớp làm điều gì hài hước hoặc một tình huống buồn cười vừa xảy ra.",
    advice:
      "Nhìn xem các bạn có đang nhìn ai hoặc điều gì không? Có điều gì buồn cười không?",
    answers: [
      "Có thể ai đó trong lớp làm điều gì hài hước hoặc một tình huống buồn cười vừa xảy ra.",
      "Các bạn cười vì nhìn thấy món đồ chơi mới.",
      "Các bạn cười khi thầy cô kể một câu chuyện nghiêm túc.",
      "Các bạn cười vì vừa ăn một món ăn ngon.",
    ],
  },

  {
    question: "Câu 7: Tại sao cô bé không vui khi nhìn đĩa rau?",
    image: cau7,
    correctAnswer:
      "Có thể cô bé không thích ăn rau hoặc chưa quen với món ăn này.",
    advice: "Nếu bạn không thích một món ăn, con sẽ làm gì?",
    answers: [
      "Có thể cô bé không thích ăn rau hoặc chưa quen với món ăn này.",
      "Cô bé không hiểu món ăn này được làm từ gì.",
      "Cô bé thấy món ăn quá nguội để ăn.",
      "Cô bé sợ rau sẽ làm hỏng sức khỏe của mình.",
    ],
  },

  {
    question: "Câu 8: Điều gì vừa xảy ra với cậu bé?",
    image: cau8,
    correctAnswer:
      "Có thể cậu bé bị ngã xe đạp khi đang tập đi hoặc không chú ý.",
    advice: "Bạn đã từng ngã xe đạp chưa? Khi đó bạn cảm thấy thế nào?",
    answers: [
      "Có thể cậu bé bị ngã xe đạp khi đang tập đi hoặc không chú ý.",
      "Cậu bé bị bạn bè trêu chọc khi đi xe đạp.",
      "Cậu bé đã phá hỏng chiếc xe đạp của mình.",
      "Cậu bé vừa làm rơi một món đồ quan trọng khi đang đạp xe.",
    ],
  },

  {
    question: "Câu 9: Tại sao cô bé lại hạnh phúc?",
    image: cau9,
    correctAnswer: "Cô bé đang được tổ chức sinh nhật và cảm thấy rất vui.",
    advice:
      "Nhìn xem trên bàn có gì đặc biệt? Đây có phải là một ngày đặc biệt không?",
    answers: [
      "Cô bé đang được tổ chức sinh nhật và cảm thấy rất vui.",
      "Cô bé vừa được tặng một món quà đặc biệt.",
      "Cô bé vừa hoàn thành bài kiểm tra rất tốt.",
      "Cô bé đang chơi một trò chơi yêu thích với bạn bè.",
    ],
  },

  {
    question: "Câu 10: Tại sao cậu bé lại che mặt?",
    image: cau10,
    correctAnswer: "Có thể cậu bé sợ tiếng sủa của chó.",
    advice:
      "Con có nghĩ cậu bé cảm thấy không thoải mái với tiếng sủa của chú chó không!",
    answers: [
      "Có thể cậu bé sợ tiếng sủa của chó.",
      "Cậu bé không thích ánh sáng quá mạnh.",
      "Cậu bé đang chơi trò ú òa với bạn bè.",
      "Cậu bé không muốn nhìn thấy một điều gì đó đáng sợ.",
    ],
  },
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

    setTimeout(() => nextQuestion(), 1000);
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

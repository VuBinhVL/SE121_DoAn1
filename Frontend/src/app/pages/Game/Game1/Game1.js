import React, { useEffect, useState } from "react";
import happy from "../../../assets/icons/emojiforgame1/happiness.png"; // emotion hạnh phuc
import sad from "../../../assets/icons/emojiforgame1/sad.png"; // emotion buồn
import angry from "../../../assets/icons/emojiforgame1/angry.png"; // emotion nổi giận
import surprised from "../../../assets/icons/emojiforgame1/surprised.png"; // emotion ngạc nhiên
import confusion from "../../../assets/icons/emojiforgame1/confusion.png"; // emotion hoài nghi
import love from "../../../assets/icons/emojiforgame1/love.png"; // emotion thích
import scared from "../../../assets/icons/emojiforgame1/scared.png"; // emotion sợ
import tired from "../../../assets/icons/emojiforgame1/tired.png"; // emotion chán
import cau2 from "../../../assets/icons/askgame1/cau2.png"; //Ảnh câu 2
import cau3 from "../../../assets/icons/askgame1/cau3.png"; //Ảnh câu 3
import cau4 from "../../../assets/icons/askgame1/cau4.png"; //Ảnh câu 4
import cau5 from "../../../assets/icons/askgame1/cau5.png"; //Ảnh câu 5
import cau6 from "../../../assets/icons/askgame1/cau6.png"; //Ảnh câu 6
import cau7 from "../../../assets/icons/askgame1/cau7.png"; //Ảnh câu 7
import cau8 from "../../../assets/icons/askgame1/cau8.png"; //Ảnh câu 8
import cau9 from "../../../assets/icons/askgame1/cau9.png"; //Ảnh câu 9
import cau10 from "../../../assets/icons/askgame1/cau10.png"; //Ảnh câu 10
import { showSuccessMessageBox } from "../../../components/MessageBox/SuccessMessageBox/showSuccessMessageBox";
import { showErrorMessageBox } from "../../../components/MessageBox/ErrorMessageBox/showErrorMessageBox";
import "./Game1.css";
import { useNavigate } from "react-router-dom";

//Câu hỏi ở đây
const questions = [
  {
    question: "Câu 1: Khi bạn được tặng quà, bạn sẽ cảm thấy như thế nào?",
    image: "https://tazagift.com/wp-content/uploads/2023/02/qua-tang-4.jpeg",
    correctAnswer: happy,
    advice: "Hãy trân trọng món quà từ người khác và bày tỏ lòng biết ơn nhé!",
  },
  {
    question:
      "Câu 2: Khi bạn làm mất đồ chơi yêu thích, bạn sẽ cảm thấy ra sao?",
    image: cau2,
    correctAnswer: sad,
    advice:
      "Cảm xúc buồn là bình thường, hãy chia sẻ với cha mẹ để tìm lại đồ chơi!",
  },
  {
    question: "Câu 3: Khi bạn bị bạn bè trêu chọc, bạn sẽ cảm thấy thế nào?",
    image: cau3,
    correctAnswer: sad,
    advice:
      "Hãy bình tĩnh và chia sẻ cảm xúc với người lớn để tìm cách giải quyết nhé!",
  },
  {
    question:
      "Câu 4: Khi bạn nhận được một bất ngờ thú vị, bạn sẽ cảm thấy ra sao?",
    image: cau4,
    correctAnswer: surprised,
    advice: "Hãy thể hiện niềm vui và sự ngạc nhiên một cách tích cực nhé!",
  },
  {
    question: "Câu 5: Khi bạn không hiểu bài học, bạn sẽ cảm thấy thế nào?",
    image: cau5,
    correctAnswer: tired,
    advice: "Hãy mạnh dạn hỏi thầy cô hoặc bạn bè để được giải đáp nhé!",
  },
  {
    question: "Câu 6: Khi bạn được khen ngợi, bạn sẽ cảm thấy như thế nào?",
    image: cau6,
    correctAnswer: happy,
    advice: "Hãy mỉm cười và cảm ơn những lời khen ngợi từ người khác nhé!",
  },
  {
    question: "Câu 7: Khi bạn xem phim kinh dị, bạn sẽ cảm thấy thế nào?",
    image: cau7,
    correctAnswer: scared,
    advice: "Hãy nhớ rằng đó chỉ là phim và không có gì phải sợ đâu nhé!",
  },
  {
    question: "Câu 8: Khi bạn đạt được thành tích tốt, bạn sẽ cảm thấy ra sao?",
    image: cau8,
    correctAnswer: happy,
    advice: "Hãy tự hào về bản thân và tiếp tục cố gắng nhé!",
  },
  {
    question: "Câu 9: Khi bạn phải chờ đợi lâu, bạn sẽ cảm thấy thế nào?",
    image: cau9,
    correctAnswer: tired,
    advice: "Hãy hít thở sâu và giữ bình tĩnh để mọi chuyện dễ dàng hơn nhé!",
  },
  {
    question:
      "Câu 10: Khi bạn nhìn thấy điều gì đó thú vị, bạn sẽ cảm thấy ra sao?",
    image: cau10,
    correctAnswer: love,
    advice: "Hãy chia sẻ sự thú vị đó với bạn bè hoặc gia đình nhé!",
  },
];

//Các cảm xúc thì ở đây
const defaultEmotions = [
  { image: sad, description: "Buồn" },
  { image: angry, description: "Tức giận" },
  { image: happy, description: "Vui vẻ" },
  { image: surprised, description: "Ngạc nhiên" },
  { image: confusion, description: "Hoài nghi" },
  { image: love, description: "Thích" },
  { image: scared, description: "Sợ" },
  { image: tired, description: "Chán nản" },
];

export default function Game1() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [shuffledEmotions, setShuffledEmotions] = useState([]);
  const navigate = useNavigate();

  // Hàm trộn mảng (Fisher-Yates Shuffle)
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Cập nhật emotions cho câu hỏi hiện tại
  useEffect(() => {
    const correctAnswer = questions[currentQuestion].correctAnswer;

    // Tìm cảm xúc đúng và loại bỏ nó khỏi danh sách khác
    const correctEmotion = defaultEmotions.find(
      (emotion) => emotion.image === correctAnswer
    );

    if (!correctEmotion) {
      console.error("Đáp án đúng không tồn tại trong danh sách cảm xúc!");
      return;
    }

    const otherEmotions = defaultEmotions.filter(
      (emotion) => emotion.image !== correctAnswer
    );

    // Thêm đáp án đúng vào danh sách, sau đó trộn
    const selectedEmotions = [
      correctEmotion,
      ...shuffleArray(otherEmotions).slice(0, 3),
    ];
    setShuffledEmotions(shuffleArray(selectedEmotions));
  }, [currentQuestion]);

  // Xử lý khi trả lời câu hỏi
  const handleAnswer = (choice) => {
    const correct = questions[currentQuestion].correctAnswer;

    if (choice === correct) {
      setScore(score + 10);
      showSuccessMessageBox("Bạn đã trả lời đúng! +10 điểm");
    } else {
      // Lấy mô tả cảm xúc từ defaultEmotions
      const correctDescription = defaultEmotions.find(
        (emotion) => emotion.image === correct
      )?.description;
      showErrorMessageBox(
        `Sai rồi! Đáp án đúng là ${correctDescription}. ${questions[currentQuestion].advice}`
      );
    }

    setTimeout(() => nextQuestion(), 1000);
  };

  // Chuyển sang câu hỏi tiếp theo
  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(0);
      setScore(0);
      showSuccessMessageBox(
        `Trò chơi kết thúc! Tổng điểm của bạn: ${score + 10}`
      );
      navigate("/game");
    }
  };

  return (
    <div className="game-container">
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
        {shuffledEmotions.map((emotion, index) => (
          <button
            key={index}
            className="playcard"
            onClick={() => handleAnswer(emotion.image)}
          >
            <img
              src={emotion.image}
              alt={emotion.description}
              className="emotion-image"
            />
            <span className="description">{emotion.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

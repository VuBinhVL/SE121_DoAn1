import React, { useEffect, useState } from "react";
import "./Quizz.css";
import { useLocation, useNavigate } from "react-router-dom";
import { showErrorMessageBox } from "../../../components/MessageBox/ErrorMessageBox/showErrorMessageBox";
import { showSuccessMessageBox } from "../../../components/MessageBox/SuccessMessageBox/showSuccessMessageBox";
import { fetchGet, fetchPost } from "../../../lib/httpHandler";

const Quizz = () => {
  const [questionsData, setQuestionsData] = useState([]); // Lưu câu hỏi
  const [answers, setAnswers] = useState([]); // Lưu đáp án
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const [nguoiDungId, setnguoiDungId] = useState("");
  // Truyền thông tin qua
  const location = useLocation();
  const { id } = location.state || {}; // Lấy ID người kiểm tra từ state
  const questionsPerPage = 5;

  // Gọi API lấy câu hỏi
  useEffect(() => {
    const uri = "/api/baiquizz/cau-hoi-bai-quizz";
    fetchGet(
      uri,
      (res) => {
        setQuestionsData(res.questions); // Lưu danh sách câu hỏi từ API
        setAnswers(Array(res.questions.length).fill(null)); // Khởi tạo mảng đáp án
      },
      (fail) => showErrorMessageBox(fail.message),
      () => showErrorMessageBox("Mất kết nối đến máy chủ")
    );

    const uri2 = "/api/info";
    fetchGet(
      uri2,
      (res) => {
        console.log(res);
        setnguoiDungId(res.nguoiDungId);
      },
      (fail) => console.log(fail.message),
      () => console.log("Mất kết nối")
    );
  }, [id]);

  // Xử lý chọn đáp án
  const handleAnswer = (index, answerId) => {
    const newAnswers = [...answers];
    newAnswers[index] = answerId; // Lưu ID đáp án
    setAnswers(newAnswers);
  };

  // Nộp bài quiz
  const handleSubmit = () => {
    // Kiểm tra tất cả câu hỏi đã được trả lời
    const unansweredQuestions = answers.findIndex((answer) => answer === null);
    if (unansweredQuestions !== -1) {
      showErrorMessageBox(`Bạn cần trả lời tất cả câu hỏi!`);
      return;
    }

    const uri = "/api/baiquizz/save";
    const ngayLamQuizz = new Date().toISOString(); // Lấy ngày hiện tại

    // Chuẩn bị dữ liệu gửi API
    const chiTietBaiQuizzs = questionsData.map((question, index) => ({
      cauHoiBaiQuizzId: question.questionId,
      dapAnBaiQuizzIds: answers[index] ? [answers[index]] : [], // Nếu có đáp án, thêm vào mảng
    }));

    const data = {
      nguoiDungId: nguoiDungId,
      ngayLamQuizz,
      nguoiKiemTraId: id || 0, // ID người kiểm tra từ location.state
      chiTietBaiQuizzs,
    };

    //console.log(data);
    // Gọi API
    fetchPost(
      uri,
      data,
      (res) => {
        showSuccessMessageBox(res.message); // Hiển thị thông báo thành công
        navigate("/quiz-history"); // Chuyển hướng về trang lịch sử quiz
      },
      (fail) => showErrorMessageBox(fail.message), // Hiển thị thông báo lỗi
      () => showErrorMessageBox("Mất kết nối đến máy chủ") // Lỗi mạng
    );
  };

  // Tiến đến trang sau
  const handleNext = () => {
    setCurrentPage((prev) =>
      Math.min(prev + 1, Math.ceil(questionsData.length / questionsPerPage) - 1)
    );
  };

  // Quay lại trang trước
  const handleBack = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  // Phân trang
  const indexOfLastQuestion = (currentPage + 1) * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questionsData.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  return (
    <div className="quiz-container">
      <h1>Bài kiểm tra Quizz</h1>
      {currentQuestions.map((question, index) => {
        const questionIndex = indexOfFirstQuestion + index;
        return (
          <div key={question.questionId} className="question-item">
            <p>{question.questionText}</p>
            <div className="radio-group">
              {question.answers.map((answer) => (
                <label key={answer.answerId}>
                  <input
                    type="radio"
                    name={`question-${questionIndex}`}
                    value={answer.answerId}
                    onChange={() =>
                      handleAnswer(questionIndex, answer.answerId)
                    }
                    checked={answers[questionIndex] === answer.answerId}
                  />
                  {answer.answerText}
                </label>
              ))}
            </div>
          </div>
        );
      })}
      <div className="navigation">
        <button onClick={handleBack} disabled={currentPage === 0}>
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={indexOfLastQuestion >= questionsData.length}
        >
          Next
        </button>
      </div>
      {currentPage ===
        Math.ceil(questionsData.length / questionsPerPage) - 1 && (
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      )}
    </div>
  );
};

export default Quizz;

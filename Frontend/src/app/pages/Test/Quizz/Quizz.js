import React, { useEffect, useState } from "react";
import "./Quizz.css";
import { showErrorMessageBox } from "../../../components/MessageBox/ErrorMessageBox/showErrorMessageBox";
import { showSuccessMessageBox } from "../../../components/MessageBox/SuccessMessageBox/showSuccessMessageBox";
import { fetchGet } from "../../../lib/httpHandler";

const Quizz = () => {
  const [questionsData, setQuestionsData] = useState([]); //Lưu câu hỏi
  const [answers, setAnswers] = useState([]); //Lưu câu trả lời
  const [currentPage, setCurrentPage] = useState(0);
  const questionsPerPage = 5;

  //Gọi API tạo câu hỏi
  useEffect(() => {
    const uri = "/api/baiquizz/cau-hoi-bai-quizz";
    fetchGet(
      uri,
      (res) => {
        console.log(res);
        setQuestionsData(res.questions); // Lưu danh sách câu hỏi từ API
        setAnswers(Array(res.questions.length).fill(null)); // Khởi tạo câu trả lời
      },
      (fail) => showErrorMessageBox(fail.message),
      () => showErrorMessageBox("Mất kết nối đến máy chủ")
    );
  }, []);

  const handleAnswer = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  //Nộp bài quizz
  const handleSubmit = () => {
    console.log(answers);
    alert("Quiz submitted! Check the console for answers.");
  };

  // Tiến đến trang sau
  const handleNext = () => {
    setCurrentPage((prev) =>
      Math.min(prev + 1, Math.ceil(questionsData.length / questionsPerPage) - 1)
    );
  };

  //Quay lại trang trước
  const handleBack = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

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
                    value={answer.answerText}
                    onChange={() =>
                      handleAnswer(questionIndex, answer.answerText)
                    }
                    checked={answers[questionIndex] === answer.answerText}
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

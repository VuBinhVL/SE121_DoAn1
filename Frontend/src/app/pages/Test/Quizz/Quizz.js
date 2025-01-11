import React, { useState } from 'react';
import './Quizz.css';

const questions = [
    "Question 1?", "Question 2?", "Question 3?", "Question 4?", "Question 5?",
    "Question 6?", "Question 7?", "Question 8?", "Question 9?", "Question 10?",
    "Question 11?", "Question 12?", "Question 13?", "Question 14?", "Question 15?",
    "Question 16?", "Question 17?", "Question 18?", "Question 19?", "Question 20?"
];

const Quizz = () => {
    const [answers, setAnswers] = useState(Array(20).fill(null));
    const [currentPage, setCurrentPage] = useState(0);
    const questionsPerPage = 5;

    const handleAnswer = (index, answer) => {
        const newAnswers = [...answers];
        newAnswers[index] = answer;
        setAnswers(newAnswers);
    };

    const handleSubmit = () => {
        console.log(answers);
        alert('Quiz submitted! Check the console for answers.');
    };

    const handleNext = () => {
        setCurrentPage(prev => Math.min(prev + 1, Math.ceil(questions.length / questionsPerPage) - 1));
    };

    const handleBack = () => {
        setCurrentPage(prev => Math.max(prev - 1, 0));
    };

    const indexOfLastQuestion = (currentPage + 1) * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
    const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

    return (
        <div className="quiz-container">
            <h1>Quiz</h1>
            {currentQuestions.map((question, index) => {
                const questionIndex = indexOfFirstQuestion + index;
                return (
                    <div key={questionIndex} className="question-item">
                        <p>{question}</p>
                        <div className="radio-group">
                            <label>
                                <input 
                                    type="radio" 
                                    name={`question-${questionIndex}`} 
                                    value="Yes" 
                                    onChange={() => handleAnswer(questionIndex, 'Yes')}
                                    checked={answers[questionIndex] === 'Yes'}
                                />
                                Yes
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    name={`question-${questionIndex}`} 
                                    value="No" 
                                    onChange={() => handleAnswer(questionIndex, 'No')}
                                    checked={answers[questionIndex] === 'No'}
                                />
                                No
                            </label>
                        </div>
                    </div>
                );
            })}
            <div className="navigation">
                <button onClick={handleBack} disabled={currentPage === 0}>Back</button>
                <button onClick={handleNext} disabled={indexOfLastQuestion >= questions.length}>Next</button>
            </div>
            {currentPage === Math.ceil(questions.length / questionsPerPage) - 1 && 
                <button className="submit-button" onClick={handleSubmit}>Submit</button>
            }
        </div>
    );
};

export default Quizz;
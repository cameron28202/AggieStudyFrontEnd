import React from "react";
import { NavLink, useParams } from "react-router-dom";
import './QuestionBar.css';
import { getUserProgress } from "../Utils/LocalStorageService";

const QuestionBar = ({ currentQuestion, questions, examId }) => {
    const { classId } = useParams();
    
    const getQuestionStatus = (questionId) => {
        const progress = getUserProgress(questionId);
        if (!progress) return 'unattempted';
        return progress.correct ? 'correct' : 'incorrect';
    };

    return (
        <div className="question-bar">
            {questions.map((question, index) => {
                const status = getQuestionStatus(question.id);
                return (
                    <NavLink
                        key={question.id}
                        to={`/courses/${classId}/exams/${examId}/questions/${question.id}`}
                        className={`question-link 
                            ${question.id === currentQuestion ? "question-link-active" : ""}
                            ${status === 'correct' ? "question-correct" : ""}
                            ${status === 'incorrect' ? "question-incorrect" : ""}`}
                    >
                        Q{index + 1}
                    </NavLink>
                );
            })}
        </div>
    );
};

export default QuestionBar;
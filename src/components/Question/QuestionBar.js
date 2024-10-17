import React from "react";
import { NavLink, useParams } from "react-router-dom";
import './QuestionBar.css';
import { getUserProgress } from "../Utils/LocalStorageService";

const QuestionBar = ({questions, examId }) => {
    const { classId } = useParams();
    
    const getQuestionStatus = (question, questionId) => {
        const progress = getUserProgress(questionId);
        if (!progress) return 'unattempted';
        if (question.openEnded) return 'correct'
        return progress.correct ? 'correct' : 'incorrect';
    };

    return (
        <div className="question-bar">
            {questions.map((question, index) => {
                const status = getQuestionStatus(question, question.id);
                return (
                    <NavLink
                        key={question.id}
                        to={`/courses/${classId}/exams/${examId}/questions/${question.id}`}
                        className={({ isActive }) => 
                            `question-link 
                            ${isActive ? "question-link-active" : ""}
                            ${status}`
                        }
                    >
                        Q{index + 1}
                    </NavLink>
                );
            })}
        </div>
    );
};

export default QuestionBar;
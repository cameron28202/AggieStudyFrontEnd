import React from "react";
import { NavLink, useParams } from "react-router-dom";
import './TimedQuestionBar.css';
import CountdownTimer from '../Utils/Timer';
import { getUserProgress } from "../Utils/LocalStorageService";

const TimedQuestionBar = ({questions, examId, duration}) => {
    const { classId } = useParams();
    const getQuestionStatus = (question, questionId) => {
        const progress = getUserProgress(questionId);
        if (!progress) return 'unattempted';
        if (question.openEnded) return 'correct'
        return progress.correct ? 'correct' : 'incorrect';
    };
    
    return (
        <div class="container">
            <div class="exam-container">
                <CountdownTimer className="timer"
                    duration={duration}
                    onTimeEnd={console.log("hello im done")}
                />
            </div>
            <div className="question-bar">
                {questions.map((question, index) => {
                    const status = getQuestionStatus(question, question.id);
                    return (
                        <NavLink
                            key={question.id}
                            to={`/courses/${classId}/exams/${examId}/questions/${question.id}/timed/${duration}`}
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
        </div>
    );
};

export default TimedQuestionBar;
import React from 'react';
import './Exam.css';
import './TimedExam.css';
import useQuestions from "../hooks/useQuestions";
import { useParams } from "react-router-dom";
import QuestionBar from "../components/Question/QuestionBar";
import GoBackButton from "../components/Utils/GoBackButton";
import CountdownTimer from '../components/Utils/Timer';
const TimedExam = () => {

    const { classId, examId, duration } = useParams();
    const { questions, loading, error } = useQuestions(examId);

    const onTimeEnd = () => {
        console.log("hello im done");
    }

    if (loading) {
        return <div className="loading">
            <div className="loading-spinner"></div>
            <p>Loading questions...</p>
        </div>;
    }

    if (error) {
        return <div className="error">
            <p>Error: {error}</p>
            <button onClick={() => window.location.reload()} className="retry-button">
                Retry
            </button>
        </div>;
    }

    if (!questions || !questions.length) {
        return <div className="no-questions">
            <p>No questions found for this exam.</p>
            <GoBackButton/>
        </div>;
    }
    return (
        <div>
            <section className="exam-container">
                <h1 className="exam-title">Exam Review</h1>
                <p className="exam-description">
                    Select a question below to begin your review. Good luck!
                </p>
                {/*<div class="exam-container">
                    <CountdownTimer className="timer"
                        duration={duration}
                        onTimeEnd={onTimeEnd}
                    />
                </div>*/}
                <QuestionBar
                    questions={questions}
                    examId={examId}
                    duration={duration}
                    onTimeEnd={onTimeEnd}
                />
                <GoBackButton/>
            </section>
        </div>

    );
};

export default TimedExam;
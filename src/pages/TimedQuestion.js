import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useQuestion from "../hooks/useQuestion";
import useQuestions from "../hooks/useQuestions";
import TimedQuestionBar from "../components/Question/TimedQuestionBar";
import GoBackButton from "../components/Utils/GoBackButton";
import parseAndRenderMath from "../components/Utils/MathParser";
import './Question.css';
import MCQAnswers from "../components/Question/MCQAnswers";
import OpenEndedAnswer from "../components/Question/OpenEndedAnswer";

const TimedQuestion = () => {
    const { courseId, examId, questionId, duration } = useParams();
    const { question, loading, error } = useQuestion(questionId);
    const { questions } = useQuestions(examId);


    const [openAnswer, setOpenAnswer] = useState("");
    const [selectedAnswer, setSelectedAnswer] = useState(null);




    if(loading){
        return <div className="question-loading">Loading question...</div>;
    }

    if(error){
        return <div className="question-error">{error}</div>;
    }

    if(!question){
        return <div className="question-not-found">Question not found. You probably have the wrong question ID!</div>;
    }

    return (
        <div>
            <section className="question-container">
                <h1 className="question-title">Question</h1>
                <div className="question-text">
                    {parseAndRenderMath(question.question)}
                </div>

                {question.openEnded ? (
                    <OpenEndedAnswer 
                        openAnswer={openAnswer} 
                        setOpenAnswer={setOpenAnswer} 
                    />

                ): (
                    <MCQAnswers
                        answers={question.answers} 
                        selectedAnswer={selectedAnswer} 
                        setSelectedAnswer={setSelectedAnswer} 
                    />
                )}

                {question.questionImage&& (
                    <questionImage
                        imageUrl = {question.imageUrl}
                    />
                )}          


                <TimedQuestionBar 
                    currentQuestion={questionId} 
                    questions={questions} 
                    examId={examId}
                    courseId={courseId}
                    duration={duration}
                />
                <GoBackButton/>
            </section>
        </div>
    );
};

export default TimedQuestion;
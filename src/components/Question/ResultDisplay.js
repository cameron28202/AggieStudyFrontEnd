import React from "react";
import parseAndRenderMath from "../Utils/MathParser";
import './ResultDisplay.css'

const ResultDisplay = ({ submitted, openEnded, isCorrect, setSubmitted, setSelectedAnswer, answers }) => {
    
    if(!submitted) return null;

    if(submitted && !openEnded){
        return (
            <div 
                onClick={() => {
                    setSubmitted(false);
                    setSelectedAnswer(null);
                }} 
                className={`result ${isCorrect ? 'correct' : 'incorrect'}`}>
                {isCorrect ? 'Correct! Try again!' : 'Incorrect. Try again!'}
            </div>
        );
    }
    return (
        <div>
            {answers.map(answer => (
                <div 
                    className="open-question-answer"> 
                
                    {parseAndRenderMath(answer.answerText)}
                </div>
            ))}
            <div
                onClick={() => {
                    setSubmitted(false);
                    setSelectedAnswer(null);
                }} 
                className='result'>
                    Try again!
            </div>
        </div>
    );
}

export default ResultDisplay;
import useCountdown from "../../hooks/useCountdown";
import QuestionBar from '../Question/QuestionBar';
import React, { useState } from 'react';
import "../Question/TimedQuestionBar.css";

const CountdownTimer = ({ duration, onTimeEnd }) => {
    const [initialDuration, setInitialDuration] = useState(duration*60); // Set duration in seconds
    const [isActive, setIsActive] = useState(true);
    
    const timeLeft = useCountdown(isActive ? initialDuration: duration*60, () => {
        setIsActive(true);
    });

    const callback = () => {
        alert("Time's up!");
        setIsActive(false); // Reset the timer state
    };

    const startTimer = () => {
        if(!isActive)
        {
            setInitialDuration(duration * 60);
            setIsActive(true);
        }
    };

    const resetTimer = () => {
        setIsActive(false);
        setInitialDuration(duration * 60);
        formatTime(initialDuration);
    };

    const formatTime = (ms) => {
        const seconds = Math.floor((ms / 1000) % 60);
        console.log(seconds);
        const minutes = Math.floor((ms/60000));
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };

    return (
        <div className="timer">
            <h1>Countdown Timer</h1>
            <p>Time Left: {formatTime(timeLeft)}</p>
        </div>
    );
};

export default CountdownTimer;
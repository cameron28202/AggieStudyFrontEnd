import useCountdown from "../../hooks/useCountdown";
import QuestionBar from '../Question/QuestionBar';
import QuestionTimer from '../Question/QuestionBarTimer';
import React, { useState } from 'react';

const CountdownTimer = ({ duration, onTimeEnd }) => {
    const [initialDuration, setInitialDuration] = useState(duration*60); // Set duration in seconds
    const [isActive, setIsActive] = useState(true);

    const timeLeft = useCountdown(isActive ? initialDuration: duration*60, () => {
        //setInitialDuration(duration*60);
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
        const minutes = Math.floor((ms / (1000 * 60)) % 60);
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };

    return (
        <div>
            <h1>Countdown Timer</h1>
            <p>Time Left: {formatTime(timeLeft)}</p>
            {/*<QuestionTimer timeLeft={timeLeft}/>*/}
            {/* <button onClick={startTimer} disabled={isActive}>
                Start Timer
            </button>
            <button onClick={resetTimer}>
                Reset Timer
            </button> */}
        </div>
    );
};

export default CountdownTimer;
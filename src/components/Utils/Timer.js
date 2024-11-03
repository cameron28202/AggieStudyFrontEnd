import useCountdown from "../../hooks/useCountdown";
import React, { useState } from 'react';

const CountdownTimer = ({ duration, onTimeEnd }) => {
    const [initialDuration, setDuration] = useState(duration); // Set duration in seconds
    const [isActive, setIsActive] = useState(false);

    const callback = () => {
        alert("Time's up!");
        setIsActive(false); // Reset the timer state
    };

    const timeLeft = useCountdown(isActive ? initialDuration : 0, callback);

    const startTimer = () => {
        setIsActive(true);
    };

    const resetTimer = () => {
        setIsActive(false);
        setDuration(10); // Reset to initial duration
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
            <button onClick={startTimer} disabled={isActive}>
                Start Timer
            </button>
            <button onClick={resetTimer}>
                Reset Timer
            </button>
        </div>
    );
};

export default CountdownTimer;
/*const Timer = ({ duration, onTimeEnd }) => {

    const time = useCountdown(duration, onTimeEnd);
    var timer = new Timer();
timer.start();

timer.addEventListener('secondsUpdated', function (e) {
    $('#basicUsage').html(timer.getTimeValues().toString());
});

    return(
        <div>
            Time left: {time}
        </div>
    );

}


export default Timer;*/
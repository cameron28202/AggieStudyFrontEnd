import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a context for the timer state
const TimerContext = createContext();

export const useTimer = () => useContext(TimerContext);

export const TimerProvider = ({ children }) => {
    const [timeLeft, setTimeLeft] = useState(0); // timeLeft in seconds
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval;

        if (isActive) {
            interval = setInterval(() => {
                setTimeLeft(prevTime => {
                    if (prevTime <= 0) {
                        clearInterval(interval);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval); // Cleanup on unmount
    }, [isActive]);

    const startTimer = (duration) => {
        setTimeLeft(duration * 60); // Convert minutes to seconds
        setIsActive(true);
    };

    const stopTimer = () => {
        setIsActive(false);
    };

    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(0);
    };

    return (
        <TimerContext.Provider value={{ timeLeft, startTimer, stopTimer, resetTimer, isActive }}>
            {children}
        </TimerContext.Provider>
    );
};

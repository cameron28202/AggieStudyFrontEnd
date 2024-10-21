import React from 'react';
import './TimedExamDropdown.css';

const TimedExamDropdown = ({ examDurations, onDurationSelect, onClose }) => {
    return (
        <div className="timed-dropdown-overlay">
            <div className="timed-dropdown-content">
                <h2>Select Exam Duration</h2>
                {examDurations.map((duration) => (
                    <button
                        key={duration}
                        className="duration-button"
                        onClick={() => onDurationSelect(duration)}
                    >
                        {duration} minutes
                    </button>
                ))}
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default TimedExamDropdown;
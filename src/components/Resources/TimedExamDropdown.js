import React from 'react';
import { NavLink } from 'react-router-dom';
import './TimedExamDropdown.css';

const TimedExamDropdown = ({ examDurations, examId, courseId, onClose }) => {
    return (
        <div className="timed-dropdown-overlay">
            <div className="timed-dropdown-content">
                <h2>Select Exam Duration</h2>
                {examDurations.map((duration) => (
                    <NavLink
                        key={duration}
                        to={`/courses/${courseId}/exams/${examId}/timed/${duration}`}
                        className="duration-button"
                        onClick={onClose}
                    >
                        {duration} minutes
                    </NavLink>
                ))}
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default TimedExamDropdown;
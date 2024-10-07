import React from "react";
import './RestartExamButton.css'

const RestartExamButton = ({handleRestartExam}) => {
    return (
        <button
            className="restart-exam-button"
            onClick={handleRestartExam}
            aria-label="Clear current exam data"
        >
            Restart Exam
        </button>
    );
};

export default RestartExamButton;
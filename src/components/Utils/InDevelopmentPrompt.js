import React from "react";
import './InDevelopmentPrompt.css'

const InDevelopmentPrompt = ({onClose}) => {
    return (
        <div className="in-development-overlay">
            <div className="in-development-content">
                <h1 className="in-development-header">Sorry!</h1>
                <h2>This feature is currently in development, and will be added soon.</h2>
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default InDevelopmentPrompt;
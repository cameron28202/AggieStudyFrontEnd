import React, {useState} from "react";
import { NavLink } from 'react-router-dom'
import './ExamList.css'
//import TimedExamDropdown from './TimedExamDropdown'
import InDevelopmentPrompt from "../Utils/InDevelopmentPrompt";

const ExamItem = ({ exam, onClick }) => {

    const [isHovered, setIsHovered] = useState(false);
    const [showTimeDropdown, setShowTimeDropdown] = useState(false);

    //const examDurations = [30, 60, 90, 120, 150];

    const handleTimedExamClick = (e) => {
        e.preventDefault();
        setShowTimeDropdown(!showTimeDropdown);
    }


    const handleCloseDropdown = () => {
        setShowTimeDropdown(false);
    };

    return (
        <>
            <li
                className={`exam-item`}
                onClick={onClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >

                {!isHovered && (
                    <div>
                        <div className="exam-item-header">
                            {exam.id}
                        </div>
                        <div className="exam-item-name">
                            {exam.description}
                        </div>
                    </div>
                )}

                {isHovered && (
                    <div className="exam-item-buttoms">
                        <NavLink
                            to={`/courses/${exam.courseId}/exams/${exam.id}`}
                            className="exam-button"
                        >
                            Non-Timed Exam
                        </NavLink>


                        <button 
                            onClick = {handleTimedExamClick}
                            className="timed-exam-button"

                        >
                            Timed Exam
                        </button>
                    </div>
                )}
            </li>
            
            {showTimeDropdown && (

                <InDevelopmentPrompt
                    onClose={handleCloseDropdown}
                />
                /*
                <TimedExamDropdown 
                    examDurations={examDurations}
                    examId={exam.id}
                    courseId={exam.courseId}
                    onClose={handleCloseDropdown}
                />
                */
            )}
        </>
    )
}

export default ExamItem;
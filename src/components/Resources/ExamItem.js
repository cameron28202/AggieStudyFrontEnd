import React, {useState} from "react";
import { NavLink } from 'react-router-dom'
import './ExamList.css'

const ExamItem = ({ exam, onClick }) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <li
            className={`exam-item`}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            {!isHovered && (
                <div>
                    <div className="exam-item-header">
                        {exam.name}
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
                        className={({ isActive }) =>
                            isActive ? "exam-button active": "exam-button"}
                    >
                        Non-Timed Exam
                    </NavLink>

                    <NavLink
                        to={`/ihaventmadethisyet`}
                        className={({ isActive }) => 
                            isActive ? "exam-button active" : "exam-button"
                        }
                    >
                        Timed Exam
                    </NavLink>
                </div>
            )}
        </li>
    )
}

export default ExamItem;
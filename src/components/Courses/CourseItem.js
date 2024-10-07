import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './CourseList.css';

const CourseItem = ({ course, isSelected, onClick }) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <li 
            className={`course-item`}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {!isHovered && (
                <div>
                    <div className="course-item-header">
                        {course.id}
                    </div>
                    <div className="course-item-name">
                        {course.description}
                    </div>
                </div>
            )}

            {isHovered && (
                <div className="course-item-buttoms">
                                        <NavLink 
                        to={`/courses/${course.id}/exams`} 
                        className={({ isActive }) => 
                            isActive ? "course-button active" : "course-button"
                        }
                    >
                        Exams
                    </NavLink>
                    <NavLink 
                        to={`/courses/${course.id}/links`} 
                        className={({ isActive }) => 
                            isActive ? "course-button active" : "course-button"
                        }
                    >
                        Resources
                    </NavLink>
                </div>
            )}
        </li>
    );
};

export default CourseItem;
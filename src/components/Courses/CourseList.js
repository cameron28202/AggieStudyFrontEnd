import React, { useMemo } from 'react';
import CourseItem from './CourseItem';
import './CourseList.css';

const CourseList = ({ courses }) => {

    const groupedCourses = useMemo(() => {
        return courses.reduce((groups, course) => {
            const subject = course.subject || 'Other';
            if (!groups[subject]) {
                groups[subject] = [];
            }
            groups[subject].push(course);
            return groups;
        }, {});
    }, [courses]);

    if (courses.length === 0) {
        return <div className="error">No courses to display.</div>;
    }

    return (
        <>
            {Object.entries(groupedCourses)
                .map(([subject, subjectCourses]) => (
                    <div key={subject} className="subject-group">
                        <h2 className="subject-title">{subject}</h2>
                        <ul className="courses-list">
                            {subjectCourses
                                .sort((a, b) => a.id.localeCompare(b.id))
                                .map(course => (
                                    <CourseItem
                                        key={course.id}
                                        course={course}
                                    />
                                ))}
                        </ul>
                    </div>
                ))}
        </>
    );
};

export default CourseList;
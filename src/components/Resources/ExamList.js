import React from "react";
import ExamItem from "./ExamItem"
import './ExamList.css'

const ExamList = ({exams}) => {
    if (!exams || exams.length === 0) {
        return <div className="error">No exams available for this course.</div>;
    }

    return (
        <div className="exams-list">
            {exams.map(exam => ( 
                <ExamItem
                    key={exam.id}
                    exam={exam}
                />
            ))}
        </div>
    );
}

export default ExamList;
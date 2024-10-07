import React from "react";
import useLinks from "../hooks/useExams";
import { useParams } from "react-router-dom";
import LinkList from "../components/Resources/ResourceList";
import GoBackButton from "../components/Utils/GoBackButton";
import './Resources.css'


const Links = () => {

    const { classId } = useParams();

    const { links, loading, error } = useLinks(classId);


    if(loading) return ( <div className="loading">Loading resources...</div>)
    
    if(error) return ( <div className="error">Error loading resources: {error}</div>)

    return (
        <div>
            <div className="resource-list">
                <h2 className="resource-list-title">Resources for class {classId}:</h2>
                <LinkList
                    links={links}
                />
                 <GoBackButton/>
            </div>
        </div>
    )
}

export default Links;
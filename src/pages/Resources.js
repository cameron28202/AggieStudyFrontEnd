import React from "react";
import useResources from "../hooks/useResources";
import { useParams } from "react-router-dom";
import ResourceList from "../components/Resources/ResourceList";
import GoBackButton from "../components/Utils/GoBackButton";
import './Resources.css'


const Resources = () => {

    const { classId } = useParams();

    const { resources, loading, error } = useResources(classId);


    if(loading) return ( <div className="loading">Loading resources...</div>)
    
    if(error) return ( <div className="error">Error loading resources: {error}</div>)

    return (
        <div className="resource-list">
            <h2 className="resource-list-title">Resources for class {classId}:</h2>
            <ResourceList
                resources={resources}
            />
                <GoBackButton/>
        </div>
    )
}

export default Resources;
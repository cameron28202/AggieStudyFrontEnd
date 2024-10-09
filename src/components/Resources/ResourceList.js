import React from "react";
import './ResourceList.css'

const ResourceList = ({resources}) => {

    if (!resources || resources.length === 0) {
        return <div className="error">No resources available for this course.</div>;
    }

    return (
        <div className="resources-list">
            {resources.map(resource => (
                <li key={resource.id} className="resource-list-item">
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        <h1>{resource.type}</h1>
                        <p>{resource.description}</p>
                    </a>
                </li>
            ))}
        </div>
    );
}

export default ResourceList;
import React from "react";
import './ResourceList.css'

const ResourceList = ({resources}) => {
    if (!resources || resources.length === 0) {
        return <div className="error">No resources available for this course.</div>;
    }

    const getAbsoluteUrl = (url) => {
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        } else {
            return `https://${url}`;
        }
    };

    return (
        <ul className="resources-list">
            {resources.map(resource => (
                <li key={resource.id} className="resource-list-item">
                    <a href={getAbsoluteUrl(resource.url)} target="_blank" rel="noopener noreferrer">
                        <h3>{resource.url}</h3>
                        <p>{resource.description}</p>
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default ResourceList;
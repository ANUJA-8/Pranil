import React from 'react';
import { useParams } from 'react-router-dom';

const showcaseDetails = {
    1: { title: 'Project One', description: 'Detailed information about Project One.' },
    2: { title: 'Project Two', description: 'Detailed information about Project Two.' },
    3: { title: 'Project Three', description: 'Detailed information about Project Three.' },
};

const ShowcaseDetail = () => {
    const { id } = useParams();
    const project = showcaseDetails[id];

    return (
        <div className="showcase-detail">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
        </div>
    );
};

export default ShowcaseDetail;

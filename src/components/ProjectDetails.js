import React from 'react';
import './ProjectDetails.css';

function ProjectDetails(props) {
    const imgs = props.images;
    console.log(props.link);
    const link = props.link;
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8 project-images">
                    {imgs.map((img)=>{
                        return <img src={img} alt="porfolio example"/>;
                    })}
                </div>
                <div className="col-md-4 project-details">
                    <div className="details-container">
                        <h2>{props.projectTitle}</h2>
                        <p>{props.details}</p>
                        <a href={props.link} target="_blank" rel="noopener noreferrer">
                            <button class="btn btn--solid btn--med">View The Full Site</button>
                        </a>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default ProjectDetails

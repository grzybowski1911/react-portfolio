import React from 'react';
import './ProjectDetails.css';


function ProjectDetails(props) {
    const imgs = props.images;
    console.log(imgs);
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
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default ProjectDetails
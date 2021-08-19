import React from 'react';
import './ProjectDetails.css';
import { HashLink as Link } from 'react-router-hash-link';

function ProjectDetails(props) {
    const imgs = props.images;
    console.log(props.link);
    const link = props.link;
    return (
        <>
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
        <div className="container-fluid pad-45">
            <div className="row">
                <div className="col-md-6">
                    <Link to='/#projects' className="nav-links">
                        <button class="btn btn--solid btn--med">Back To All Projects</button>
                    </Link>
                </div>
                <div className="col-md-6">
                    <Link to='/#projects' className="nav-links">
                        <button class="btn btn--outline--blk btn--med">Back To All Projects</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProjectDetails

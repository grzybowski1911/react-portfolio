import React from 'react';
import './ThreeQuartersL.css';


function ThreeQuarters(props) {
    return (
        <>
        <div className="container-fluid container-center" style={{background: props.color}}>
            <div className="row row-center custom-row">
                <div className="col-md-8 copy">
                    <h2>{props.title}</h2>
                    <h3>{props.jobTitle}</h3>
                    <h5>{props.dates}</h5>
                    <p>{props.desc}</p>
                </div>
                <div className="col-md-4 image-center">
                    <figure data-category={props.label}>
                        <img src={props.src} alt="look at this photograph"/>
                    </figure>
                </div>
            </div>
        </div>
        </>
    )
}

export default ThreeQuarters

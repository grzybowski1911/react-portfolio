import React from 'react';
import './ThreeQuarters.css';


function ThreeQuarters(props) {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h2>{props.title}</h2>
                    <h5>{props.dates}</h5>
                    <p>{props.desc}</p>
                </div>
                <div className="col-md-4">
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

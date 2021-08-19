import React from 'react';
import './Jobs.css';
import ThreeQuatersL from './ThreeQuartersL';
import ThreeQuatersR from './ThreeQuartersR';



function Jobs() {
    return (
        <>
        <div className="container-fluid intro" id="work-history">
            <div className="row pad-45">
                <div className="col-12">
                    <h2 className="jobs-title">My background is in Digital Marketing.</h2>
                </div>
            </div>
        </div>
        <div>
        <ThreeQuatersL 
            color="#fffff"
            title="Advantage Media partners" 
            jobTitle="Lead Web Developer"
            dates="6/20 - Present"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
            label="Advantage Media Partners Job Image"
            src="images/amp-logo.png"
        />
        </div>
        <div>
        <ThreeQuatersR 
            color="linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(242,242,242,1) 100%)"
            title="Databricks - Marketing Team" 
            jobTitle="Web Developer / Content Creator"
            dates="8/20 - Present"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
            label="Databricks job Image"
            src="images/databricks-logo.png"
        />   
        </div> 
        <ThreeQuatersL 
            color="#F2F2F2"
            title="Codemay" 
            jobTitle="Web Developer"
            dates="1/20 - 4/20"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
            label="Codemay job Image"
            src="images/codemay-logo.png"
        />
        <ThreeQuatersR 
            color="linear-gradient(180deg, rgba(242,242,242,1) 0%, rgba(242,242,242,1) 75%, rgba(255,255,255,1) 100%)"
            title="Gravitate" 
            jobTitle="Web Developer"
            dates="11/19 - 1/20"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
            label="Databricks job Image"
            src="images/gravitate-logo.png"
        />
        <ThreeQuatersL 
            color="#fff"
            title="Say Media" 
            jobTitle="Quality Assurance Analyst"
            dates="1/18 - 11/19"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
            label="Codemay job Image"
            src="images/say-logo.png"
        />    
        </>
    )
}

export default Jobs

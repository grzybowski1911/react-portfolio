import React from 'react';
import ProjectDetails from '../ProjectDetails';


function Asha() {
    return (
        <div>
            <h1 className="pad-45">Asha Integrative Wellness</h1>
            <ProjectDetails 
            images={['../images/asha-pdx-homepage.jpg']}
            projectTitle='WordPress Website for PDX Wellness Center'
            details="Asha PDX is an LGTBQ minded health and wellness center located in Portland Oregon. The project started because they needed to move away from their existing web team and wanted an updated website design. I built the site using WordPress, I leveraged Divi for rapid structure development and then further customized on top of that. The design was largely inspired by their existing website with upgrades implemented throughout the site. One of my favorite features of the website is the slide-out mobile menu that uses some simple jQuery to trigger."
            link="www.ashapdx.com"
            />
        </div>
    )
}

export default Asha

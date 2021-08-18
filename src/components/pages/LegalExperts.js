import React from 'react';
import ProjectDetails from '../ProjectDetails';


function LegalExperts() {
    return (
        <div>
            <h1 className="pad-45">Legal Experts Direct</h1>
            <ProjectDetails 
            images={['../images/legal-experts-direct-homepage.jpg']}
            projectTitle='WordPress Website with Custom Search Functionality'
            details="Legal Experts Direct is a project that I led the development of. Its primary goal is to connect lawyers to expert witnesses to strengthen their cases. The site was built on WordPress utilizing the starter theme Understrap. Custom posts and ACF make each individual expert easy to create for non-technical users, who are expected to add to and maintain the expert listings. It also includes custom searching functionality that is specific to the expert CPT only. The search functionality takes input from the user and compares it against custom taxonomies created in the CPT. It uses a combination of JS and PHP to smoothly handle each search. I was in charge of designing, developing all functionality, and quality checking the entirety of the project. In addition, I also set up a dedicated VPS for the site which included creating DB's, installing WordPress, setting permissions, all via SSH from the command line."
            link="https://legalexpertsdirect.com/"
            />
        </div>
    )
}

export default LegalExperts

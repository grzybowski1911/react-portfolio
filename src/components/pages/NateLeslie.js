import React from 'react';
import ProjectDetails from '../ProjectDetails';


function NateLeslie() {
    return (
        <div>
            <h1 className="pad-45">Nate Leslie</h1>
            <ProjectDetails 
            images={['../images/nate-leslie-homepage.jpg','../images/nate-leslie-booking.jpg']}
            projectTitle='Custom website for seattle tattoo artist with integrated instagram feed'
            details="Nate Leslie is a vastly experience tattoo artist based in Seattle WA. I came across his work at a Portland Tattoo convention and I was blown away by his work and said to myself I'm going to have him do a tattoo on me one a year later he was tattooing me and mentioned he was interested in having a website created for his work and gathering booking information from people. Well, that happened to work out perfectly because there I was! I built this site on WordPress using a combination of the Understrap starter theme that has BootStrap baked into the theme files, and also using ACF to create an easy-to-use backend experience. It also features an automatic Instagram feed that pulls in new photos of his work every time he posts to Instagram."
            link ="https://nateleslie.bgrzdesigns.com"
            />
        </div>
    )
}

export default NateLeslie

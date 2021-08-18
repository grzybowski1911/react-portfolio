import React from 'react';
import ProjectDetails from '../ProjectDetails';


function Amp() {
    return (
        <div>
            <h1 className="pad-45">Advantage Media Partners Menu</h1>
            <ProjectDetails 
            images={['../images/amp-nav-desktop.jpg','../images/amp-mobile-nav-closed.jpg','../images/amp-mobile-nav.jpg']}
            projectTitle='Custom Elevated Menu experience and Ad Preview Tool'
            details="While working with Advantage Media Partners I was tasked with providing development assistance with a new company website. Part of this included building a custom navigation with a slide-out menu mobile experience. It also includes some useful tools for the sales team at, one such tool being an AdWords demo, which allows a sales team member to demonstrate to a client in real-time what goes into an AdWords campaign. It allows some of the more, shall we say involved clients, to help create their campaigns. Once the demostration is complete all of the fields are sent to the AdWords specialists on our team."
            link="http://advantagemedia.globalmedia.io/"
            />
        </div>
    )
}

export default Amp

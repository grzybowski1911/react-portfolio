import React from 'react';
import ProjectDetails from '../ProjectDetails';


function Trident() {
    return (
        <div>
            <h1 className="pad-45">Trident Sport Fishing Website and Custom Booking Solution</h1>
            <ProjectDetails 
            images={['../images/trident-fishing-homepage.jpg','../images/trident-booking-archive.jpg','../images/trident-fishing-single.jpg']}
            projectTitle='Fishing charter website with custom booking solution'
            details="Trident Sportfishing started out as a project that I was providing creative direction and quality assurance on while working with Advantage Media Partners. Once the site had been launched the client came back and was curious about a way he could offer booking directly through the website. I came up with a solution leveraging WooCommerce and premium add-ons to accomplish this functionality. The requirements included users being able to book up to 2 half-day trips per day ( AM or PM ), but only one of each per day or a user would be able to book a full day trip which would render the half trips unbookable on those dates. Additionally, the client wanted the users to be able to select the number of participants going on each trip with a maximum of 6 per trip. Each trip requires a static deposit and then there is a remaining balance based on the number of participants that is saved via a cookie and then added to the WooCommerce email confirmation using hooks and filters."
            />
        </div>
    )
}

export default Trident

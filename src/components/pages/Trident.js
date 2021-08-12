import React from 'react';
import ProjectDetails from '../ProjectDetails';


function Trident() {
    return (
        <div>
            <h1 className="pad-45">Asha Integrative Wellness</h1>
            <ProjectDetails 
            images={['../images/trident-fishing-homepage.jpg','../images/trident-booking-archive.jpg','../images/trident-fishing-single.jpg']}
            projectTitle='Fishing charter website with custom booking solution'
            details="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. "
            />
        </div>
    )
}

export default Trident

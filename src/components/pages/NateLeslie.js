import React from 'react';
import ProjectDetails from '../ProjectDetails';

function NateLeslie() {
    return (
        <div>
            <h1 className="pad-45">Nate Leslie</h1>
            <ProjectDetails 
            images={['../images/nate-leslie-homepage.jpg','../images/nate-leslie-booking.jpg']}
            projectTitle='Custom website for seattle tattoo artist with integrated instagram feed'
            details="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. "
            />
        </div>
    )
}

export default NateLeslie

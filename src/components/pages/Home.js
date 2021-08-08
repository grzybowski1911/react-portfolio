import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Jobs from '../Jobs'

function Home() {
    return (
        <>
        <HeroSection />
        <div className="container-fluid intro">
            <div className="row pad-45">
                <div className="col-12">
                    <h2 className="intro-title">Welcome to my resume/portfolio website</h2>
                    <p>My name is Ben and I am a web developer. I have 5 years of experience working primarily as a Web Developer for digital marketing companies. I have extensive working knowledge of PHP, CSS/SASS, JS, and of course HTML. I am also familiar with front-end frameworks including React and Bootstrap. I also understand the core programming concepts shared by all programming languages. </p>
                    <p>I have extensive experience with WordPress and possess an intimate knowledge of its infrastructure. My experience includes creating and modifying custom themes and child themes, experience with a number of visual builders including Divi and Elementor, configuring commerce, booking, SEO, and many other types plugins, and even creating my own plugins when necessary.</p>
                    <p>I have extensive experience with Photoshop, Illustrator, InDesign, and Figma for creating/modifying/sourcing assets for use in Web and also for working off of as design references. I am familiar with the Agile and Scrum methodologies. I have used Trello and Jira for task management and have participated in numerous stand-up meetings both virtual and in person.</p>
                </div>
            </div>
        </div>
        <Jobs />
        <Cards />
        </>
    );
}

export default Home;

import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import {Button} from '../Button';

function Home() {
    return (
        <>
        <HeroSection />
        <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>Learn About Me</Button>
                    <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large' >View My Work <i className="far fa-grin-tongue-wink"></i></Button>
        <Cards />
        </>
    );
}

export default Home;

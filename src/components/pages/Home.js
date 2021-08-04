import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Jobs from '../Jobs'

function Home() {
    return (
        <>
        <HeroSection />
        <Jobs />
        <Cards />
        </>
    );
}

export default Home;

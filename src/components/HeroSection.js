import React from 'react';
import './HeroSection.css';
import '../App.css';
import {ReactComponent as BgLogo} from './2021-logo.svg';


function HeroSection() {
    return (
        <div className="hero-container">
            <div className="bg-img">
                <BgLogo />
            </div>
        </div>
    );
}

export default HeroSection;

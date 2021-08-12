import React from 'react';
import './HeroSection.css';
import '../App.css';
import {ReactComponent as BgLogo} from './2021-logo.svg';


function HeroSection() {

    //const fadeLogo = () => {
    //    var pos = window.scrollY;
    //    var hero = document.getElementById('hero').getBoundingClientRect().height;
    //    var logo = document.getElementById('banner-logo');
    //    if(pos <= hero) {
    //        var op = 1 - pos / hero; 
    //        } else {
    //            op = 1;
    //        }
    //        logo.style.opacity = op;
    //}

    //window.addEventListener('scroll', fadeLogo);

    return ( 
        <div className="hero-container" id="hero">
            <div className="bg-img">
                <BgLogo />
            </div>
        </div>
    );
}

export default HeroSection;

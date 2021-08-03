import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';
import {ReactComponent as NavLogo} from './2021-logo-white.svg';

const year = () => {
    return new Date().getFullYear();
}

function Footer() {
    return (
        <div className='footer-container'>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <NavLogo />
                    </div>
                    <div className="footer-nav">
                        <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large' >Get In Touch</Button>
                    </div>
                    <div className='social-icons'>
                        <Link
                        className='social-icon-link twitter'
                        to='https://twitter.com/BenGrzybowski'
                        target='_blank'
                        aria-label='Twitter'
                        >
                        <i className='fab fa-twitter' />
                        </Link>
                        <Link
                        className='social-icon-link twitter'
                        to='https://www.linkedin.com/in/ben-grzybowski-733144110/'
                        target='_blank'
                        aria-label='LinkedIn'
                        >
                        <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
            <small className='website-rights'>Ben Grzybowski © {year()} </small>
        </div>
    )
}

export default Footer

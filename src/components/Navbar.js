import React, {useState, useEffect} from 'react';
//import {Link} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import {Button} from './Button';
import './Navbar.css';
import {ReactComponent as NavLogo} from './2021-logo-white.svg';

function Navbar() {
    const[click,setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }
    
useEffect(() => {
    showButton();
}, []);

window.addEventListener('resize', showButton);

const updateNav = () => {
    if (window.scrollY > 80) {
        setNavbar(true);
    } else {
        setNavbar(false);
    }
}



window.addEventListener('scroll', updateNav);

    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <NavLogo />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/#work-history' className="nav-links" onClick={closeMobileMenu}>Work History</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/#projects' className="nav-links" onClick={closeMobileMenu}>Recent Projects</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/#more-info' className="nav-links" onClick={closeMobileMenu}>About Ben</Link>
                        </li>
                    </ul>
                    {button && <Button link="/contact" buttonStyle='btn--outline'>Get In Touch!</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;

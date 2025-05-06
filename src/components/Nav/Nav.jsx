import React, { useState } from 'react';
import '../Nav/Nav.css';
import SiteMenu from '../SiteMenu/SiteMenu';
import 'font-awesome/css/font-awesome.min.css';

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className='header-section'>
                <div className="header-wrapper">
                    <div className="nav-switch">
                        <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
                    </div>
                    <div className="social-menu-header">
                        <a href="https://www.facebook.com/patinyaporn.sudtho.2024">
                            <i className="fa-brands fa-square-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/23rd.prxng/">
                            <i className="fa-brands fa-square-instagram"></i>
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-line"></i>
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
            </header>
            
            <SiteMenu isOpen={isMenuOpen} closeMenu={closeMenu} />
        </>
    );
}

export default Nav;

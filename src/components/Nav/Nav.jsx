import React, { useState } from 'react'
import '../Nav/Nav.css'
import SiteMenu from '../SiteMenu/SiteMenu'

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className='header-section'>
                <div className="header-wrapper">
                    <div className="nav-switch" onClick={toggleMenu}>
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <div className="social-menu-header">
                        <a href="#">
                            <i class="fa-brands fa-square-facebook"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-square-instagram"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-line"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
            </header>
            {isMenuOpen && <SiteMenu closeMenu={closeMenu}/>}
            {/* <SiteMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} /> */}
        </>
    )
}

export default Nav
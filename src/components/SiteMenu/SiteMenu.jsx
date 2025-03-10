import React from 'react';
import { Link } from 'react-router-dom';
import '../SiteMenu/SiteMenu.css';

function SiteMenu({ isOpen, closeMenu }) {
    return (
        <>
            <div className={`site-menu-warp ${isOpen ? 'open' : ''}`}>
                <div className="site-menu-wrapper">
                    <button className="close-menu" onClick={closeMenu}>X</button>
                    {/* Main menu */}
                    <ul className="site-menu">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="social-menu">
                        <a href="#">
                            <i className="fa-brands fa-square-facebook"></i>
                        </a>
                        <a href="#">
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
            </div>
        </>
    );
}

export default SiteMenu;

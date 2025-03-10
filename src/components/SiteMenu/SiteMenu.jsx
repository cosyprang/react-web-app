import React from 'react'
import { Link } from 'react-router-dom'
import '../SiteMenu/SiteMenu.css'

function SiteMenu({ closeMenu }) {
    return (
        <>
                <div className="main-site-warp">
                    <div className="site-menu-warp">
                        <div className="site-menu-wrapper">
                            <button className="close-menu" onClick={closeMenu}>X</button>
                            {/* Main menu */}
                            <ul className="site-menu">
                                <li>
                                    <a><Link to="/">Home</Link></a>
                                </li>
                                <li>
                                    <a><Link to="/about">About</Link></a>
                                </li>
                                <li>
                                    <a><Link to="/portfolio">Portfolio</Link></a>
                                </li>
                                <li>
                                    <a><Link to="/contact">Contact</Link></a>
                                </li>
                            </ul>
                            <div className="social-menu">
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
                    </div>
                </div>
        </>
    )
}

export default SiteMenu
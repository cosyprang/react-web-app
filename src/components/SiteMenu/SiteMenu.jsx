import React from 'react'
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
                                <a href="#" className='active'>Home</a>
                            </li>
                            <li>
                                <a href="#" className='active'>About Me</a>
                            </li>
                            <li>
                                <a href="#" className='active'>Blog</a>
                            </li>
                            <li>
                                <a href="#" className='active'>Portfolio</a>
                            </li>
                            <li>
                                <a href="#" className='active'>Contact</a>
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
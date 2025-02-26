import React from 'react'
import '../SiteContent/SiteContent.css'

function SiteContent() {
    return (
        <>
            <header className='header-section'>
                <div className="header-wrapper">
                    <div className="nav-switch">
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
        </>
    )
}

export default SiteContent
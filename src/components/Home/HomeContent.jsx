import React from 'react'
import '../Home/HomeContent.css'
import SiteBar from '../Home/SiteBar/SiteBar'
import HeroContent from '../Home/HeroContent/HeroContent'
import Nav from '../Nav/Nav'

function HomeContent({ isMenuOpen }) {
    return (
        <>
            <Nav />
            <div className={`home-content ${isMenuOpen ? 'shifted' : ''}`}>
                <div className="home-content-wrapper">
                    <SiteBar />
                    <HeroContent />
                </div>
            </div>
        </>
    )
}

export default HomeContent
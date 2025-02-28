import React from 'react'
import SiteBar from './SiteBar/SiteBar'
import HeroContent from './HeroContent/HeroContent'
import '../HomeContent/HomeContent.css'

function HomeContent() {
    return (
        <div className='home-content'>
            <div className="home-content-wrapper">
                <SiteBar />
                <HeroContent />
            </div>
        </div>
    )
}

export default HomeContent
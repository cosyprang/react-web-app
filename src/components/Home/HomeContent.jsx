import React from 'react'
import '../Home/HomeContent.css'
import SiteBar from '../Home/SiteBar/SiteBar'
import HeroContent from '../Home/HeroContent/HeroContent'

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
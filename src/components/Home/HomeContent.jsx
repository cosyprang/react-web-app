import React from 'react'
import SiteBar from '../Home/SiteBar/SiteBar'
import HeroContent from '../Home/HeroContent/HeroContent'
import '../Home/HomeContent.css'

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
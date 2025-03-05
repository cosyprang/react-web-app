import React from 'react'
import '../Portfolio/PortfolioContent.css'
import Nav from '../Nav/Nav'
import SiteBar from '../Home/SiteBar/SiteBar'
import PortHero from './Port_img/PortHero'

function PortfolioContent() {
    return (
        <>
            <Nav />
            <div className="port-content">
                <div className="port-content-wrapper">
                    <SiteBar />
                    <PortHero />
                </div>
            </div>
        </>
    )
}

export default PortfolioContent
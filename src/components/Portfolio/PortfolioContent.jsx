import React from 'react'
import '../Portfolio/PortfolioContent.css'
import Nav from '../Nav/Nav'
import SiteBar from '../Home/SiteBar/SiteBar'
import PortHero from './Port_img/PortHero'

function PortfolioContent() {
    return (
        <>
            <div className="port-content">
                <Nav />
                <div className="port-content-wrapper">
                    {/* <Nav /> */}
                    <SiteBar />
                    <PortHero />
                </div>
            </div>
        </>
    )
}

export default PortfolioContent
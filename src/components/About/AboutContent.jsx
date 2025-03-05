import React from 'react'
import '../About/AboutContent.css'
import AboutHero from './AboutHero/AboutHero'
import SiteBar from '../Home/SiteBar/SiteBar'
import Nav from '../Nav/Nav'

function AboutContent() {
  return (
    <>
      <Nav />
      <div className="about-content">
        <div className="about-content-wrapper">
          <SiteBar />
          <AboutHero />
        </div>
      </div>
    </>
  )
}

export default AboutContent
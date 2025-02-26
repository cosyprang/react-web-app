import React from 'react'
import '../SiteBar/SiteBar.css'

function SiteBar() {
    return (
        <>
            <div className="sidebar-container">
                <div className="sidebar-title-col">
                    <div className="sidebar-title-wrapper">
                        <h1><a href="#">MAPRANG</a></h1>
                        <p>Computer Science Student</p>
                    </div>
                </div>
                <div className="sidebar-info-col">
                    <div className="sidebar-info-wrapper">
                        <h2>My name is <br />Patinyaporn Sudtho.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis libero deserunt ducimus voluptatibus error, tempore quod soluta repudiandae minima tenetur.</p>
                    </div>
                </div>
                <div className="sidebar-contact-col">
                    <div className="sidebar-contact-wrapper">
                        <p className="tel-contact">+66 92 421 8855</p>
                        <p className="mail-contact">cosyprang@gmail.com</p>
                        <a href="#" className="btn-contact">See my Portfolio</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SiteBar
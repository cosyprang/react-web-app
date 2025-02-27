import React from 'react'
import '../HomeContent/HomeContent.css'

function HomeContent() {
    return (
        <>
            <div className="site-content-wrapper">
                <section className="sidebar-section">
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
                </section>
                <section className="home-hero-section">
                    <div className="hs-container">
                        <div className="hs-content-wrapper">
                            <div className="hs-img-wrapper">
                                <div className="hs-img">
                                    <img src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img-home-1" />
                                </div>
                                <div className="hs-img">
                                    <img src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img-home-2" />
                                </div>
                                <div className="hs-img">
                                    <img src="https://images.unsplash.com/photo-1532153955177-f59af40d6472?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img-home-3" />
                                </div>
                            </div>
                            <div className="hs-info-wrapper">
                                <div className="hs-info">
                                    <h4>Transcript</h4>
                                    <p>Silpakorn Univeristy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default HomeContent
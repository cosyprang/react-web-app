import React from 'react'
import './HeroContent.css'

function HeroContent() {
    return (
        <>
            <section className="home-hero-section">
                <div className="hs-container">
                    <div className="hs-content-wrapper">
                        <div className="hs-col1-container">
                            <div className="hs-col1-wrapper">
                                <div className="hs-img-1">
                                    <img src="https://images.unsplash.com/photo-1531346644014-cde582069e71?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img-home-1" />
                                </div>
                                <div className="hs-info-1">
                                    <h4><a href="/portfolio">Transcript</a></h4>
                                    <p>Silpakorn Univeristy</p>
                                </div>
                            </div>
                        </div>
                        <div className="hs-col2-container">
                            <div className="hs-col2-wrapper">
                                <div className="hs-img-2">
                                    <img src="https://images.unsplash.com/photo-1596448056997-aba1db5a565a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img-home-2" />
                                </div>
                                <div className="hs-info-2">
                                    <h4><a href="/about">About Me</a></h4>
                                    <p>Silpakorn Univeristy</p>
                                </div>
                            </div>
                        </div>
                        <div className="hs-col3-container">
                            <div className="hs-col3-wrapper">
                                <div className="hs-img-3">
                                    <img src="https://images.unsplash.com/photo-1610216595084-8b75df5e994f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img-home-3" />
                                </div>
                                <div className="hs-info-3">
                                    <h4><a href="/contact">Contact</a></h4>
                                    <p>Silpakorn Univeristy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroContent
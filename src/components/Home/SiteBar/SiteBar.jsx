import React from 'react'
import '../SiteBar/SiteBar.css'

function SiteBar() {
    return (
        <>
            <section className="sidebar-container">
                <div className="sidebar-wrapper">
                    <div className="sidebar-title-col">
                        <div className="sidebar-title-wrapper">
                            <div className="title-header">
                                <h1><a href="#">MAPRANG</a></h1>
                                <p>Computer Science Student</p>
                            </div>
                            <div className="title-name">
                                <h2>My name is <br />Patinyaporn Sudtho.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-info-col">
                        <div className="sidebar-info-wrapper">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque laudantium nostrum facere quam voluptas, ipsam numquam reprehenderit ullam perspiciatis corporis aliquam, assumenda est. Quidem consequuntur animi quasi ea blanditiis tempore?</p>
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
        </>
    )
}

export default SiteBar
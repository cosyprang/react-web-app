import React from 'react'
import '../AboutHero/AboutHero.css'

function AboutHero() {
  return (
    <>
      <section className="about-hero-section">
        <div className="as-container">
          <div className="as-content-wrapper">
            <div className="as-col1-wrapper">
              <div className="as-img-1">
                <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="about-img1" />
              </div>
              <div className="as-info-1">
                <h1>My Profile</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ratione facilis illum vero nemo modi provident commodi impedit, incidunt repudiandae quibusdam ipsam architecto quas? Est aut corrupti quaerat laborum nihil.</p>
              </div>
            </div>
            <div className="as-col2-wrapper">
              <div className="as-img-2">
                <img src="https://images.unsplash.com/photo-1492052722242-2554d0e99e3a?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <div className="as-info-2">
                <h1>Hobby</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint unde architecto maxime cumque obcaecati culpa voluptatibus consequuntur distinctio rem similique.</p>
              </div>
            </div>
            <div className="as-col3-wrapper">
              <div className="as-img-3">
                <img src="https://images.unsplash.com/photo-1599488059863-ac95a7f49193?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <div className="as-info-3">
                <h1>Contact</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione facilis laboriosam magni fuga doloremque? Corrupti facilis mollitia et blanditiis itaque!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutHero
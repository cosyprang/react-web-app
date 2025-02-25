import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '../Navbar/Nav.css'

function Nav() {
  return (
    <header className='header fixed-top'>
      <div className="containter-fluid bg-secondary-subtle d-flex aligh-items-center justify-content-between">
        <h1>Bootstrap</h1>
      </div>
    </header>
  )
}

export default Nav
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
     <nav className="navbar navbar-expand-lg w-100 fixed-top">
  <div className="container">
    <Link className="navbar-brand text-white fw-bolder text-uppercase fs-2" to="">start Framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link me-3 text-uppercase fw-bold text-white rounded-3 " aria-current="page" to="about">about</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link me-3 text-uppercase fw-bold text-white rounded-3" to="portfolio">portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link me-3 text-uppercase fw-bold text-white rounded-3" to="contact">contact</NavLink>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>

    </>
  )
}

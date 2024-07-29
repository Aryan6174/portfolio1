import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
          <div className="logo">PROFILE</div>
          <input id="menu-toggle" type="checkbox" />
          <label class="menu-button-container" for="menu-toggle">
            <div class="menu-button"></div>
          </label>
        <ul className='menu'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
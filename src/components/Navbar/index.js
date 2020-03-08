import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <div>
      <header className="nav-header">
        <a href="/"><img className="logo-img" src="https://i.ibb.co/r5krrdz/logo.png" alt="logo" /></a>
        <nav>
          <ul className="nav-links">
            <li><a href="#"></a></li>
          </ul>
        </nav>
        <div>
          <a href="" className="home">Home</a>
          <a href="/signin" className="btn btn-rounded">Sign In</a>
        </div>
      </header>
    </div>
  )
}

import React from 'react'
import './navbar.css'

export default function Navbar(props) {
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
          <a href="/home" className="home">Home</a>
          {
            props && props.user.name
              ? <div className="dropdown">
                <p className="btn drop-btn">Hello {props.user.name}!</p>
                <div className="dropdown-content">
                  <a href="#">Profile</a>
                  <a href="#" onClick={props.signOutUser}>Sign out</a>
                </div>
              </div>
              : <a href="/signin" className="btn btn-rounded">Sign In</a>
          }
        </div>
      </header>
    </div>
  )
}

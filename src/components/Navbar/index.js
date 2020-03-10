import React from 'react'
import './navbar.css'

export default function Navbar(props) {
  return (
    <div>
      {console.log(props, "<--------------------------------from the navbar")}
      <header className="nav-header">
        <a href="/"><img className="logo-img" src="https://i.ibb.co/r5krrdz/logo.png" alt="logo" /></a>
        <nav>
          <ul className="nav-links">
            <li><a href="#"></a></li>
          </ul>
        </nav>
        <div>
          <a href="" className="home">Home</a>
          {
            props && props.user.name
              ? <div className="dropdown">
                <p className="btn drop-btn">Hello {props.user.name}!</p>
                <div class="dropdown-content">
                  <a href="#">Profile</a>
                  <a href="#">Sign out</a>
                </div>
              </div>
              : <a href="/signin" className="btn btn-rounded">Sign In</a>
          }
        </div>
      </header>
    </div>
  )
}

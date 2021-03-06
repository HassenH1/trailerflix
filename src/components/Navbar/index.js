import React from 'react'
import './navbar.css'
import { Link, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div>
      <header className="nav-header">
        <Link to={"/"} className="link-logo"><img className="logo-img" src="https://i.ibb.co/r5krrdz/logo.png" alt="logo" /></Link>
        {/* <nav>
          <ul className="nav-links">
            <li><a href="#"></a></li>
          </ul>
        </nav> */}
        <div>
          <Link to="/home" className="home">Home</Link>
          {
            props && props.user.name
              ? <div className="dropdown">
                <p className="btn drop-btn">Hello {props.user.name}!</p>
                <div className="dropdown-content">
                  <Link to="#">Profile</Link>
                  <Link to="#" onClick={props.signOutUser}>Sign out</Link>
                </div>
              </div>
              : <Link to="/signin" className="btn btn-rounded">Sign In</Link>
          }
        </div>
      </header>
    </div>
  )
}
export default withRouter(Navbar)
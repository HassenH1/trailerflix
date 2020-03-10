import React from 'react'
import './landingpage.css'
import { Link, withRouter } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="body">
      <header className="showcase">
        <div className="showcase-top">
          <img src="https://i.ibb.co/r5krrdz/logo.png" alt="TrailerFlix" />
          <Link exact to="/signin" className="btn btn-rounded">Sign In</Link>
        </div>
        <div className="showcase-content">
          <h1>Check out Trailers</h1>
          <p>Watch Anytime, Anywhere</p>
          <Link exact to="/home" className="btn btn-xl">Watch Now <i className="fas fa-chevron-right"></i></Link>
        </div>
      </header>

      <section className="tabs">
        <div className="container">
          <div id="tab-1" className="tab-item tab-border">
            <i className="fas fa-tv fa-3x"></i>
            <p className="hide-sm">Watch trailers anytime</p>
          </div>
        </div>
      </section>

      <section className="tab-content">
        <div className="container">
          <div id="tab-1-content" className="tab-content-item show">
            <div className="tab-1-content-inner">
              <div>
                <p className="text-lg">
                  Watch all the movies and tv show trailer anytime.
                </p>
                <Link exact to="/home" className="btn btn-lg">
                  Ready to Watch
                </Link>
              </div>
              <img src="https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/31/90/18/319018cc-65f5-9e6a-18f1-a93e1ab6b897/source/256x256bb.jpg" alt="trailer" height="350" width="50" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default withRouter(LandingPage)
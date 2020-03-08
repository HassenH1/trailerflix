import React from 'react'
import './landingpage.css'

export default function LandingPage() {
  return (
    <div className="body">
      <header className="showcase">
        <div className="showcase-top">
          <img src="https://i.ibb.co/r5krrdz/logo.png" alt="TrailerFlix" />
          <a href="/signin" className="btn btn-rounded">Sign In</a>
        </div>
        <div className="showcase-content">
          <h1>Check out Trailers</h1>
          <p>Watch Anytime, Anywhere</p>
          <a href="/home" className="btn btn-xl">Watch Now <i className="fas fa-chevron-right"></i></a>
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
          {/* tab content 1 */}
          <div id="tab-1-content" className="tab-content-item show">
            <div className="tab-1-content-inner">
              <div>
                <p className="text-lg">
                  Watch all the movies and tv show trailer anytime.
                </p>
                <a href="/home" className="btn btn-lg">
                  Ready to Watch
                </a>
              </div>
              <img src="https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/31/90/18/319018cc-65f5-9e6a-18f1-a93e1ab6b897/source/256x256bb.jpg" alt="trailer" height="350" width="50" />
            </div>
          </div>
          {/* <div id="tab-2-content" className="tab-content-item">
            <div className="tab-2-content-top">
              <p className="text-lg">
                Watch TV shows and movies trailers anytime, anywhere. 
              </p>
              <a href="#" className="btn btn-lg">Watch and Leave a Review</a>
            </div>
            <div className="tab-2-content-bottom">
              <div>
                <img src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png" alt="img" />
                <p className="text-md">Watch</p>
                <p className="text-dark">Watch on any device!</p>
              </div>

              <div>
                <img src="https://d3371sz2atf3uv.cloudfront.net/uiassets/images_sep/svg/icon-testimonials.svg" alt="img" />
                <p className="text-md">Review</p>
                <p className="text-dark">After watching Leave a Review</p>
              </div>

            </div> 
  </div> */}
        </div>
      </section>
    </div>
  )
}

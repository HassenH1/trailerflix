import React from 'react'
import './signin.css'

export default function Signin() {
  return (
    <div className="body">
      <header className="show-case">
        <div className="showcasetop">
          <a href="/"><img src="https://i.ibb.co/r5krrdz/logo.png" alt="TrailerFlix" /></a>
        </div>
        <div className="showcasecontent">
          <h2 className="sign-up">Sign In</h2>
          <form>
            <input placeholder="Email" type="text" />
            <input placeholder="Password" type="text" />
            <input type="submit" />
          </form>
          <div className="new-new">
            <p className="p-sm">New to TrailerFlix? <a href="/signup">Sign up now!</a></p>
          </div>
        </div>
      </header>
    </div>
  )
}

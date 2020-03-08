import React from 'react'
import './signup.css'

export default function Signup() {
  return (
    <div className="body">
      <header className="show-case">
        <div className="showcasetop">
          <a href="/"><img src="https://i.ibb.co/r5krrdz/logo.png" alt="TrailerFlix" /></a>
        </div>
        <div className="showcasecontent">
          <h2 className="sign-up">Sign Up</h2>
          <form>
            <input placeholder="Email" type="text"/>
            <input placeholder="Password" type="text"/>
            <input type="submit" />
          </form>
          <div className="new-new">
            <p className="p-sm">Already have an Account? <a href="/signin">Sign in</a></p>
          </div>
        </div>
      </header>
    </div>
  )
}

import React, { useState, useContext } from 'react'
import './signup.css'
import { UserContext } from '../contexts/UserContext'
import { withRouter, Link } from 'react-router-dom'

const Signup = (props) => {
  const { addUser } = useContext(UserContext)

  const [input, setInput] = useState({
    email: "",
    name: "",
    password: ""
  })

  const [error, setError] = useState("")

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.email === "" || input.password === "" || input.name === "") {
      setError("Seems like your missing certain values")
      setTimeout(() => {
        setError("")
      }, 5000)
      return
    }
    addUser(input)
    props.history.push("/home")
  }

  return (
    <div className="body">
      <header className="show-case">
        <div className="showcasetop">
          <a href="/"><img src="https://i.ibb.co/r5krrdz/logo.png" alt="TrailerFlix" /></a>
        </div>
        <div className="showcasecontent">
          <h2 className="sign-up">Sign Up</h2>
          <form>
            <input placeholder="Email" type="text" name="email" onChange={handleInput} value={input.email} />
            <input placeholder="Name" type="text" name="name" onChange={handleInput} value={input.name} />
            <input placeholder="Password" type="text" name="password" onChange={handleInput} value={input.password} />
            <input type="submit" onClick={handleSubmit} />
          </form>
          <div style={{ textAlign: "center", color: "red" }}>{error}</div>
          <div className="new-new">
            <p className="p-sm">Already have an Account? <Link href="/signin">Sign in.</Link></p>
          </div>
        </div>
      </header>
    </div>
  )
}

export default withRouter(Signup)
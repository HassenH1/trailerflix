import React, { useState } from 'react'
import './form.css'

export default function Form() {
  const [input, setInput] = useState({
    comment: ""
  })

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea id="subject" name="subject" placeholder="What do you think of this Movie.." style={{ height: "100px", width: "42.7rem" }} onChange={handleInput} value={input.comment} name="comment"></textarea>
      <br />
      <input type="submit" value="Submit"></input>
      {console.log(input, "<----------------------------------------------working comment here")}
    </form>
  )
}

import React, { useState, useContext } from 'react'
import './form.css'
import { CommentContext } from '../contexts/CommentContext'

export default function Form() {

  const { postingComment } = useContext(CommentContext)

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
    postingComment(input)
    setInput({
      comment: ""
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea placeholder="What do you think of this Movie.." style={{ height: "100px", width: "42.7rem" }} onChange={handleInput} value={input.comment} name="comment"></textarea>
      <br />
      <input type="submit" value="Submit"></input>
    </form>
  )
}

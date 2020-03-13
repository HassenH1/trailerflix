import React, { useState, useContext } from 'react'
import './form.css'
import { CommentContext } from '../contexts/CommentContext'

export default function Form(props) {

  const { postingComment } = useContext(CommentContext)

  const [input, setInput] = useState({
    movieID: "",
    userID: "", 
    comment: ""
  })

  const handleInput = (e) => {
    const user = localStorage.getItem('user')
    const userID = JSON.parse(user)
    setInput({
      movieID: props.match.params.id,
      userID: userID._id,
      comment: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postingComment(input)
    setInput({
      movieID: "",
      userID: "",
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

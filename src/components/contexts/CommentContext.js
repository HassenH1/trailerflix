import React, { createContext, useState } from 'react'

export const CommentContext = createContext()

export default function CommentContextProvider(props) {

  const postingComment = async (a) => {
    // console.log(a, "<------------------------------------------------what comment was submitted here?")

    // const theUser = localStorage.getItem('user')
    // const idOfUser = JSON.parse(theUser)
    // console.log(idOfUser._id, "<---------------------here i am the id")

    try {
      const c = await fetch("http://localhost:8000/review/post", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(a.comment),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
      const cJson = await c.json()

    } catch (err) {
      console.log(err)
    }

  }

  // const fetchingComment = () => {

  //}

  return (
    <CommentContext.Provider value={{ postingComment }}>
      {props.children}
    </CommentContext.Provider>
  )
}

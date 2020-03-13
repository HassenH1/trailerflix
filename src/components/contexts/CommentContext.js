import React, { createContext, useState } from 'react'

export const CommentContext = createContext()

export default function CommentContextProvider(props) {

  const postingComment = (a) => {
    console.log(a, "<------------------------------------------------what comment was submitted here?")
    const theUser = localStorage.getItem('user')
    const idOfUser = JSON.parse(theUser)
    console.log(idOfUser._id, "<---------------------here i am the id")
    // const c = fetch("http://localhost:8000/")
  }

  // const fetchingComment = () => {
    
  //}

  return (
    <CommentContext.Provider value={{ postingComment }}>
      {props.children}
    </CommentContext.Provider>
  )
}

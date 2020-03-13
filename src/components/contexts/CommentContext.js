import React, { createContext, useState } from 'react'

export const CommentContext = createContext()

export default function CommentContextProvider(props) {

  const postingComment = async (a) => {
    try {
      const c = await fetch("http://localhost:8000/review/post", {
        method: "POST",
        // credentials: "include",
        body: JSON.stringify(a),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const cJson = await c.json()
      console.log(cJson, "<--------------------------------------what is this right here?")
    } catch (err) {
      console.log(err)
    }

  }

  const fetchingComment = () => {
    
  }

  return (
    <CommentContext.Provider value={{ postingComment }}>
      {props.children}
    </CommentContext.Provider>
  )
}

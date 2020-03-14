import React, { createContext, useState } from 'react'

export const CommentContext = createContext()

export default function CommentContextProvider(props) {
  const [mID, setMID] = useState("")

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

  const fetchingComment = async (movieID, userID) => {

    const l = await fetch("http://localhost:8000/review/get", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const lJson = await l.json()
    setMID(lJson)
  }

  return (
    <CommentContext.Provider value={{ postingComment, fetchingComment, mID }}>
      {props.children}
    </CommentContext.Provider>
  )
}

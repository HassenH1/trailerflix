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

  const fetchingComment = (movieID, userID) => {
    console.log(movieID, "<--------------------from comment context movie UD")
    console.log(userID, "<---------------------from comment context user UD")
  }

  return (
    <CommentContext.Provider value={{ postingComment, fetchingComment }}>
      {props.children}
    </CommentContext.Provider>
  )
}

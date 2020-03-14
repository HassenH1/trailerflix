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

  const removeComment = (cID) => {
    console.log(mID, "<--------------------MID")
    console.log(cID, "<---------------------cID")
    // mID.filter(elem => elem._id === cID)
    const r = mID.filter((elem) => {
      // console.log(elem._id === cID)
      return elem._id === cID
    })
    // : {userID: Array(1), _id: "5e6b0bc4602bd0068012d970", movieID: "424", comment: "hello world", __v: 0}
  }

  return (
    <CommentContext.Provider value={{ postingComment, fetchingComment, removeComment, mID }}>
      {props.children}
    </CommentContext.Provider>
  )
}

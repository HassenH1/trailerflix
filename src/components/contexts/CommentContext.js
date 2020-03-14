import React, { createContext, useState } from 'react'

export const CommentContext = createContext()

export default function CommentContextProvider(props) {
  const [mID, setMID] = useState("")

  const postingComment = async (a) => {

    try {
      const c = await fetch("http://localhost:8000/review/post", {
        method: "POST",
        body: JSON.stringify(a),
        headers: {
          "Content-Type": "application/json"
        }
      })
      await c.json()
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
    //having stupid problems here */////////////////////////////////////////////////////////////////////
    console.log(mID, "<--------------------MID")
    console.log(cID, "<---------------------cID")

    mID.filter((elem) => {
      console.log(elem._id, "<---------------------------------------elem id")
      return elem._id !== cID
    })
    // const items = this.state.updatedCart && this.state.updatedCart.filter((elem) => {
    // return elem._id !== id
    // })
  }

  return (
    <CommentContext.Provider value={{ postingComment, fetchingComment, removeComment, mID }}>
      {props.children}
    </CommentContext.Provider>
  )
}
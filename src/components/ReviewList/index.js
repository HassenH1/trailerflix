import React, { useEffect, useContext } from 'react'

export default function ReviewList(props) {

  const uID = localStorage.getItem("user")
  const parsedUserID = JSON.parse(uID)

  const reviews = props.mID && props.mID.map((elem, i) => {
    if (elem.movieID === props.match.params.id) {
      return (
        <div key={i} style={{ border: "1px solid yellow", height: "auto", width: "100%", margin: "1rem 0", padding: "3rem 0" }}>
          {elem.comment}
          {
            elem.userID === parsedUserID._id
              ? "Why is this not showing?"
              : console.log("not showing up anywhere")
          }
        </div>
      )
    }
  })

  return (
    <div>
      {reviews}
    </div>
  )
}
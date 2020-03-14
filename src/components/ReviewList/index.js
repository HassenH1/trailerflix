import React from 'react'

export default function ReviewList(props) {

  const uID = localStorage.getItem("user")
  const parsedUserID = JSON.parse(uID)

  const reviews = props.mID && props.mID.map((elem, i) => {
    if (elem.movieID === props.match.params.id) {
      return (
        <div key={i} style={{ border: "1px solid white", height: "auto", width: "100%", margin: "1rem 0", padding: "3rem 0", display: "flex", flexDirection: "row-reverse" }}>
          {
            parsedUserID && elem.userID == parsedUserID._id
              ? <div style={{ width: "1rem", color: "red", cursor: "pointer" }} onClick={() => props.removeComment(elem._id)}>
                X
              </div>
              : console.log(elem.userID, "not showing up anywhere")
          }
          <div style={{ margin: "0 auto" }}>
            {elem.comment}
          </div>
        </div>
      )
    }
  })

  return (
    <>
    {console.log(props.mID, ",-------mID")}
      {reviews}
    </>
  )
}
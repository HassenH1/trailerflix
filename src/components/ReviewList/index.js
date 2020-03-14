import React, { useEffect, useContext } from 'react'
// import { CommentContext } from '../contexts/CommentContext'

export default function ReviewList(props) {

  // const { fetchingComment, mID } = useContext(CommentContext)

  useEffect(() => {
    // let user = ""
    // let parsed = ""
    // if (localStorage.getItem("user")) {

    //   user = localStorage.getItem("user")

    //   parsed = JSON.parse(user)

    // }
    // fetchingComment()
  }, [])

  const reviews = props.mID && props.mID.map((elem, i) => {
    if(elem.movieID === props.match.params.id) {
      return(
        <div key={i}>
          {elem.comment}
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

// {userID: Array(1), _id: "5e6b0bc4602bd0068012d970", movieID: "424", comment: "hello world", __v: 0}
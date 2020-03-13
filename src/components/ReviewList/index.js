import React, { useEffect, useContext } from 'react'
import { CommentContext } from '../contexts/CommentContext'

export default function ReviewList(props) {

  const { fetchingComment } = useContext(CommentContext)

  useEffect(() => {
    let user = ""
    let parsed = ""
    if (localStorage.getItem("user")) {

      user = localStorage.getItem("user")

      parsed = JSON.parse(user)

    } 
    fetchingComment(props.match.params.id, parsed._id)
  }, [])

  return (
    <div>
      the review list here
    </div>
  )
}

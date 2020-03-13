import React, { useEffect } from 'react'

export default function ReviewList() {

  useEffect(() => {
    if (localStorage.getItem("user")) {

      const user = localStorage.getItem("user")

      console.log(JSON.parse(user), "<------------------------------from review list")

    } else {

      console.log("nothing should happen", "<--------------------------from review list")

    }
  }, [])

  return (
    <div>
      the review list here
    </div>
  )
}

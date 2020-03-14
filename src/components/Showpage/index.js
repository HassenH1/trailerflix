import React, { useContext, useEffect } from 'react'
import { DataFetchContext } from '../contexts/DataFetchContext'
import { UserContext } from '../contexts/UserContext'
import Navbar from '../Navbar'
import './showpage.css'
import Form from '../Form'
import ReviewList from '../ReviewList'
import CommentContextProvider from '../contexts/CommentContext';
import { CommentContext } from '../contexts/CommentContext'

const Showpage = (props) => {
  const { fetchingVideoDetails, details, video } = useContext(DataFetchContext)

  const { user, signOutUser, getUser } = useContext(UserContext)

  const { fetchingComment, removeComment, mID } = useContext(CommentContext)

  useEffect(() => {
    // gotta fix this
    window.scrollTo(0, 0)

    if (props.match.params.id) {
      fetchingVideoDetails(props.match.params.id)
    } else {
      console.log("useEffect shouldnt be there")
    }

    if (localStorage.getItem("user")) {

      const user = localStorage.getItem("user")

      getUser(JSON.parse(user))

    } else {

      console.log("nothing should happen")

    }
    fetchingComment()
  }, [])

  return (
    <div>
      <Navbar user={user} signOutUser={signOutUser} />

      <div className="video-container">
        {
          video && video.results
            ? <div>
              <embed src={`https://www.youtube.com/embed/${video.results[0].key}`} allowFullScreen={true} className="video-size" />
            </div>
            : "No video here"
        }
      </div>
      <div className="detail-for-video">
        <div className="one">
          <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt="popular" className="img" />
        </div>
        <div className="two">
          <h3>{details.original_title}</h3>
          <h4>{details.tagline}</h4>
          <br />
          <p>{details.overview}</p>
          <br />
          <p>Release: {details.release_date}</p>
          <p>{details.vote_average} out of 10</p>
        </div>
      </div>
      <hr style={{ width: "50%", margin: "2rem auto" }} />
      <div className="three">
        <div className="inside">
          {user
            ? <Form {...props} />
            : ""
          }
          <div style={{ width: "100%", height: "auto" }}>
            <CommentContextProvider>
              <ReviewList {...props} mID={mID} removeComment={removeComment}/>
            </CommentContextProvider>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Showpage
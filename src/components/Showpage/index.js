import React, { useContext, useEffect } from 'react'
import { DataFetchContext } from '../contexts/DataFetchContext'
import { UserContext } from '../contexts/UserContext'
import Navbar from '../Navbar'
import './showpage.css'


const Showpage = (props) => {
  const { fetchingVideoDetails, details, video } = useContext(DataFetchContext)
  const { user, signOutUser } = useContext(UserContext)

  useEffect(() => {
    if (props.match.params.id) {
      fetchingVideoDetails(props.match.params.id)
    } else {
      console.log("useEffect shouldnt be there")
    }

  }, [])

  return (
    <div>
      <Navbar user={user} signOutUser={signOutUser} />

      <div className="video-container">
        {
          video && video.results
            ? <div>
              <embed src={`https://www.youtube.com/embed/${video.results[0].key}`} allowFullScreen={true} className="video-size" />
              {console.log(video.results[0].key, "<-----------------------------------------east side lunny")}
            </div>
            : "No video here"
        }
        {/* {console.log(video.results[0].key, "<--------------------------------------eastside lunny")} */}
      </div>
      <hr style={{ width: "50%", margin: "2rem auto" }} />
      <div className="detail-for-video">
        <div className="one">
          <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt="popular" className="img" />
        </div>
        <div className="two">

        </div>
      </div>
    </div>
  )
}
export default Showpage
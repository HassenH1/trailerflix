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
          {console.log(details, "<-----------here we go again?")}
          <h3>{details.original_title}</h3>
          <h4>{details.tagline}</h4>
          <br />
          <p>{details.overview}</p>
          <br />
          <p>Release: {details.release_date}</p>
          <p>{details.vote_average} out of 10</p>
          <div className="check-reviews">
            <button>Check out reviews</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Showpage

// adult: false
// backdrop_path: "/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg"
// belongs_to_collection: null
// budget: 85000000
// genres: (4) [{…}, {…}, {…}, {…}]
// homepage: ""
// id: 454626
// imdb_id: "tt3794354"
// original_language: "en"
// original_title: "Sonic the Hedgehog"
// overview: "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination."
// popularity: 297.056
// poster_path: "/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg"
// production_companies: (5) [{…}, {…}, {…}, {…}, {…}]
// production_countries: (2) [{…}, {…}]
// release_date: "2020-02-12"
// revenue: 265493652
// runtime: 99
// spoken_languages: [{…}]
// status: "Released"
// tagline: "A Whole New Speed of Hero"
// title: "Sonic the Hedgehog"
// video: false
// vote_average: 7.2
// vote_count: 907
// __proto__: Object
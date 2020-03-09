import React, { useEffect } from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import './bigcarousel.css'

export default function BigCarouselNowPlaying(props) {

  const shortingString = (str) => {
    let newS = ""

    newS = str.split(" ")

    newS.splice(60, newS.length, "...")

    return newS.join(" ")
  }

  const images = props.nowPlaying && props.nowPlaying.results.map((elem, i) => {
    return (
      <div key={i} className="IS-THIS-IT">

        <div className="image-container">
          <img src={`https://image.tmdb.org/t/p/original${elem.poster_path}`} alt="now playing" />
        </div>

        <div className="big-text">
          <h2>{elem.original_title}</h2>

          <br />
          {
            elem.overview.split(" ").length >= 60
              ? <p>{shortingString(elem.overview)}</p>
              : <p>{elem.overview}</p>
          }

          <br />

          <button className="btn"><a href="#">Watch Trailer</a></button>
        </div>

      </div>
    )
  })

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={8000}
        infinite={true}
        bullets={false}
      // fillParent={true}
      >
        {images}
      </AutoplaySlider>
    </>
  )
}
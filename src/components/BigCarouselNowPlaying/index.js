import React, { useEffect } from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';


export default function BigCarouselNowPlaying(props) {

  const images = props.nowPlaying && props.nowPlaying.results.map((elem, i) => {
    return (
      <div key={i} style={{display: "flex", flexDirection: "row"}}>
        <img src={`https://image.tmdb.org/t/p/original${elem.poster_path}`} alt="now playing" style={{width: "30%"}}/>
        <div className="text">
          {elem.overview}
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
        interval={3000}
        infinite={true}
        bullets={false}
      // fillParent={true}
      >
        {images}
      </AutoplaySlider>
    </>
  )
}
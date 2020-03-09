import React, { useEffect } from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';


export default function BigCarouselNowPlaying(props) {

  const images = props.nowPlaying && props.nowPlaying.results.map((elem, i) => {
    return (
      <div className="mySlides fade" key={i}>
        <img src={`https://image.tmdb.org/t/p/original${elem.poster_path}`} alt="now playing" width="100%" height="20%" />
        <div className="text">Somes text goes here too
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
      >
        {images}
      </AutoplaySlider>
    </>
  )
}
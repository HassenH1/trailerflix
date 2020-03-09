import React, { useEffect } from 'react'
import './bigcarousel.css'
import Swiper from "swiper"
import "swiper/css/swiper.css";

export default function BigCarouselNowPlaying(props) {

  const images = props.nowPlaying && props.nowPlaying.results.map((elem, i) => {
    return (
      <div className="mySlides fade" key={i}>
        <img src={`https://image.tmdb.org/t/p/w500${elem.poster_path}`} alt="now playing" width="100%" />
        <div classNames="text">Somes text goes here too
        </div>
      </div>
    )
  })

  return (
    <div className="slideshow-container">
      {console.log(props, "<-------------somethig is wrong for some reason")}
      {images}
    </div>
  )
}


{/* <div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src="img_nature_wide.jpg" style="width:100%" />
    <div class="text">Caption Text</div>
</div> */}
import React, { useEffect } from 'react'
import './bigcarousel.css'
import Swiper from "swiper"
import "swiper/css/swiper.css";

export default function BigCarouselNowPlaying(props) {

  useEffect(() => {
    var swiper = new Swiper('.swiper-container', {
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
    });
  }, [])

  const images = props.nowPlaying && props.nowPlaying.results.map((elem, i) => {
    return(
      <div className="swiper-slide" key={i}>
        <img src={`https://image.tmdb.org/t/p/w500${elem.poster_path}`} alt="now playing" />
      </div>
    )
  })

  return (
    <div className="body">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          {images}
          {console.log(props, "<--------------now playing part")}
        </div>
        <div class="swiper-scrollbar"></div>
      </div>
    </div>
  )
}

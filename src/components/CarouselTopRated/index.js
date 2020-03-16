import React, { useEffect } from 'react'
import './carousel.css'
import Swiper from "swiper"
import "swiper/css/swiper.css";
import { withRouter, Link } from 'react-router-dom'

const CarouselTopRated = (props) => {

  useEffect(() => {
    new Swiper('.swiper-container', {
      slidesPerView: 6,
      spaceBetween: 5,
      slidesPerGroup: 2,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, [])

  const images = props.topRated && props.topRated.results.map((elem, i) => {
    return (
      <div className="swiper-slide" key={i}>
        <Link to={`/movie/${elem.id}`}><img src={`https://image.tmdb.org/t/p/w500${elem.backdrop_path}`} key={i} width="10" height="300" alt="top rated" /></Link>
      </div>
    )
  })

  return (
    <>
      <div style={{ height: "20rem" }}>
        <h2 className="popular-heading2">Top Rated</h2>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {images}
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </>
  )
}
export default withRouter(CarouselTopRated)
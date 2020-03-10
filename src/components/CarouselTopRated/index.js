import React, { useEffect } from 'react'
import './carousel.css'
import Swiper from "swiper"
import "swiper/css/swiper.css";
import { withRouter, Link } from 'react-router-dom'

const CarouselTopRated = (props) => {

  useEffect(() => {
    let swiper = new Swiper('.swiper-container', {
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
        {/* {missing exact to= "show page here with id passing thru"} */}
        <Link className="link"><img src={`https://image.tmdb.org/t/p/w500${elem.poster_path}`} key={i} width="30" height="10" alt="top rated" /></Link>
      </div>
    )
  })

  return (
    <>
      <div className="netflix">
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
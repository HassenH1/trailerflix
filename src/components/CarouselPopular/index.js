import React, { useEffect } from 'react'
import Swiper from "swiper"
import "swiper/css/swiper.css";
import './carousel.css'
import { withRouter, Link } from 'react-router-dom'

const CarouselPopular = (props) => {

  useEffect(() => {
    // new Swiper('.swiper-container', {
    //   slidesPerView: 6,
    //   spaceBetween: 5,
    //   slidesPerGroup: 3,
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    // });

    new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, [])

  const images = props.popular && props.popular.results.map((elem, i) => {
    return (
      <div className="swiper-slide" key={i}>
        <Link className="link" to={`/movie/${elem.id}`}><img src={`https://image.tmdb.org/t/p/w500${elem.backdrop_path}`} width="30" height="10" alt="popular" /></Link>
      </div>
    )
  })

  return (
    <>
      <div className="netflix">
      <h2 className="popular-heading2">Popular</h2>
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
export default withRouter(CarouselPopular)
import React, { useEffect } from 'react'
import Swiper from 'swiper'
import { Link } from 'react-router-dom'
import './one.css'

export default function One(props) {

  useEffect(() => {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 6,
      spaceBetween: 3,
      slidesPerGroup: 2,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, [])

  const images = props.popular && props.popular.results.map((elem, i) => {
    return (
      <div className="swiper-slide" key={i}>
        <Link to={`/movie/${elem.id}`}><img src={`https://image.tmdb.org/t/p/w500${elem.backdrop_path}`} width="30" height="1" alt="popular" className="netflix-img" /></Link>
      </div>
    )
  })

  return (
    <div className="netflix">
      <h2 className="big-text">Popular on Trailers</h2>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {images}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  )
}

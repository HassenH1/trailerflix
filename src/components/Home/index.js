import React, { useContext } from 'react'
import Navbar from '../Navbar'
import { DataFetchContext } from '../contexts/DataFetchContext'
import CarouselPopular from '../CarouselPopular'
import CarouselTopRated from '../CarouselTopRated'
import BigCarouselNowPlaying from '../BigCarouselNowPlaying'

export default function Home() {
  const { nowPlaying, popular, topRated } = useContext(DataFetchContext)
  return (
    <>
      <Navbar />
      <BigCarouselNowPlaying nowPlaying={nowPlaying}/>
      <CarouselPopular popular={popular} />
      {/* <CarouselTopRated topRated={topRated}/> */}
    </>
  )
}
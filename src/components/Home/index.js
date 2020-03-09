import React, { useContext } from 'react'
import Navbar from '../Navbar'
import { DataFetchContext } from '../contexts/DataFetchContext'
import CarouselPopular from '../CarouselPopular'
import CarouselTopRated from '../CarouselTopRated'

export default function Home() {
  const { nowPlaying, popular, topRated } = useContext(DataFetchContext)
  return (
    <>
      <Navbar />
      <CarouselPopular popular={popular} />
      <CarouselTopRated topRated={topRated}/>
    </>
  )
}
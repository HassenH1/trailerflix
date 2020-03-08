import React, { useContext } from 'react'
import Navbar from '../Navbar'
import { DataFetchContext } from '../contexts/DataFetchContext'
import CarouselPopular from '../CarouselPopular'

export default function Home() {
  const { nowPlaying, popular } = useContext(DataFetchContext)
  return (
    <>
      <Navbar />
      <CarouselPopular popular={popular} />
    </>
  )
}
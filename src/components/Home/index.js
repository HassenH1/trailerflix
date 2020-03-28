import React, { useContext, useEffect } from 'react'
import Navbar from '../Navbar'
import { DataFetchContext } from '../contexts/DataFetchContext'
import { UserContext } from '../contexts/UserContext'
import CarouselPopular from '../CarouselPopular'
import CarouselTopRated from '../CarouselTopRated'
import BigCarouselNowPlaying from '../BigCarouselNowPlaying'
import One from '../One'
import Two from '../Two'
import Footer from '../Footer'

export default function Home() {
  const { nowPlaying, popular, topRated } = useContext(DataFetchContext)
  const { user, getUser, signOutUser } = useContext(UserContext)

  useEffect(() => {
    window.scrollTo(0, 0)

    if (localStorage.getItem("user")) {

      const user = localStorage.getItem("user")

      getUser(JSON.parse(user))

    } else {

      console.log("nothing should happen")

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Navbar user={user} signOutUser={signOutUser} />
      <BigCarouselNowPlaying nowPlaying={nowPlaying} />
      <One popular={popular} />
      <Two topRated={topRated}/>
      {/* <CarouselPopular popular={popular} /> */}
      {/* <CarouselTopRated topRated={topRated} /> */}
      <Footer />
    </>
  )
}
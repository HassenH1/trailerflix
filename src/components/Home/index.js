import React, { useContext, useEffect } from 'react'
import Navbar from '../Navbar'
import { DataFetchContext } from '../contexts/DataFetchContext'
import { UserContext } from '../contexts/UserContext'
import CarouselPopular from '../CarouselPopular'
import CarouselTopRated from '../CarouselTopRated'
import BigCarouselNowPlaying from '../BigCarouselNowPlaying'

export default function Home() {
  const { nowPlaying, popular, topRated } = useContext(DataFetchContext)
  const { user, getUser, signOutUser } = useContext(UserContext)

  useEffect(() => {

    if (localStorage.getItem("user")) {

      const user = localStorage.getItem("user")

      getUser(JSON.parse(user))

    } else {

      console.log("nothing should happen")

    }
  }, [])

  return (
    <>
      <Navbar user={user} signOutUser={signOutUser}/>
      <BigCarouselNowPlaying nowPlaying={nowPlaying} />
      <CarouselPopular popular={popular} />
      <CarouselTopRated topRated={topRated} />
    </>
  )
}
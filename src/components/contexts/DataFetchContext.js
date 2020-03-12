import React, { createContext, useEffect, useState } from 'react'

export const DataFetchContext = createContext()

const DataFetchContextProvider = (props) => {
  const [nowPlaying, setNowPlaying] = useState("")
  const [popular, SetPopular] = useState("")
  const [topRated, SetTopRated] = useState("")
  const [upcoming, SetUpcoming] = useState("")
  const [details, setDetails] = useState("")
  const [video, setVideo] = useState("")

  const fetchingData = async () => {
    try {
      const d = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=e0282b31393a2e65727c799e6e985ef1&language=en-US&page=1", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      const dJson = await d.json()
      setNowPlaying({ ...dJson })
    } catch (err) {
      console.log(err)
    }

    try {
      const a = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e0282b31393a2e65727c799e6e985ef1&language=en-US&page=1", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      const aJson = await a.json()
      SetPopular({ ...aJson })
    } catch (err) {
      console.log(err)
    }

    try {
      const n = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=e0282b31393a2e65727c799e6e985ef1&language=en-US&page=1", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      const nJson = await n.json()
      SetTopRated({ ...nJson })
    } catch (err) {
      console.log(err)
    }

    try {
      const m = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=e0282b31393a2e65727c799e6e985ef1&language=en-US&page=1", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      const mJson = await m.json()
      SetUpcoming({ ...mJson })
    } catch (err) {
      console.log(err)
    }
  }

  const fetchingVideoDetails = async (id) => {
    console.log(id, "<---------------------------------------should be a new id everytime")
    try {
      const v = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e0282b31393a2e65727c799e6e985ef1&language=en-US`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      const vJson = await v.json()
      console.log(vJson, "<----------------------------------------------vJson here")
      setDetails(vJson)
      await gettingVideNow(vJson)
    } catch (err) {
      console.log(err)
    }
  }

  const gettingVideNow = async (key) => {
    console.log(key, "<----------------------------------------------should be a new key everytime")
    try {
      const vid = await fetch(`https://api.themoviedb.org/3/movie/${key.id}/videos?api_key=e0282b31393a2e65727c799e6e985ef1&language=en-US
      `, {
        method: "GET",
        header: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      const vidJson = await vid.json()
      console.log(vidJson, "<--------------------------------------the video details now?")
      setVideo(vidJson)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchingData()
  }, [])

  return (
    <DataFetchContext.Provider value={{ nowPlaying, popular, topRated, upcoming, fetchingVideoDetails, details, video }}>
      {props.children}
    </DataFetchContext.Provider>
  )
}

export default DataFetchContextProvider
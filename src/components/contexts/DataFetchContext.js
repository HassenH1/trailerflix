import React, { createContext, useEffect, useState } from 'react'

export const DataFetchContext = createContext()

const DataFetchContextProvider = (props) => {
  const [nowPlaying, setNowPlaying] = useState("")
  const [popular, SetPopular] = useState("")

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
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchingData()
  }, [])

  return (
    <DataFetchContext.Provider value={{ nowPlaying, popular }}>
      {props.children}
    </DataFetchContext.Provider>
  )
}

export default DataFetchContextProvider
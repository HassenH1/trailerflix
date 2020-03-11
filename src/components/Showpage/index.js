import React, { useContext, useEffect } from 'react'
import { DataFetchContext } from '../contexts/DataFetchContext'

const Showpage = (props) => {
  const { fetchingVideoDetails, details, video } = useContext(DataFetchContext)

  useEffect(() => {
    // console.log(props.match.params.id, "<-------------does this go first?")
    fetchingVideoDetails(props.match.params.id, "<-------------------is this second?")
  }, [])

  return (
    <div>
      {/* {console.log(video.results, "<-----------------------------coming from show page")} */}
      <h1>Show page for each movie</h1>
      {/* <embed src={`https://www.youtube.com/embed/${video.results[0].key}`} allowfullscreen="true" width="425" height="344" /> */}
    </div>
  )
}
export default Showpage
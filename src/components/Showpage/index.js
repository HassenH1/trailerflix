import React, { useContext, useEffect } from 'react'
import { DataFetchContext } from '../contexts/DataFetchContext'
import { UserContext } from '../contexts/UserContext'
import Navbar from '../Navbar'


const Showpage = (props) => {
  const { fetchingVideoDetails, details, video } = useContext(DataFetchContext)
  const { user, signOutUser } = useContext(UserContext)

  useEffect(() => {
    console.log(props.match.params.id, "<-------------does this go first?")
    fetchingVideoDetails(props.match.params.id, "<-------------------is this second?")
  }, [])

  return (
    <div>
      <Navbar user={user} signOutUser={signOutUser} />

      <h1>Show page for each movie</h1>
      {
        video && video.results
          ? <embed src={`https://www.youtube.com/embed/${video.results[0].key}`} allowFullScreen={true} with="425" height="344" />
          : "video is not here"
      }
    </div>
  )
}
export default Showpage
import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

function Movietrailer() {
  let movies = useSelector(state => state.movie?.nowPlayingMovie) //<=
  if(!movies||movies.length===0)return 
  let mainmovie = movies[0]
  const {id,title,overview,release_date}=mainmovie;
  return (
    <div className=' pb-32'>
      <VideoBackground movieID={id} />
      <VideoTitle title={title} overview={overview} date={release_date} />
    </div>
  )
}

export default Movietrailer

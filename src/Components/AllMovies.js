import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
function AllMovies() {
  const movies = useSelector(state=>state.movie)
  return (
    <div className='text-white'>
      <div className='relative -translate-y-16 '>
          <MovieList title={'recommend'} moviedata={movies?.nowPlayingMovie} />
          <MovieList title={'trending'} moviedata={movies?.popularMovie} />
      </div>
    </div>
  )
}

export default AllMovies

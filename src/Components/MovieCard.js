import React from 'react'

function MovieCard({poster}) {
  return (
    <div className='h-[24vh] flex-shrink-0'>
      <img className='h-full w-full object-contain' src={`https://image.tmdb.org/t/p/w500${poster}`} alt='' />
    </div>
  )
}

export default MovieCard

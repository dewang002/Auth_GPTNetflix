import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title,moviedata,key}) {
  return (
    <div className='px-8 pb-8'>
      <h1 className='text-4xl pb-8 font-bold uppercase text-white'>{title}</h1>
      <div className='flex gap-10 overflow-x-scroll'>
        {moviedata?.map(elem=>
          <MovieCard key={key} poster={elem.poster_path} />
        )}
      </div>
    </div>
  )
}

export default MovieList

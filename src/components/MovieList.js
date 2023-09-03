import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {

if(!movies)
    return
  return (
    <div className='p-4'>
        <h1 className='text-3xl py-6 text-white px-4'>{title}</h1>
        <div className='h-1 ml-4 bg-red-700 w-1/6 rounded-md'></div>
        <div className='flex py-6 overflow-x-scroll no-scrollbar'>  
            <div className='flex'>
                {
                    movies.map((movie)=>{
                        return <MovieCard key={movie.id} movie={movie}/>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default MovieList
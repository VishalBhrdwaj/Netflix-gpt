import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
if(!movies)
    return
  return (
    <div className='p-4'>
        <h1 className='text-3xl py-6 text-white px-4'>Title</h1>
        <div className='flex overflow-x-scroll no-scrollbar'>  
            <div className='flex'>
                {
                    movies.map((movie,index)=>{
                        return <MovieCard key={movie.id} movie={movie}/>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default MovieList
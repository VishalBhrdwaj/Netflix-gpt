import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies=useSelector(store=>store.movies)

  return (
    <div className='bg-black'>
        <div className="-mt-56 relative z-10 bg-gradient-to-t from-black"><MovieList movies={movies.nowPlayingMovies} /></div>
        <MovieList movies={movies.nowPlayingMovies} />
        <MovieList movies={movies.nowPlayingMovies} />
        <MovieList movies={movies.nowPlayingMovies} />
        <MovieList movies={movies.nowPlayingMovies} />
    </div>
  )
}

export default SecondaryContainer

// title={"Now Playing"} movies={movies.nowPlayingMovies}
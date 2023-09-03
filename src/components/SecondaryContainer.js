import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies=useSelector(store=>store.movies)

  return (
    <div className='bg-black'>
        <div className="-mt-56 relative z-10 bg-gradient-to-t from-black"><MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies} /></div>
        {<MovieList title={"UpComing Movies"} movies={movies?.upcomingMovies?.results} />}
        <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies?.results} />
        <MovieList title={"Popular Movies"} movies={movies?.popularMovies?.results} />
    </div>
  )
}

export default SecondaryContainer

// title={"Now Playing"} movies={movies.nowPlayingMovies}
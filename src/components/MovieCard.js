import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import useGetMovieToPlay from '../hooks/useGetMovieToPlay';
import { useDispatch } from 'react-redux';
import { setCurrentlyWatching } from '../utils/moviesSlice';

const MovieCard = ({movie}) => {
  useGetMovieToPlay(movie.id);
  // console.log(movie);
  const dispatch=useDispatch();
    

  const toggleCurrenltyView=()=>{
    dispatch(setCurrentlyWatching());
  }
  return (
    <div className='w-40  mr-3 ml-3 hover:scale-125 transition ease-in-out delay-0 cursor-pointer  hover:-translate-y-1  '>
        <img
        onClick={toggleCurrenltyView} 
        className='rounded-md'
        src={IMG_CDN_URL+movie.poster_path}
        alt="banner"
        />
    </div>
  )
}

export default MovieCard
import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({movie}) => {
  return (
    <div className='w-40 mr-3 ml-3'>
        <img 
        src={IMG_CDN_URL+movie.poster_path}
        alt="banner"
        />
    </div>
  )
}

export default MovieCard
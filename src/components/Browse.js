import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {

  const gptView=useSelector(store=>store.gpt.showgppt);

  useNowPlayingMovies();
  return (
    <div>
        <Header/>
        {gptView===true?<GptSearch/>:<><MainContainer/>
        <SecondaryContainer/></>}
        
    </div>
  )
}

export default Browse
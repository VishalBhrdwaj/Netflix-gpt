
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from 'react-redux';
import usePopularMovie from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import PlayVideo from './PlayVideo';


const Browse = () => {

  const gptView=useSelector(store=>store.gpt.showgppt);
  const currentlyWatching=useSelector(store=>store.movies.currentlyWatching)
  console.log("Currrrėttttt",currentlyWatching);

  useNowPlayingMovies();
  usePopularMovie();
  useTopRatedMovies();
  useUpcomingMovies() ;
  return (
    // <PlayVideo/>
    <div>
      {currentlyWatching && <PlayVideo/>}
       {!currentlyWatching && <> <Header/>
        <MainContainer/>
        <SecondaryContainer/>
        </>}
        
    </div>
  )
}

export default Browse
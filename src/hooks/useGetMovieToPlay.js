import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setCurrentlyWatchingMovieKey } from "../utils/moviesSlice";


const useGetMovieToPlay=(movieId)=>{
    const dispatch=useDispatch();
    const getMovieToPlay=async()=>{
        const data=await fetch(
            "https://api.themoviedb.org/3/movie/"+movieId+"/videos",
            // "https://api.themoviedb.org/3/movie/832502/videos",

            API_OPTIONS
          );
        const json=await data.json();
        const playedMovie=json.results.filter((movie)=>movie.type==='Trailer') 
        dispatch(setCurrentlyWatchingMovieKey(playedMovie[0].key))
        console.log(playedMovie[0]);
    }

    useEffect(()=>{
        getMovieToPlay();
    },[])
}

export default useGetMovieToPlay;
// 832502
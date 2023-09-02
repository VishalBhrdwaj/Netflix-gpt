
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch} from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer=(movieId)=>{

    const dispatch=useDispatch();
    const getMainMovieTrailer = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movieId+"/videos",
        API_OPTIONS
      );
      const json = await data.json();
      const filterMoviedata = json.results.filter(
        (movie) => movie.type === "Trailer"
      );
  
      const trailer =
        filterMoviedata.length !== 0 ? filterMoviedata[0] : json.results[0];
    
      dispatch(addTrailerVideo(trailer));
    };
    useEffect(() => {
      getMainMovieTrailer();
    }, []);
}

export default useMovieTrailer;
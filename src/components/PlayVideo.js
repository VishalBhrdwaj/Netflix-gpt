import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentlyWatching } from "../utils/moviesSlice";

const PlayVideo = () => { 
    const movieKey=useSelector(store=>store.movies.currentlyWatchingMovieKey);
    const dispatch=useDispatch();
    

    const toggleCurrenltyView=()=>{
      dispatch(setCurrentlyWatching());
    }
  return (
    <div className="">
        <button onClick={toggleCurrenltyView} className=" border border-red-600 px-20 hover:bg-red-700 bg-black text-white rounded-md font-semibold py-3 mt-3 absolute ml-[85%]">← Back</button>
        {/* <div  className="border cursor-pointer ml-1/2 bg-black text-white font-semibold text-2xl">⬅ Back</div> */}
      <iframe
        className="w-screen h-screen"
        src={"https://www.youtube.com/embed/"+movieKey+"?&autoplay=1&showinfo=0"}
        title="YouTube video player"
       
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       
      ></iframe>
    </div>
  );
};

export default PlayVideo;

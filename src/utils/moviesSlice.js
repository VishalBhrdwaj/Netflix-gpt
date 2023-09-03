import { createSlice } from "@reduxjs/toolkit";



const movieSlice=createSlice({
    name:"movies",
    initialState:{
        trailerVideo:null,
        nowPlayingMovies:null,
        upcomingMovies:null,
        topRatedMovies:null,
        popularMovies:null,
        currentlyWatching:false,
        currentlyWatchingMovieKey:"",
        

    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },

        setCurrentlyWatching:(state)=>{
            state.currentlyWatching=!state.currentlyWatching
        },
        setCurrentlyWatchingMovieKey:(state,action)=>{
            state.currentlyWatchingMovieKey=action.payload;
        }


    }
})



export const {addNowPlayingMovies,
                addTrailerVideo,
                addPopularMovies,
                addUpcomingMovies,
                addTopRatedMovies,
                setCurrentlyWatching,
                setCurrentlyWatchingMovieKey

            }=movieSlice.actions;
export default movieSlice.reducer
import { createSlice } from "@reduxjs/toolkit";


const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showgppt:false
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showgppt=!state.showgppt;
        }
    }
})

export const {toggleGptSearchView}=gptSlice.actions;

export default gptSlice.reducer;
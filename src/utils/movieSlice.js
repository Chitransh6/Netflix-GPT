import { createSlice } from "@reduxjs/toolkit";


const movie = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
    },
    reducers : {
        addnowPlayingMovies : (state,action)=>{
           state.nowPlayingMovies = action.payload;
        }
    }
})

export const {addnowPlayingMovies} = movie.actions;
export default movie.reducer;
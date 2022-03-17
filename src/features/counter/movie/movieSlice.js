import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: []
}

const movieSlices = createSlice({
    name: "movie",
    initialState,
    
})
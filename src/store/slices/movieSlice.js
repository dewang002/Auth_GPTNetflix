import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    trailer: null,
    nowPlayingMovie: null,
    popularMovie: null,
  },
  reducers: {
    addNowplaying: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addtrailer: (state, action) => {
      state.trailer = action.payload;
    },
    addpopular: (state, action) => {
      state.popularMovie = action.payload;  
    },
  },
})
export const{addNowplaying,addtrailer,addpopular}=movieSlice.actions;
export default movieSlice.reducer;

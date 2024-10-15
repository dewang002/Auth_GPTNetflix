import { createSlice } from "@reduxjs/toolkit";

const GPTslice = createSlice({
  name: "gptview",
  initialState: {
    showgpt: false,
    suggestedMovieName: null,
    suggestedMovieData: null,
  },
  reducers: {
    addGPTview: (state) => {
      state.showgpt = !state.showgpt;
    },
    addgptmovie: (state, action) => {
      const {moviedata,movienames}=action.payload
      state.suggestedMovieData = moviedata;
      state.suggestedMovieName = movienames;
    },
    clearGPTmovie: (state) => {
      state.suggestedMovieData = null;
      state.suggestedMovieName = null;
    },
  },
});
export const { addGPTview, addgptmovie, clearGPTmovie } = GPTslice.actions;
export default GPTslice.reducer;

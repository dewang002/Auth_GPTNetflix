import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./slices/movieSlice";
import GPTslice from "./slices/GPTslice"

 const app = configureStore({
    reducer:{
      movie:movieSlice,
      gptview:GPTslice
    }
})

export default app;
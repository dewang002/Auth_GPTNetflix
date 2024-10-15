import axios from "axios";
import { useDispatch } from "react-redux";
import { addgptmovie, clearGPTmovie } from "../store/slices/GPTslice";
import { options } from "../utils/constents";
import { useCallback } from "react";

function useGPTsuggest(searchtext) {
  const dispatch = useDispatch();
  const fetchGptMovie = async (movies) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movies}&include_adult=false&language=en-US&page=1&${process.env.REACT_APP_AUTH_KEY}`,
      options
    );
    const json = await data.json();
    return json;
  };
  const handleGpt = useCallback(async () => {
   try{
    dispatch(clearGPTmovie())
    const searchkey =
      "Act as a Movie Recommendation system. Don't give me an object, give me an array format and suggest some movies for the query: " +
      searchtext.current.value +
      ". Only give me names of 5 movies, comma-separated like the example result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const responce = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAF5CXtg5Mo-UtveqaQEyzy05fFmrA4UO8",
      method: "post",
      data: { contents: [{ parts: [{ text: searchkey }] }] },
    });

    const movienames =(responce.data?.candidates?.[0]?.content?.parts[0]?.text).split(",");
    const moviereq = movienames.map((elem) => fetchGptMovie(elem));
    const moviedata = await Promise.all(moviereq);
    dispatch(addgptmovie({moviedata,movienames}));
   }finally{
    'rendered'
   }
    
  },[searchtext])

  return { handleGpt };
}

export default useGPTsuggest;

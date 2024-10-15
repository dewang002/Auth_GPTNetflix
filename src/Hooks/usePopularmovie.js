import React, { useEffect } from "react";
import { addpopular } from "../store/slices/movieSlice";
import { useDispatch } from "react-redux";
import { options } from "../utils/constents";

function usePopularmovie() {
  const dispatch = useDispatch();
  const popular = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    let json = await data.json();
    dispatch(addpopular(json.results));
  };
  useEffect(() => {
   popular();
  }, []);
}

export default usePopularmovie;

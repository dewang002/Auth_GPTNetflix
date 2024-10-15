import React, { useEffect } from "react";
import { addNowplaying } from "../store/slices/movieSlice";
import { useDispatch } from "react-redux";
import { options } from "../utils/constents";

function useNowplaying() {
  const dispatch = useDispatch();
  const popular = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    let json = await data.json();
    dispatch(addNowplaying(json.results));
  };
  useEffect(() => {
   popular();
  }, []);
}

export default useNowplaying;

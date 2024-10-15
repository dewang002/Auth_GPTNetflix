import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constents";
import { addtrailer } from "../store/slices/movieSlice";

function useMainBackground(movieID) {
  const dispatch = useDispatch();
  const getmovieID = async (id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    );
    const json = await data.json();
    const trailers = json?.results?.filter((elem) => elem.type === "Trailer");
    const trailer = trailers[0];
    dispatch(addtrailer(trailer));
  };
  useEffect(() => {
    getmovieID(movieID);
  }, []);
}

export default useMainBackground;

import React from "react";
import { useSelector } from "react-redux";
import Movietrailer from "./Movietrailer";
import AllMovies from "./AllMovies";
function Browser() {
  const movielist = useSelector((state) => state.movie?.nowPlayingMovie);
  if (!movielist || movielist.length === 0) return;
  const { id, title, overview, release_date } = movielist[0];
  return (
    <div className=" bg-black w-full">
      <Movietrailer />
      <AllMovies />
    </div>
  );
}

export default Browser;

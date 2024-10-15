import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../Components/MovieList";
function GPTsuggestion() {
  
  const moviedata = useSelector((state) => state?.gptview);
  const { suggestedMovieName, suggestedMovieData } = moviedata;

  return (
    <div className="pt-[10vw] bg-black bg-opacity-70">
      <div className=" ">
        {suggestedMovieName?.map((elem, index) => (
          <MovieList
            key={suggestedMovieName}
            title={elem}
            moviedata={suggestedMovieData?.[index]?.results}
          />
        ))}
      </div>
    </div>
  );
}

export default GPTsuggestion;

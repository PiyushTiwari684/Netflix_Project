import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MovieContainer = () => {
  const movie = useSelector((store) => store.movie);
  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-10">
        <MovieList title="Popular Movie" movie={movie.popularMovie} />
        <MovieList title="Top Rated Movie" movie={movie.topRatedMovies} />
        <MovieList title="Now Playing Movie" movie={movie.nowPlayingMovies} />
        <MovieList title="Upcoming Movie" movie={movie.upComingMovies} />
      </div>
    </div>
  );
};

export default MovieContainer;

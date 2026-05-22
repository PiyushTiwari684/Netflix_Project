import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies.js";
import usePopularMovies from "../customHooks/usePopularMovies.js";
import useTopRatedMovies from "../customHooks/useTopRatedMovies.js";
import useUpcomingMovies from "../customHooks/useUpcomingMovies.js";
import SearchMovie from "./SearchMovie.jsx";

const Browse = () => {
  const navigate = useNavigate();
  const toggle = useSelector((store) => store.movie.toggle);
  const user = useSelector((store) => store.app.user);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div>
      <Header />
      <div>
        {toggle ? (
          <SearchMovie />
        ) : (
          <>
            <MainContainer />
            <MovieContainer />
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;

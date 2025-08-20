import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import {
  usenowPlayingMovies,
} from "../customHooks/useNowPlayingMovies.js";
import usePopularMovies from "../customHooks/usePopularMovies.js";
import useTopRatedMovies from "../customHooks/useTopRatedMovies.js";
import useUpcomingMovies from "../customHooks/useUpcomingmovies.js";
import SearchMovie from "./SearchMovie.jsx";



const Browse = () => {
  const navigate = useNavigate();
  const toggle = useSelector(store=>store.movie.toggle);
  const user = useSelector((store) => store.app.user);
  const dispatch = useDispatch();

  usenowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    
  },[]);
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

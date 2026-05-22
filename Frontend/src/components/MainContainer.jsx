import React from "react";
import Vediobackground from "./Vediobackground";
import Vediotiltle from "./Vediotiltle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  const featured = movies[2] || movies[0];
  const { overview = "", id, title } = featured;

  return (
    <div>
      <Vediotiltle title={title} overview={overview} />
      <Vediobackground movieId={id} />
    </div>
  );
};

export default MainContainer;

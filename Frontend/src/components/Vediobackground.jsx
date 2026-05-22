import React from "react";
import useMovieById from "../customHooks/useMovieById.js";
import { useSelector } from "react-redux";

const Vediobackground = ({ movieId, bool }) => {
  useMovieById(movieId);
  const trailer = useSelector((store) => store.movie.movieTrailer);

  if (!trailer?.key) return null;

  return (
    <div className="w-screen overflow-hidden">
      <iframe
        className={`${bool ? "w-full" : "w-screen aspect-video"}`}
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Vediobackground;

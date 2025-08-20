import React from 'react'
import useMovieById from '../customHooks/useMovieById.js';
import { useSelector } from 'react-redux';

const Vediobackground = ({movieId, bool}) => {
  const trailer = useSelector(store=>store.movie.movieTrailer);
  useMovieById(movieId);

  return (
    <div className="w-[vw] overflow-hidden ">
      <iframe
        className={`${bool ? "w-[100%]" : "w-screen aspect-video "} `}
        src={`https://www.youtube.com/embed/${trailer?.key}?si=E7yE2IG0GpcnkYUz&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Vediobackground;
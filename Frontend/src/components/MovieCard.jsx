import React from "react";
import { MovieCardUrl } from "../utils/constants";
import { useDispatch } from "react-redux";
import { getId, setOpen } from "../redux/movieSlice";

const MovieCard = ({ posterPath, movieId }) => {
  const dispatch = useDispatch();

  if (!posterPath) return null;

  const handleOpen = () => {
    dispatch(getId(movieId));
    dispatch(setOpen(true));
  };

  return (
    <div className="w-48 pr-2 shrink-0" onClick={handleOpen}>
      <img
        src={`${MovieCardUrl}${posterPath}`}
        alt="movie-card"
        loading="lazy"
      />
    </div>
  );
};

export default MovieCard;

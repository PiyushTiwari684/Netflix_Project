import axios from "axios";
import React, { useState } from "react";
import { Search_Movie_Url } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMovieDetails } from "../redux/searchMovieSlice";
import { setLoading } from "../redux/userSlice";
import MovieList from "./MovieList";

const SearchMovie = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);
  const { movieName, searchedMovie } = useSelector((store) => store.search);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!searchMovie.trim()) return;
    dispatch(setLoading(true));
    try {
      const res = await axios.get(
        `${Search_Movie_Url}${encodeURIComponent(
          searchMovie
        )}&include_adult=false&language=en-US&page=1`
      );
      const movies = res?.data?.results ?? [];
      dispatch(setSearchMovieDetails({ searchMovie, movies }));
    } catch (error) {
      console.error("Error while searching the movies:", error);
    } finally {
      dispatch(setLoading(false));
      setSearchMovie("");
    }
  };

  return (
    <>
      <div className="flex justify-center pt-[10%] w-full">
        <form onSubmit={handleOnSubmit} className="w-1/2">
          <div className="flex justify-between shadow-md border-2 border-gray-200 rounded-lg w-full">
            <input
              value={searchMovie}
              onChange={(e) => setSearchMovie(e.target.value)}
              className="w-full outline-none rounded-md text-lg p-2"
              type="text"
              placeholder="Search Movie"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-red-600 text-white rounded-md m-2 p-2 cursor-pointer disabled:opacity-60"
            >
              {isLoading ? "Loading..." : "Search"}
            </button>
          </div>
        </form>
      </div>

      <MovieList title={movieName} movieSearch={true} movie={searchedMovie} />
    </>
  );
};

export default SearchMovie;

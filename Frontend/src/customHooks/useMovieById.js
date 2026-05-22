import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Movie_Videos_Url } from "../utils/constants.js";
import { getMovieTrailer } from "../redux/movieSlice.js";

const useMovieById = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieVideoById = async () => {
      try {
        const res = await axios.get(Movie_Videos_Url(movieId));
        const trailers = res.data.results.filter((item) => item.type === "Trailer");
        const trailer = trailers.length > 0 ? trailers[0] : res.data.results[0];
        if (trailer) dispatch(getMovieTrailer(trailer));
      } catch (error) {
        console.error("Error fetching movie video:", error);
      }
    };
    fetchMovieVideoById();
  }, [movieId, dispatch]);
};

export default useMovieById;

import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Movie_Videos_Url } from "../utils/constants";
import { setDialogTrailer } from "../redux/movieSlice";

const useMovieTrailerForDialog = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;
    const fetchTrailer = async () => {
      try {
        const res = await axios.get(Movie_Videos_Url(movieId));
        const trailer =
          res.data.results.find((v) => v.type === "Trailer") ||
          res.data.results[0];
        if (trailer) dispatch(setDialogTrailer(trailer));
      } catch (err) {
        console.error("Error fetching dialog trailer:", err);
      }
    };
    fetchTrailer();
  }, [movieId, dispatch]);
};

export default useMovieTrailerForDialog;

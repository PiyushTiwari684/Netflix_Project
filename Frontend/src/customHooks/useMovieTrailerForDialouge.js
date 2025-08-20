import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { API_KEY } from "../utils/constants";
import { setDialogTrailer } from "../redux/movieSlice";

const useMovieTrailerForDialog = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
        );
        const trailer = res.data.results.find((v) => v.type === "Trailer");
        dispatch(setDialogTrailer(trailer || res.data.results[0]));
      } catch (err) {
        console.error("Error fetching dialog trailer:", err);
      }
    };

    if (movieId) fetchTrailer();
  }, [movieId, dispatch]);
};

export default useMovieTrailerForDialog;

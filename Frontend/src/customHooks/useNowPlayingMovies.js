import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Now_Playing_Movies_API } from "../utils/constants";
import { getNowPlayingMovies } from "../redux/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNowPlayingMovies = async () => {
      try {
        const res = await axios.get(Now_Playing_Movies_API);
        dispatch(getNowPlayingMovies(res.data.results));
      } catch (error) {
        console.error("Error fetching Now Playing movies:", error);
      }
    };
    fetchNowPlayingMovies();
  }, [dispatch]);
};

export default useNowPlayingMovies;

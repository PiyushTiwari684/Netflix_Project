import React, { useEffect } from "react";
import { Top_Rated_Movie } from "../utils/constants";
import { useDispatch } from "react-redux";
import { getTopRatedMovie } from "../redux/movieSlice";
import axios from "axios";

const useTopRatedMovies = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const res = await axios.get(Top_Rated_Movie);
        dispatch(getTopRatedMovie(res.data.results));
      } catch (error) {
        console.log("Failed to Fetch Top Rated Movies",error);
      }
    };

    fetchTopRatedMovies();
  },[dispatch]);
};

export default useTopRatedMovies;

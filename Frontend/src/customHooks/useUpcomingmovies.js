import React, { useEffect } from "react";
import { Upcoming_Movie } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { getUpcomingMovie } from "../redux/movieSlice";
import axios from "axios";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
     const fetchUpComingMovies = async()=>{
      try {
        const res = await axios.get(Upcoming_Movie);
        dispatch(getUpcomingMovie(res.data.results));
      } catch (error) {
        console.log("Error while feetching upcoming movies",error)
      }
     };
     fetchUpComingMovies();
  },[dispatch]);

};

export default useUpcomingMovies;

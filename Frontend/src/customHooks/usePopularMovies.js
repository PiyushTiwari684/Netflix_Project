import React, { useEffect } from 'react'
import { Popular_Movies} from '../utils/constants';
import { useDispatch } from 'react-redux';
import { getPopularMovie  } from '../redux/movieSlice';
import axios from 'axios';

const usePopularMovies = () => {
  const dispatch  =  useDispatch();
  
  useEffect(()=>{
    const fetchPopularMovies = async()=>{
      try {
        const res=  await axios.get(Popular_Movies);
        dispatch(getPopularMovie(res.data.results));
      } catch (error) {
        console.log("Error in fetching popular movies",error);
      }
    };
    fetchPopularMovies();
  },[dispatch])
}

export default usePopularMovies
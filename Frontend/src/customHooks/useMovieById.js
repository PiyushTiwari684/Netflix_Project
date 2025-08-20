import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { options } from '../utils/constants';
import {getMovieTrailer} from '../redux/movieSlice.js'
import { API_KEY } from '../utils/constants.js';

const useMovieById = (movieId) => {
  const dispatch = useDispatch();

  useEffect(()=>{
    const fetchMovieVedioById = async()=>{
        try {
           const res = await axios.get(
             `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
           ); 
          //  console.log(res.data.results);
          const trailer = res.data.results.filter((item)=>{
            return item.type ===  "Trailer";
          });
          dispatch(getMovieTrailer(trailer.length > 0 ? trailer[0] : res.data.results[0]));
        } catch (error) {
            console.log("Error while fetching movie vedios", error );
        }
    };
    fetchMovieVedioById();
  },[movieId,dispatch]);
}

export default useMovieById;
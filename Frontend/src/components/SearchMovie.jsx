import axios from 'axios';
import React, {useState} from 'react'
import {Search_Movie_Url} from '../utils/constants';
import {useDispatch, useSelector} from 'react-redux';
import { setSearchMovieDetails } from '../redux/searchMovieSlice';
import { setLoading } from '../redux/userSlice';
import MovieList from './MovieList';
import Vediobackground from './Vediobackground';
import MovieDialouge from './MovieDialouge';

const SearchMovie = () => {
  const [searchMovie,setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector(store=>store.app.isLoading);
  const {movieName, searchedMovie} = useSelector(store=>store.search);
  // console.log(searchedMovie);
   
  const open = useSelector((store) => store.movie.open); // ✅ added
  const selectedMovieId = useSelector((store) => store.movie.movieId);

  const handleOnSubmit = async(e)=>{
    e.preventDefault();
    dispatch(setLoading(true))
    try {
      const res = await axios.get(
        // `${Search_Movie_Url}${searchMovie}&include_adult=false&language=en-US&page=1`,
        // options

        `${Search_Movie_Url}${searchMovie}&include_adult=false&language=en-US&page=1`
      );
      // console.log(res.data.results);
      const movies = res?.data?.results;
      dispatch(setSearchMovieDetails({ searchMovie, movies }));
    } catch (error) {
      console.log("Error while searching the movies ", error);
    }finally{
      dispatch(setLoading(false));
    }

    setSearchMovie("");

  }
  return (
    <>
      <div className="flex justify-center pt-[10%] w-[100%]">
        <form onSubmit={handleOnSubmit} className="w-[50%]">
          <div className="flex justify-between shadow-md border-2 border-gray-200 rounded-lg w-[100%]">
            <input
              value={searchMovie}
              onChange={(e) => {
                setSearchMovie(e.target.value);
              }}
              className="w-[full] outline-none rounded-md text-lg p-2"
              type="text"
              placeholder="Search Movie"
            />
            <button className="bg-red-600 text-white rounded-md m-2 p-2 cursor-pointer">
              {isLoading ? "Loading...." : "Search"}
            </button>
          </div>
        </form>
      </div>

      <MovieList title={movieName} movieSearch={true} movie={searchedMovie} />

      {/* {open && selectedMovieId && (
        <div className="fixed top-0 left-0 w-full h-full bg-black z-50">
          <Vediobackground movieId={selectedMovieId} bool={true} />
        </div>
      )} */}

      <MovieDialouge/>
    </>
  );
}

export default SearchMovie;
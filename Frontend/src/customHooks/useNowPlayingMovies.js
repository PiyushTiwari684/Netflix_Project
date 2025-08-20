import axios from "axios";
import { getNowPlayingMovies} from "../redux/movieSlice";
import { useDispatch } from "react-redux";
import { Now_Playing_Movies_API } from "../utils/constants";
import { useEffect } from "react";
import { API_KEY } from "../utils/constants";


export const usenowPlayingMovies =() => {
    const dispatch  = useDispatch();
    
    useEffect(()=>{
      const fetchNowPlayingMovies = async()=>{
        try {
          const res = await axios.get(Now_Playing_Movies_API);
          console.log(res.data.results);
          dispatch(getNowPlayingMovies(res.data.results));
        } catch (error) {
          console.log("Error while fetching Nowplaying movies",error);
        }
      };
      fetchNowPlayingMovies();
    },[dispatch])
};
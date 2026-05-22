const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const API_END_POINT =
  import.meta.env.VITE_API_END_POINT || "http://localhost:8000/user/v1";

export const Now_Playing_Movies_API = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
export const Popular_Movies = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
export const Top_Rated_Movie = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
export const Upcoming_Movie = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;
export const MovieCardUrl = "https://image.tmdb.org/t/p/w500";
export const Search_Movie_Url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
export const Movie_Videos_Url = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`;

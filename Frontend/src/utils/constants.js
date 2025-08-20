export const API_END_POINT = "http://localhost:8000/user/v1";

// export const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDE0YTNiNjQ1OTQzYzU1NzYzNTczZDI2NTQ2YTZmZiIsIm5iZiI6MTc1MDAxNTkzNS41ODMwMDAyLCJzdWIiOiI2ODRmMWZiZjA0NGNhNTU2NGUxYmY1MGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tdzaBrcUVsyx2xTTcvkWl_5cmDQI39RFfco__4yXHxU",
//   },
// };
export const API_KEY = "a014a3b645943c55763573d26546a6ff";

export const Now_Playing_Movies_API = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
export const Popular_Movies = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
export const Top_Rated_Movie = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
export const Upcoming_Movie = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;
export const MovieCardUrl = "https://image.tmdb.org/t/p/w500";
// export const Search_Movie_Url = "https://api.themoviedb.org/3/search/movie?query=";
export const Search_Movie_Url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

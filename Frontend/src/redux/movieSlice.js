// import { createSlice } from "@reduxjs/toolkit";


// const movieSlice = createSlice({
//     name:"movie",
//     initialState:{
//         nowPlayingMovies:null,
//         popularMovie: null,
//         topRatedMovies:null,
//         upComingMovies : null,
//         toggleMovie: false,
//         movieTrailer: null,
//         open:false,
//         id: ""
//     },
//     reducers:{
//         getNowPlayingMovies:(state,action)=>{
//             state.nowPlayingMovies =  action.payload;
//         },
//         getPopularMovie:(state,action)=>{
//             state.popularMovie =  action.payload;
//         },
//         getTopRatedMovie:(state,action)=>{
//             state.topRatedMovies =  action.payload;
//         },
//         getUpcomingMovie:(state,action)=>{
//             state.upComingMovies =  action.payload;
//         },
//         setToggle:(state)=>{
//             state.toggle = !state.toggle;
//         },
//         getMovieTrailer:(state,action)=>{
//             state.movieTrailer = action.payload;
//         },
//         setOpen:(state,action)=>{
//             state.open = action.payload;
//         },
//         getId:(state,action)=>{
//             state.id = action.payload;
//         }
        
//     }
// });

// export const {getNowPlayingMovies,getPopularMovie,getTopRatedMovie,getUpcomingMovie, setToggle,getMovieTrailer,setOpen,getId} = movieSlice.actions;
// export default movieSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    popularMovie: null,
    topRatedMovies: null,
    upComingMovies: null,
    toggle: false,
    movieTrailer: null,
    dialougeTrailer: null,
    open: false,
    movieId: "", // renamed from id to movieId
  },
  reducers: {
    getNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    getPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    getTopRatedMovie: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    getUpcomingMovie: (state, action) => {
      state.upComingMovies = action.payload;
    },
    setToggle: (state) => {
      state.toggle = !state.toggle;
    },
    getMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    getId: (state, action) => {
      state.movieId = action.payload;
    },
    setDialogTrailer: (state, action) => {
      state.dialougeTrailer = action.payload;
    },
  },
});

export const {
  getNowPlayingMovies,
  getPopularMovie,
  getTopRatedMovie,
  getUpcomingMovie,
  setToggle,
  getMovieTrailer,
  setOpen,
  getId,
  setDialogTrailer
} = movieSlice.actions;

export default movieSlice.reducer;

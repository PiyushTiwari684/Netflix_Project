import {configureStore} from "@reduxjs/toolkit";
import userSlice from  "./userSlice.js";
import movieReducer from "./movieSlice.js";
import searchMovieSlice from "./searchMovieSlice.js";


const store  = configureStore({
    reducer:{
        app : userSlice,
        movie:movieReducer,
        search:searchMovieSlice
    }
});

export default store;

import React from 'react'
import Vediobackground from './Vediobackground'
import Vediotiltle from './Vediotiltle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const movie = useSelector((store) => store.movie?.nowPlayingMovies);
  
  if(!movie) return;
  // console.log(movie);

  const {overview,id,title} = movie[2];
  return (
    <div>
        <Vediotiltle title={title} overview={overview}/>
        <Vediobackground movieId = {id}/>
    </div>
  )
}

export default MainContainer
import React from 'react'
import Body from './components/Body'
import {Toaster} from "react-hot-toast"
import MovieDialouge from './components/MovieDialouge'

const App = () => {
  return (
    <div>
      <Body/>
      <Toaster/>
      <MovieDialouge/>
    </div>
  )
}

export default App
import { Global } from "@emotion/react"
import { Box } from "@mui/system"
import { useContext } from "react"
import back from '../assets/background.png'
import movieBack from '../assets/john wick bg.png'
import {GlobalContext} from '../globalStates/State'
import { useState, useEffect } from "react"
import black from '../assets/blackF2.png'

 const BackgroundImage = (props)=> {
  const context = useContext(GlobalContext)

  const movies = props.movieData
  console.log(movies)
    const moviePath = movies.map((movie)=>{
      const {id, backdrop_path} = movie
      return ({id, backdrop_path})
    })
    
    let neededMovie = moviePath.find((movie)=> movie.id === props.path )
    console.log(neededMovie)
    return(
      <>
        <Box component= "img"
        sx={{
            width: '100%',
            height: '100vh',
          position: 'absolute',
          zIndex: -1,
          objectFit: 'cover',
        }}
          src = {black}
        />
        <Box component= "img"
        sx={{
            width: '100%',
            height: '100vh',
          position: 'absolute',
          zIndex: -2,
          objectFit: 'cover',
        }}
        src={props.path ? `https://image.tmdb.org/t/p/original${neededMovie.backdrop_path}` : back}
        />
      </>
    )
 }

 export default BackgroundImage
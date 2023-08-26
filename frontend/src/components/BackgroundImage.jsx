import { Box } from "@mui/system"
import { useContext } from "react"
import back from '../assets/background.png'
import black from '../assets/blackF4.png'
import { MovieContext } from "../globalContext/context/MovieContext"

 const BackgroundImage = ()=> {
  const {movieObject} = useContext(MovieContext)

  const movieData = JSON.parse(localStorage.getItem('movieData'))
  console.log(movieData)
  const movies = movieData.results
  console.log(movies)
    const moviePath = movies.map((movie)=>{
      const {id, backdrop_path} = movie
      return ({id, backdrop_path})
    })
    
    let neededMovie = moviePath.find((movie)=> movie.id === movieObject.hover )
    console.log(neededMovie)
    return(
      <>
        {movieObject.hover && <Box component= "img"
        sx={{
            width: '100%',
            height: '100vh',
          position: 'absolute',
          zIndex: -1,
          objectFit: 'cover',
        }}
          src = {black}
        />}
        <Box component= "img"
        sx={{
            width: '100%',
            height: '100vh',
          position: 'absolute',
          zIndex: -2,
          objectFit: 'cover',
        }}
        src={movieObject.hover ? `https://image.tmdb.org/t/p/w1280${neededMovie.backdrop_path}` : back}
        />
      </>
    )
 }

 export default BackgroundImage
import { Global } from "@emotion/react"
import { Box } from "@mui/system"
import { useContext } from "react"
import back from '../assets/background.png'
import movieBack from '../assets/john wick bg.png'
import {GlobalContext} from '../globalStates/State'
import { useState, useEffect } from "react"

 const BackgroundImage = ()=> {
  const context = useContext(GlobalContext)

  const [movies, setMovies] = useState([]);
  const [path, setPath] = useState('')
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=09801cd0f41d3548096eac7d4a25b6a1&language=en-US&page=1";
    useEffect(() => {
        fetchMovies();
    },[]);
    const fetchMovies = async () => {
        const data = await fetch(url);
        const movies = await data.json();
        console.log(movies);
        setMovies(movies.results);
    };
    
    console.log(path)
    const moviePath = movies.map((movie)=>{
      const {id, backdrop_path} = movie
      return ({id, backdrop_path})
    })
    
    let neededMovie = moviePath.find((movie)=> movie.id === path )
    console.log(neededMovie)
    return(
        <Box component= "img"
        sx={{
            width: '100%',
            height: '100vh',
          position: 'absolute',
          zIndex: -1,
          objectFit: 'cover'
        }}
        src={true ? back : movieBack}
        />
    )
 }

 export default BackgroundImage
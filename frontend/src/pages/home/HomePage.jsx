import { Typography } from "@mui/material"
import { Box, Container} from "@mui/system"
import React, { useEffect, useState } from "react"
import Button from "../../components/C_button"
import Tiles from "../../components/Tiles"

const HomePage = (props) => {
    const [movies, setMovies] = useState([]);
    
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

    const moviePath = movies.map((movie)=>{
        const {id, original_title} = movie
        return ({id, original_title})
      })

    let neededMovie = moviePath.find((movie)=> movie.id === props.state )
    return(

        <Container sx={{
            display: 'flex',
            minWidth: '100vw',
            height: '85vh',
            alignItems: 'center',
            flexDirection:'column',
            justifyContent: 'space-between'
        }}>
        {props.state ? <Box  sx={{
            paddingTop: 18,
            marginLeft: 13,
            marginRight: 'auto',
        }} id='hover-action'>
                <Typography variant="h3" sx={{
                    color: 'white',
                    fontWeight: 600,
                    letterSpacing: 2
                }}>{neededMovie.original_title}</Typography>
                <Button size ={20} value="Read More" path='/movieid'/>  
                <Button size ={20} value="Nominate"/>
            </Box> : 
            <Box sx={{
                paddingTop: 32,
                color: 'white',
                textAlign: 'center'
            }}>
                <Typography variant="h3" sx={{
                    letterSpacing: 2,
                    fontWeight: 900
                }}>WELCOME TO SALTEDPOPCORN.</Typography>
                <Typography variant="h7" sx={{
                    letterSpacing: 2,
                    fontWeight: 300
                }}>Where you get salty about movies. (And rate them to win Movie Contests. ;))</Typography>
            </Box>}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Typography sx={{
                    color: 'white',
                    paddingBottom: 1,
                    paddingLeft: 12,
                    fontSize: 20,
                    fontWeight: 600,
                    letterSpacing: 2
                }}>TOP PICKS:</Typography>
                <Tiles key={0} moviesArray = {movies} changeState={props.stateChange}/>
            </Box>
        </Container>
    )
}

export default HomePage
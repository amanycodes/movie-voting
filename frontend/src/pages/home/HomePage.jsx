import { Typography } from "@mui/material"
import { Box, Container} from "@mui/system"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Button from "../../components/C_button"
import Tiles from "../../components/Tiles"

const HomePage = (props) => {
    const movies = props.movieData
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
                    letterSpacing: 2,
                    textTransform: 'uppercase',
                    paddingRight: 80 
                }}>{neededMovie.original_title}</Typography>
                <Link to='/movieid' style={{
                    textDecoration: 'none'
                }}>
                    <Button size ={20} value="Read More" path='/movieid'/>  
                </Link>    
                <Button size ={20} value="Nominate"/>
            </Box> : 
            <Box sx={{
                paddingTop: 47,
                color: 'white',
                textAlign: 'center'
            }}>
                <Typography variant="h3" sx={{
                    fontWeight: 700,
                    fontFamily: 'League Spartan',
                    fontSize: '2.3rem',
                    letterSpacing: '0.07rem',
                    wordSpacing: 2
                }}>WELCOME TO SALTEDPOPCORN.</Typography>
                <Typography variant="h7" sx={{
                    fontWeight: 400,
                    fontFamily: 'League Spartan',
                    fontSize: '1rem'
                }}>Where you get salty about movies.</Typography>
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
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                    fontFamily: 'League Spartan',
                    fontSize: '1.45rem',
                    textTransform: 'uppercase'
                }}>top picks</Typography>
                <Tiles key={0} moviesArray = {movies} changeState={props.stateChange}/>
            </Box>
        </Container>
    )
}

export default HomePage
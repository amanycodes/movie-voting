import { Container, Grid } from "@mui/material"
import TileItem from "./TileItem"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, margin } from "@mui/system";
import { useState, useEffect } from "react";




const Tiles = (props) => {
    const moviesData = props.moviesArray

    const slideLeft = ()=>{
        var slider = document.getElementsByClassName('slider')
        slider.scrollLeft = slider.scrollLeft - 240
    }

    const slideRight = ()=>{
        var slider = document.getElementsByClassName('slider')
        slider.scrollLeft = slider.scrollLeft + 240
    }
    return(
        
    <Container sx={{
        display: 'flex',
        alignItems: 'center',
        minWidth: '95vw'
    }}>
    <ArrowBackIosNewIcon onClick={slideLeft} sx={{
                    padding: 2,
                    borderRadius: 10,
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    color: 'white', 
                    fontSize: 30,
                    '&:hover':{
                        color: 'white',
                        backgroundColor: 'rgba(128,0,128,.3)',
                        transition: '200ms'
                    }
                }} />
    <Box className="slider" sx={{
        height: '100%',
        overflowX: 'scroll',
        whiteSpace: 'nowrap',
        scrollBehavior: 'smooth',
    }}>
        {moviesData.map((movie)=>{
            return(
                <TileItem key = {movie.id} img = {movie.poster_path} path={movie.id} changeId = {props.changeState}/>
            )
        })}
    </Box>
        <ArrowForwardIosIcon onClick={slideRight} sx={{
                        padding: 2,
                        borderRadius: 10,
                    marginTop: 'auto',
                    marginBottom: 'auto',
                        color: 'white', 

                        fontSize: 30,
                        '&:hover':{
                            color: 'white',
                            backgroundColor: 'rgba(128,0,128,.3)',
                            transition: '200ms'
                        }
                    }}/>
    </Container>
    )
}

export default Tiles

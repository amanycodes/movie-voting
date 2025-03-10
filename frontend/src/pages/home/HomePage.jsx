import { Typography, CircularProgress } from "@mui/material"
import { Box, Container} from "@mui/system"
import React, { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Button from "../../components/C_button"
import Tiles from "../../components/Tiles"
import Popup from '../../components/Popup'
import { MovieContext } from "../../globalContext/context/MovieContext"

const HomePage = (props) => {
    const { movieObject } = useContext(MovieContext);
    const [movies, setMovies] = useState([]);
    const [hoveredMovie, setHoveredMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const nominateMessage = 'you need to be logged in to nominate a movie';
    const [displayPopup, setDisplayPopup] = useState(false);

    useEffect(() => {
        try {
            const movieData = JSON.parse(localStorage.getItem('movieData'));
            if (movieData && Array.isArray(movieData.results)) {
                setMovies(movieData.results);
            } else {
                console.error('Invalid movie data format in localStorage');
                setMovies([]);
            }
        } catch (error) {
            console.error('Error parsing movie data:', error);
            setMovies([]);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        const fetchHoveredMovie = async () => {
            if (!movieObject.hover) {
                setHoveredMovie(null);
                return;
            }

            // First try to find the movie in the current results
            const foundMovie = movies.find(movie => movie.id === movieObject.hover);
            if (foundMovie) {
                setHoveredMovie(foundMovie);
                return;
            }

            // If not found, fetch it from the API
            try {
                const mediaType = movieObject.showType || 'movie';
                const response = await fetch(
                    `https://api.themoviedb.org/3/${mediaType}/${movieObject.hover}?api_key=09801cd0f41d3548096eac7d4a25b6a1&language=en-US`
                );
                
                if (!response.ok) {
                    throw new Error('Failed to fetch movie details');
                }
                
                const data = await response.json();
                setHoveredMovie(data);
            } catch (error) {
                console.error('Error fetching hovered movie:', error);
                setHoveredMovie(null);
            }
        };

        fetchHoveredMovie();
    }, [movieObject.hover, movieObject.showType, movies]);

    const handleNominateClick = () => {
        setDisplayPopup(true);
    };

    const getMovieTitle = () => {
        if (!hoveredMovie) return '';
        
        return movieObject.showType === 'movie' || hoveredMovie.media_type === 'movie'
            ? (hoveredMovie.original_title || hoveredMovie.title || 'Unknown Title')
            : (hoveredMovie.name || 'Unknown Title');
    };

    if (isLoading) {
        return (
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <CircularProgress sx={{ color: 'purple' }} />
            </Container>
        );
    }

    return (
        <Container sx={{
            display: 'flex',
            minWidth: '100vw',
            height: '85vh',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            {movieObject.hover && hoveredMovie ? (
                <Box sx={{
                    paddingTop: '20vh',
                    marginLeft: 13,
                    marginRight: 'auto',
                }} id='hover-action'>
                    <Typography variant="h3" sx={{
                        color: 'white',
                        fontWeight: 600,
                        letterSpacing: 2,
                        paddingRight: 90 
                    }}>
                        {getMovieTitle()}
                    </Typography>
                    <Link to='/movieid' style={{
                        textDecoration: 'none'
                    }}>
                        <Button size={20} value="Read More" path='/movieid'/>  
                    </Link>    
                    <Button size={20} value="Nominate" onClick={handleNominateClick}/>
                    <Popup message={nominateMessage} open={displayPopup} openState={setDisplayPopup}/> 
                </Box>
            ) : (
                <Box sx={{
                    paddingTop: '40vh',
                    color: 'white',
                    textAlign: 'center'
                }}>
                    <Typography variant="h3" sx={{
                        fontWeight: 700,
                        fontFamily: 'League Spartan',
                        fontSize: '2.3rem',
                        letterSpacing: '0.07rem',
                        wordSpacing: 2
                    }}>
                        WELCOME TO SALTEDPOPCORN.
                    </Typography>
                    <Typography variant="h7" sx={{
                        fontWeight: 400,
                        fontFamily: 'League Spartan',
                        fontSize: '1rem'
                    }}>
                        Where you get salty about movies.
                    </Typography>
                </Box>
            )}
            
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
                }}>
                    {props.genre}
                </Typography>
                {movies.length > 0 ? (
                    <Tiles 
                        key={0} 
                        moviesArray={movies} 
                        setPageInfo={() => {
                            // Handle pagination if needed
                            if (typeof props.setPageInfo === 'function') {
                                props.setPageInfo();
                            }
                        }}
                    />
                ) : (
                    <Box sx={{ textAlign: 'center', color: 'white', py: 4 }}>
                        <Typography>No movies found</Typography>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default HomePage;
import { Grid, Link, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import { useContext, useEffect, useState } from "react"
import Button from "../../components/C_button"
import Popup from '../../components/Popup'
import Cast from "../../components/Cast"
import { MovieContext } from "../../globalContext/context/MovieContext"
import Loader from "../../components/Loader"


function MovieInfo(){
    const movies = JSON.parse(localStorage.getItem('movieData'))
    const moviesInfo = movies.results
    const {movieObject, dispatch} = useContext(MovieContext)
    const neededMovie = moviesInfo.find((movie)=> movie.id === JSON.parse(localStorage.getItem('id')))
    const Vurl = `http://api.themoviedb.org/3/${movieObject.showType}/${movieObject.hover}/videos?api_key=09801cd0f41d3548096eac7d4a25b6a1`
    
    const [loading, setLoading] = useState(true)
    const [trailer, setTrailer] = useState()
    const [castName, setCastName] = useState(null)
    
    useEffect(() => {
        fetchTrailer();
        fetchCast();    
    },[]);
    
    let title = movieObject.showType === "movie" ? neededMovie.original_title : neededMovie.name
    const fetchTrailer = async () => {
        const data = await fetch(Vurl);
        const videos = await data.json();
        const trailerVid = videos.results.find(item => item.name.includes('Trailer'))
        setTrailer(trailerVid.key)
        console.log(trailer)
    };
    
    const Curl = `https://api.themoviedb.org/3/movie/${movieObject.hover}/credits?api_key=09801cd0f41d3548096eac7d4a25b6a1`
    const fetchCast = async () => {
        const data = await fetch(Curl);
        const castData = await data.json();
        setCastName(castData.cast)
        console.log(castName);
        setLoading(false)
    };

    const [displayPopup, setDisplayPopup] = useState(false)
    function handleNominateClick(){
        setDisplayPopup(true)
        console.log(displayPopup)
    }
    const nominateMessage = 'you need to be logged in to nominate a movie'
    return(
        <Container 
        sx={{
            marginTop: '2rem',
            marginLeft: '100px',
            width: '50vw',
            display: 'flex',
            flexDirection: 'column'

        }}>
            <Box
            sx={{
                display: 'flex'
            }}>
                <Box 
                component="img"
                src={`https://image.tmdb.org/t/p/w500${neededMovie.poster_path}`}
                sx={{
                    width: '200px',
                    height: '100%',
                    borderRadius: '10px'
                }}>
            
                </Box>
                <Box
                sx={{
                    marginLeft: '4rem'
                }}>
                    <Typography variant="h3" sx={{
                        color: 'white',
                        marginBottom: 4,
                        fontSize: '2.6rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        fontFamily: 'League Spartan'
                    }}>{title}</Typography>
                    <Typography variant="h7" sx={{
                        color: 'white',
                        fontSize: '1.26rem',
                        fontWeight: 300,
                        fontFamily: 'League Spartan'
                    }}>{neededMovie.overview}</Typography>
                    <Box sx={{
                        display: 'flex',
                        marginRight: 'auto',
                        marginTop: 3
                    }}>
                        <Link sx={{
                            textDecoration: 'none'
                        }}
                            target= '_blank'
                            href={`https://www.youtube.com/watch?v=${trailer}`}> 
                            <Button value="TRAILER" size={19}/>
                        </Link>     
                        <Button value="NOMINATE" size={19} onClick={handleNominateClick}/>
                    </Box>
                </Box>
            </Box>   
            <Popup message={nominateMessage} open={displayPopup} openState={setDisplayPopup}/> 
            <Box sx={{
                marginTop: '50px'
            }}>
                <Box>
                    <Typography sx={{
                        color: 'white',
                        fontSize: '1.3rem',
                        paddingBottom: 3,
                        fontFamily: 'League Spartan'
                    }} variant="h2">CAST</Typography>
                    {loading ? <Loader/> : <Cast castArray = {castName}/>}
                </Box>
                <Box sx={{
                }}>
                    <Typography sx={{
                        color: 'white',
                        fontSize: '1.3rem',
                        paddingBottom: 3,
                        marginTop: 4,
                        fontFamily: "League Spartan"
                    }} variant="h2">VOTES</Typography>
                    <Grid container spacing={4}>
                        <Grid item
                        xs={6}>
                            <Typography sx={{
                                color: 'white',
                                fontSize: '1rem',
                                fontFamily: "League Spartan"
                            }} variant="h6">Vote Count : {neededMovie.vote_count}</Typography>
                        </Grid>
                        <Grid item
                        xs={6}>
                            <Typography sx={{
                                color: 'white',
                                fontSize: '1rem',
                                fontFamily: "League Spartan"
                            }} variant="h6">Vote Average : {neededMovie.vote_average}</Typography>
                        </Grid>
                    </Grid>    
                </Box>
            </Box>    
        </Container>
    )
}
export default MovieInfo
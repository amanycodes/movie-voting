import { Grid, Link, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import { useEffect, useState } from "react"
import tileImg from '../../assets/poster.jpg'
import Button from "../../components/C_button"
import "../../fonts/LeagueSpartan.ttf"

function MovieInfo(props){
    const movies = props.movieData
    const neededMovie = movies.find((movie)=> movie.id === props.state)
    console.log(neededMovie)
    const Vurl = `http://api.themoviedb.org/3/movie/${props.state}/videos?api_key=09801cd0f41d3548096eac7d4a25b6a1`
    
    const [trailer, setTrailer] = useState()
    const [castName, setCastName] = useState()
    let a = []

    useEffect(() => {
        fetchTrailer();
        fetchCast().then(() => {
            return(
                a = castName[0]
            )
        })
    },[]);

    const fetchTrailer = async () => {
        const data = await fetch(Vurl);
        const videos = await data.json();
        setTrailer(videos.results[0].key)
    };

    const Curl = `https://api.themoviedb.org/3/movie/${props.state}/credits?api_key=09801cd0f41d3548096eac7d4a25b6a1&language=en-US`
    
    

    const fetchCast = async () => {
        const data = await fetch(Curl);
        const castData = await data.json();
        console.log(castData);
        setCastName(castData.cast)
        a=castName
    };
    
    console.log(a)

    // const castArray = castName.map((obj)=>{
    //     return (
    //         obj.name
    //     )
    // })
    return(
        <Container 
        sx={{
            marginTop: '2rem',
            marginLeft: '100px',
            width: '45vw',
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
                    }}>{neededMovie.original_title}</Typography>
                    <Typography variant="h7" sx={{
                        color: 'white',
                        fontSize: '1.26rem',
                        fontWeight: 300,
                        fontFamily: 'League Spartan'
                    }}>{neededMovie.overview}</Typography>
                    <Box sx={{
                        display: 'flex',
                        marginRight: 'auto',
                        marginTop: 7
                    }}>
                        <Link sx={{
                            textDecoration: 'none'
                        }}
                            target= '_blank'
                            href={`https://www.youtube.com/watch?v=${trailer}`}> 
                            <Button value="TRAILER" size={19}/>
                        </Link>     
                        <Button value="NOMINATE" size={19}/>
                    </Box>
                </Box>
            </Box
            >    
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
                    <Grid container spacing={1} rowGap={0.5} 
                    wrap="wrap">
                        <Grid item xs={4}>
                            <Typography sx={{
                                color: 'white',
                                fontSize: '1rem',
                                fontFamily: "League Spartan"
                            }} variant="h6"
                            >{}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{
                                color: 'white',
                                fontSize: '1rem',
                                fontFamily: "League Spartan"
                            }} variant="h6">{}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{
                                color: 'white',
                                fontSize: '1rem',
                                fontFamily: "League Spartan"
                            }} variant="h6">{}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{
                                color: 'white',
                                fontSize: '1rem',
                                fontFamily: "League Spartan"
                            }} variant="h6">{}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{
                                color: 'white',
                                fontSize: '1rem',
                                fontFamily: "League Spartan"
                            }} variant="h6">{}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{
                                color: 'white',
                                fontSize: '1rem',
                                fontFamily: "League Spartan"
                            }} variant="h6">{}</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{
                }}>
                    <Typography sx={{
                        color: 'white',
                        fontSize: '1.3rem',
                        paddingBottom: 3,
                        marginTop: 4,
                        fontFamily: "League Spartan"
                    }} variant="h2">RATINGS</Typography>
                    <Grid container spacing={4}>
                        <Grid item
                        xs={6}>
                            <Typography sx={{
                                color: 'white',
                                fontSize: '1rem',
                                fontFamily: "League Spartan"
                            }} variant="h6">IMDB: 9.5</Typography>
                        </Grid>
                        <Grid item
                        xs={6}>
                            <Typography sx={{
                                color: 'white',
                                fontSize: '1rem',
                                fontFamily: "League Spartan"
                            }} variant="h6">Rotten Tomatoes: 4.5</Typography>
                        </Grid>
                    </Grid>    
                </Box>
            </Box>    
        </Container>
    )
}
export default MovieInfo
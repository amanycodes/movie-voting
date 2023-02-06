import { Grid, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import tileImg from '../../assets/poster.jpg'
import Button from "../../components/C_button"
import "../../fonts/LeagueSpartan.ttf"

function MovieInfo(){
    return(
        <Container 
        sx={{
            marginTop: 13,
            marginLeft: 12,
            width: '45vw'

        }}>
            <Box
            sx={{
                display: 'flex'
            }}>
                <Box 
                component="img"
                src={tileImg}
                sx={{
                    width: '12rem',
                    borderRadius: '10px'
                }}>
                </Box>
                <Box
                sx={{
                    marginLeft: 9
                }}>
                    <Typography variant="h3" sx={{
                        color: 'white',
                        marginBottom: 4,
                        fontSize: '2.6rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        fontFamily: 'League Spartan'
                    }}>JOHN WICK</Typography>
                    <Typography variant="h7" sx={{
                        color: 'white',
                        fontSize: '1.26rem',
                        fontWeight: 300,
                        fontFamily: 'League Spartan'
                    }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta at enim ullam eaque esse cupiditate. Dolorem quidem repellendus molestiae, ullam voluptatem velit consequatur obcaecati error perspiciatis, perferendis natus, excepturi suscipit!</Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: "space-around",
                        marginTop: 7
                    }}>
                        <Button value="TRAILER" size={19} />
                        <Button value="NOMINATE" size={19}/>
                    </Box>
                </Box>
            </Box
            >    
            <Box sx={{
                marginBottom: 0,
                marginTop: 9
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
                            >Jennifer Lawrence</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{
                                color: 'white',
                                fontSize: '1rem',
                                fontFamily: "League Spartan"
                            }} variant="h6">Jennifer Lawrence</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{
                                color: 'white',
                                fontSize: '1rem',
                                fontFamily: "League Spartan"
                            }} variant="h6">Jennifer Lawrence</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{
                                color: 'white',
                                fontSize: '1rem',
                                fontFamily: "League Spartan"
                            }} variant="h6">Jennifer Lawrence</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{
                                color: 'white',
                                fontSize: '1rem',
                                fontFamily: "League Spartan"
                            }} variant="h6">Jennifer Lawrence</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{
                                color: 'white',
                                fontSize: '1rem',
                                fontFamily: "League Spartan"
                            }} variant="h6">Jennifer Lawrence</Typography>
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
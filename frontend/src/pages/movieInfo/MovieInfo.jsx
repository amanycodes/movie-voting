import { Grid, Link, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../../components/C_button"
import Popup from '../../components/Popup'
import Cast from "../../components/Cast"
import { MovieContext } from "../../globalContext/context/MovieContext"
import Loader from "../../components/Loader"
import styled from 'styled-components';

const MovieInfoContainer = styled(Container)`
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const MovieDetailsWrapper = styled(Box)`
  display: flex;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`;

const PosterImage = styled(Box)`
  width: 300px;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);

  @media (max-width: 768px) {
    width: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MovieTitle = styled(Typography)`
  color: white;
  margin-bottom: 2rem;
  font-size: 2.6rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  font-family: 'League Spartan';
`;

const OverviewText = styled(Typography)`
  color: white;
  font-size: 1.26rem;
  font-weight: 300;
  font-family: 'League Spartan';
  line-height: 1.5;
`;

const ButtonContainer = styled(Box)`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const VoteCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1rem;
  max-width: 180px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    max-width: 150px;
  }
`;

function MovieInfo() {
  const { movieObject, loading } = useContext(MovieContext)
  const [movieData, setMovieData] = useState(null)
  const [trailer, setTrailer] = useState()
  const [castName, setCastName] = useState(null)
  const [localLoading, setLocalLoading] = useState(true)
  const [displayPopup, setDisplayPopup] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        // First try to get from localStorage
        const movies = JSON.parse(localStorage.getItem('movieData'))
        const movieId = JSON.parse(localStorage.getItem('id'))
        
        if (movies?.results && movieId) {
          const neededMovie = movies.results.find((movie) => movie.id === movieId)
          if (neededMovie) {
            setMovieData(neededMovie)
            fetchTrailer(neededMovie.id)
            fetchCast(neededMovie.id)
            return
          }
        }

        // If not found in localStorage, redirect to home
        navigate('/')
      } catch (error) {
        console.error("Error fetching movie data:", error)
        navigate('/')
      }
    }

    fetchMovieData()
  }, [loading, navigate])

  const fetchTrailer = async (movieId) => {
    try {
      const Vurl = `http://api.themoviedb.org/3/${movieObject.showType}/${movieId}/videos?api_key=09801cd0f41d3548096eac7d4a25b6a1`
      const data = await fetch(Vurl)
      const videos = await data.json()
      const trailerVid = videos.results.find(item => item.name.includes('Trailer'))
      if (trailerVid) {
        setTrailer(trailerVid.key)
      }
    } catch (error) {
      console.error("Error fetching trailer:", error)
    }
  }

  const fetchCast = async (movieId) => {
    try {
      const Curl = `https://api.themoviedb.org/3/${movieObject.showType}/${movieId}/credits?api_key=09801cd0f41d3548096eac7d4a25b6a1`
      const data = await fetch(Curl)
      const castData = await data.json()
      setCastName(castData.cast)
      setLocalLoading(false)
    } catch (error) {
      console.error("Error fetching cast:", error)
      setLocalLoading(false)
    }
  }

  function handleNominateClick() {
    setDisplayPopup(true)
  }

  if (!movieData || loading || localLoading) {
    return <Loader fullscreen text="Loading Movie Details" />;
  }

  const title = movieObject.showType === "movie" ? movieData.original_title : movieData.name
  const nominateMessage = 'you need to be logged in to nominate a movie'

  return (
    <MovieInfoContainer>
      <MovieDetailsWrapper>
        <PosterImage>
          <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={title} />
        </PosterImage>
        <Box sx={{ flex: 1 }}>
          <MovieTitle variant="h3">{title}</MovieTitle>
          <OverviewText>
            {movieData.overview}
          </OverviewText>
          <ButtonContainer>
            {trailer && (
              <Link sx={{
                textDecoration: 'none'
              }}
              target='_blank'
              href={`https://www.youtube.com/watch?v=${trailer}`}> 
                <Button value="TRAILER" size={19}/>
              </Link>
            )}
            <Button value="NOMINATE" size={19} onClick={handleNominateClick}/>
          </ButtonContainer>
        </Box>
      </MovieDetailsWrapper>   
      <Popup message={nominateMessage} open={displayPopup} openState={setDisplayPopup}/> 
      <Box sx={{ marginTop: '50px' }}>
        <Box>
          <Typography sx={{
            color: 'white',
            fontSize: '1.3rem',
            paddingBottom: 3,
            fontFamily: 'League Spartan'
          }} variant="h2">CAST</Typography>
          {castName ? <Cast castArray={castName}/> : <Loader text="Loading Cast" />}
        </Box>
        <Box sx={{ marginTop: '2rem' }}>
          <Typography sx={{
            color: 'white',
            fontSize: '1.3rem',
            paddingBottom: 3,
            fontFamily: "League Spartan"
          }} variant="h2">VOTES</Typography>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <VoteCard>Vote Count: {movieData.vote_count}</VoteCard>
            </Grid>
            <Grid item xs={6}>
              <VoteCard>Vote Average: {movieData.vote_average}</VoteCard>
            </Grid>
          </Grid>    
        </Box>
      </Box>    
    </MovieInfoContainer>
  )
}

export default MovieInfo
import { Box } from "@mui/system"
import { useContext, useState, useEffect } from "react"
import back from '../assets/background.png'
import black from '../assets/blackF4.png'
import { MovieContext } from "../globalContext/context/MovieContext"

const BackgroundImage = () => {
  const { movieObject } = useContext(MovieContext);
  const [backdropPath, setBackdropPath] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (movieObject.hover) {
        try {
          // Get movie data from localStorage
          const movieData = JSON.parse(localStorage.getItem('movieData'));
          
          if (!movieData || !movieData.results) {
            console.error('No movie data found in localStorage');
            return;
          }
          
          // Try to find the movie in the current results
          const movies = movieData.results;
          const foundMovie = movies.find(movie => movie.id === movieObject.hover);
          
          // If movie is found and has backdrop_path, use it
          if (foundMovie && foundMovie.backdrop_path) {
            setBackdropPath(foundMovie.backdrop_path);
            return;
          }
          
          // If not found or no backdrop_path, fetch details from API
          const mediaType = movieObject.showType || 'movie';
          const response = await fetch(
            `https://api.themoviedb.org/3/${mediaType}/${movieObject.hover}?api_key=09801cd0f41d3548096eac7d4a25b6a1&language=en-US`
          );
          
          if (!response.ok) {
            throw new Error('Failed to fetch movie details');
          }
          
          const data = await response.json();
          if (data && data.backdrop_path) {
            setBackdropPath(data.backdrop_path);
          } else {
            setBackdropPath(null);
          }
        } catch (error) {
          console.error('Error fetching movie details:', error);
          setBackdropPath(null);
        }
      } else {
        setBackdropPath(null);
      }
    };

    fetchMovieDetails();
  }, [movieObject.hover, movieObject.showType]);

  return (
    <>
      {movieObject.hover && (
        <Box 
          component="img"
          sx={{
            width: '100%',
            height: '100vh',
            position: 'absolute',
            zIndex: -1,
            objectFit: 'cover',
          }}
          src={black}
        />
      )}
      <Box 
        component="img"
        sx={{
          width: '100%',
          height: '100vh',
          position: 'absolute',
          zIndex: -2,
          objectFit: 'cover',
        }}
        src={backdropPath ? `https://image.tmdb.org/t/p/w1280${backdropPath}` : back}
      />
    </>
  );
};

export default BackgroundImage;
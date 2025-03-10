import { useContext, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import back from '../assets/background.png';
import { MovieContext } from "../globalContext/context/MovieContext";

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  overflow: hidden;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(26, 26, 26, 0.7) 0%,
    rgba(26, 26, 26, 0.9) 100%
  );
  z-index: 1;
  pointer-events: none;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity 0.5s ease-in-out;
  opacity: ${props => props.isLoaded ? 1 : 0};
`;

const BackgroundComponent = () => {
  const { movieObject } = useContext(MovieContext);
  const [currentImage, setCurrentImage] = useState(back);
  const [isLoaded, setIsLoaded] = useState(true);
  const [imageCache, setImageCache] = useState({});

  const preloadImage = useCallback((url) => {
    return new Promise((resolve, reject) => {
      if (imageCache[url]) {
        resolve(url);
        return;
      }

      const img = new Image();
      img.src = url;
      img.onload = () => {
        setImageCache(prev => ({ ...prev, [url]: true }));
        resolve(url);
      };
      img.onerror = () => reject(new Error('Failed to load image'));
    });
  }, [imageCache]);

  const fetchMovieDetails = useCallback(async () => {
    if (!movieObject.hover) {
      setCurrentImage(back);
      setIsLoaded(true);
      return;
    }

    try {
      // First try to get from localStorage
      const movieData = JSON.parse(localStorage.getItem('movieData'));
      let backdropPath = null;

      if (movieData?.results) {
        const foundMovie = movieData.results.find(movie => movie.id === movieObject.hover);
        if (foundMovie?.backdrop_path) {
          backdropPath = foundMovie.backdrop_path;
        }
      }

      // If not found in localStorage, fetch from API
      if (!backdropPath) {
        const mediaType = movieObject.showType || 'movie';
        const response = await fetch(
          `https://api.themoviedb.org/3/${mediaType}/${movieObject.hover}?api_key=09801cd0f41d3548096eac7d4a25b6a1&language=en-US`
        );

        if (!response.ok) throw new Error('Failed to fetch movie details');
        
        const data = await response.json();
        backdropPath = data.backdrop_path;
      }

      if (backdropPath) {
        setIsLoaded(false);
        const imageUrl = `https://image.tmdb.org/t/p/original${backdropPath}`;
        await preloadImage(imageUrl);
        setCurrentImage(imageUrl);
        setIsLoaded(true);
      } else {
        setCurrentImage(back);
        setIsLoaded(true);
      }
    } catch (error) {
      console.error('Error fetching/loading backdrop:', error);
      setCurrentImage(back);
      setIsLoaded(true);
    }
  }, [movieObject.hover, movieObject.showType, preloadImage]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchMovieDetails();
    }, 100); // Debounce time of 100ms

    return () => clearTimeout(debounceTimer);
  }, [fetchMovieDetails]);

  return (
    <BackgroundWrapper>
      <BackgroundImage
        src={currentImage}
        isLoaded={isLoaded}
        role="presentation"
      />
      <ImageOverlay />
    </BackgroundWrapper>
  );
};

export default BackgroundComponent;
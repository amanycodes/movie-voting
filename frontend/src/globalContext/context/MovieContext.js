import { createContext, useReducer, useEffect, useState } from "react";
import MovieReducers from "../reducers/MovieReducers";
import LinerLoader from "../../components/LinerLoader";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [movieObject, dispatch] = useReducer(MovieReducers, {
    hover: null,
    genre: "popular",
    showType: "movie",
    searchKey: "",
    page: 1,
  });

  const [loading, setLoading] = useState(true);

  // Map our genre names to TMDB API endpoints
  const getEndpoint = (genre) => {
    const endpoints = {
      'now_playing': 'now_playing',
      'popular': 'popular',
      'top_rated': 'top_rated',
      'upcoming': 'upcoming',
      'on_the_air': 'on_the_air',
      'airing_today': 'airing_today'
    };
    return endpoints[genre] || genre;
  };

  const S_url = `https://api.themoviedb.org/3/search/movie?api_key=09801cd0f41d3548096eac7d4a25b6a1&query=${movieObject.searchKey}`;
  const url = `https://api.themoviedb.org/3/${movieObject.showType}/${getEndpoint(movieObject.genre)}?api_key=09801cd0f41d3548096eac7d4a25b6a1&language=en-US&page=${movieObject.page}`;
  const F_url = movieObject.searchKey === '' ? url : S_url;

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const data = await fetch(F_url);
      const movies = await data.json();
      if (movies.results) {
        localStorage.setItem("movieData", JSON.stringify(movies));
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, [movieObject.showType, movieObject.genre, movieObject.searchKey, movieObject.page]);

  return (
    <MovieContext.Provider value={{ movieObject, dispatch, loading }}>
      {!loading ? children : <LinerLoader/>}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;

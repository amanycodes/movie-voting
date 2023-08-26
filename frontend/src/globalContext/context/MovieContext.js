import { createContext, useReducer, useEffect, useState } from "react";
import MovieReducers from "../reducers/MovieReducers";

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

  const S_url = `https://api.themoviedb.org/3/search/movie?api_key=09801cd0f41d3548096eac7d4a25b6a1&query=${movieObject.searchKey}`;
  const url = `https://api.themoviedb.org/3/${movieObject.showType}/${movieObject.genre}?api_key=09801cd0f41d3548096eac7d4a25b6a1&language=en-US&page=${movieObject.page}`;
  const F_url = movieObject.searchKey == '' ? url : S_url;
  console.log(F_url);

  const fetchMovies = async () => {
    const data = await fetch(F_url);
    const movies = await data.json();
    console.log("trredulyd = ", movies.results);
    localStorage.setItem("movieData", JSON.stringify(movies));
    setLoading(false)
  };

  useEffect(() => {
    fetchMovies();
  }, [movieObject.showType, movieObject.genre, F_url]);

  return (
    <MovieContext.Provider value={{ movieObject, dispatch }}>
      {!loading ? children : <>Loading...</>}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;

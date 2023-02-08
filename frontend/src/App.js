import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { useContext, useEffect, useState} from "react";

//PAGES
import LoginPage        from "./pages/login/LoginPage"
import HomePage         from "./pages/home/HomePage"
import LeaderBoard      from "./pages/leaderboard/Leaderboard"
import AdminLogin       from "./pages/adminLogin/AdminLogin"
import CreateContest    from "./pages/createContest/CreateContest"
import CreatorLoginPage from "./pages/creatorLogin/CreatorLogin"
import Navbar           from "./pages/navbar/Navbar"     
import BackgroundImage from "./components/BackgroundImage";
import MovieInfo from "./pages/movieInfo/MovieInfo";
import { ThemeContext } from "@emotion/react";
import { globalState, GlobalContext} from "./globalStates/State";

function App() {
  const [movies, setMovies] = useState([]);
    
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=09801cd0f41d3548096eac7d4a25b6a1&language=en-US&page=1";
    const Vurl = "http://api.themoviedb.org/3/movie/157336/videos?api_key=09801cd0f41d3548096eac7d4a25b6a1"
    const Curl = "https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=09801cd0f41d3548096eac7d4a25b6a1&language=en-US"

    useEffect(() => {
        fetchMovies();
    },[]);

    const fetchMovies = async () => {
        const data = await fetch(url);
        const movies = await data.json();
        console.log(movies);
        setMovies(movies.results);
    };

//     const fetchMoviesVideos = async () => {
//       const data = await fetch(Vurl);
//       const movies = await data.json();
//       console.log(movies);
//       setMovies(prevState => ...movies.results, prevState);
//   };

//   const fetchMoviesCast = async () => {
//     const data = await fetch(url);
//     const movies = await data.json();
//     console.log(movies);
//     setMovies(movies.results);
// };

    console.log(...movies)

  const [state, setState] = useState(null)
  function changeState(){
    setState(globalState.hoverState)
  }
  console.log(state)
  return (
    <div className="App">
      <BrowserRouter>
      <GlobalContext.Provider value={{globalState}}>
          <BackgroundImage movieData = {movies} path = {state}/>
          <Navbar/>
          <Routes>
            <Route path = "/"              element = {<HomePage movieData = {movies} stateChange={changeState} state={state}/>}/>
            <Route path = "/login"         element = {<LoginPage        />} />
            <Route path = "/creatorLogin"  element = {<CreatorLoginPage />} />
            <Route path = "/createContest" element = {<CreateContest    />} />
            <Route path = "/adminLogin"    element = {<AdminLogin       />} />
            <Route path = "/leaderboard"   element = {<LeaderBoard      />} />
            <Route path = "/movieid"   element = {<MovieInfo movieData={movies} state={state}   />} />
          </Routes>
      </GlobalContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

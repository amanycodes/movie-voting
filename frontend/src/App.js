import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { useEffect, useState} from "react";

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
import { globalState, GlobalContext} from "./globalStates/State";

function App() {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState('popular')
  const [show, setShow] = useState('movie')
  const [search, setSearch] = useState(null)
  const [page, setPage] = useState(1)
  const S_url = `https://api.themoviedb.org/3/search/movie?api_key=09801cd0f41d3548096eac7d4a25b6a1&query=${search}`
    const url = `https://api.themoviedb.org/3/${show}/${genre}?api_key=09801cd0f41d3548096eac7d4a25b6a1&language=en-US&page=${page}`;
    const F_url = !search ? url : S_url

    useEffect(() => {
        fetchMovies();
    },[genre, show, F_url]);

    const fetchMovies = async () => {
        const data = await fetch(F_url);
        const movies = await data.json();
        console.log(movies.results);
        setMovies(movies.results);
    };
  
  function setPageInfo(){
    if(page<=20){
      setPage(prevState =>{
        return(prevState++)
      })
    }
    else{
      setPage(1)
    }
  }
  function setSearchInfo(){
    setSearch(globalState.searchState)
    }
    
  function setGenreInfo(){
    setGenre(globalState.genreState)
  } 

  function setShowInfo(){
    setShow(globalState.showState)
  }
  console.log(search)
  const [state, setState] = useState(null)
  function changeState(){
    setState(globalState.hoverState)
  }
  console.log(state)
  return (
    <div className="App">
      <BrowserRouter>
      <GlobalContext.Provider value={{globalState}}>
          <BackgroundImage movieData = {movies} path = {state} />
          <Navbar setGenre = {setGenreInfo} setShow = {setShowInfo} setState={changeState} state={state} setSearchInfo={setSearchInfo}/>
          <Routes>
            <Route path = "/"              element = {<HomePage movieData = {movies} stateChange={changeState} state={state} genre={genre} show={show} setPageInfo={setPageInfo}/>}/>
            <Route path = "/login"         element = {<LoginPage        />} />
            <Route path = "/creatorLogin"  element = {<CreatorLoginPage />} />
            <Route path = "/createContest" element = {<CreateContest    />} />
            <Route path = "/adminLogin"    element = {<AdminLogin       />} />
            <Route path = "/leaderboard"   element = {<LeaderBoard      />} />
            <Route path = "/movieid" show={show}  element = {<MovieInfo movieData={movies} state={state} show={show} />} />
          </Routes>
      </GlobalContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

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
  const [state, setState] = useState(null)
  function changeState(){
    setState(globalState.hoverState)
  }
  console.log(state)
  return (
    <div className="App">
      <BrowserRouter>
      <GlobalContext.Provider value={{globalState}}>
          <BackgroundImage path = {state}/>
          <Navbar/>
          <Routes>
            <Route path = "/"              element = {<HomePage stateChange={changeState} state={state}/>}/>
            <Route path = "/login"         element = {<LoginPage        />} />
            <Route path = "/creatorLogin"  element = {<CreatorLoginPage />} />
            <Route path = "/createContest" element = {<CreateContest    />} />
            <Route path = "/adminLogin"    element = {<AdminLogin       />} />
            <Route path = "/leaderboard"   element = {<LeaderBoard      />} />
            <Route path = "/movieid"   element = {<MovieInfo     />} />
          </Routes>
      </GlobalContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

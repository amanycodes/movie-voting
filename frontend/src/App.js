import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

//PAGES
import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/home/HomePage";
import LeaderBoard from "./pages/leaderboard/Leaderboard";
import AdminLogin from "./pages/adminLogin/AdminLogin";
import CreateContest from "./pages/createContest/CreateContest";
import CreatorLoginPage from "./pages/creatorLogin/CreatorLogin";
import Navbar from "./pages/navbar/Navbar";
import BackgroundImage from "./components/BackgroundImage";
import MovieInfo from "./pages/movieInfo/MovieInfo";
import MovieContextProvider, {
  MovieContext,
} from "./globalContext/context/MovieContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const movie = useContext(MovieContext);

  return (
    <div className="App">
      {/* {!movie.loading && ( */}
        <BrowserRouter>
          <ToastContainer/>
          <BackgroundImage />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/creatorLogin" element={<CreatorLoginPage />} />
            <Route path="/createContest" element={<CreateContest />} />
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/movieid" element={<MovieInfo />} />
          </Routes>
        </BrowserRouter>
      {/* )} */}
    </div>
  );
}

export default App;

import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useContext } from "react";

//PAGES
import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/home/HomePage";
import LeaderBoard from "./pages/leaderboard/Leaderboard";
import AdminLogin from "./pages/adminLogin/AdminLogin";
import CreateContest from "./pages/createContest/CreateContest";
import CreatorLoginPage from "./pages/creatorLogin/CreatorLogin";
import Navbar from "./pages/navbar/Navbar";
import BackgroundComponent from "./components/BackgroundImage";
import MovieInfo from "./pages/movieInfo/MovieInfo";
import { MovieContext } from "./globalContext/context/MovieContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const AppWrapper = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 0;
`;

const ContentWrapper = styled.main`
  flex: 1;
  position: relative;
  z-index: 1;
`;

function App() {
  const { loading } = useContext(MovieContext);

  return (
    <AppWrapper>
      <BrowserRouter>
        <ToastContainer />
        <BackgroundComponent />
        <ContentWrapper>
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
        </ContentWrapper>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;

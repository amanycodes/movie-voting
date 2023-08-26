import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MovieContextProvider from "./globalContext/context/MovieContext";
import AuthContextProvider from "./globalContext/context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MovieContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </MovieContextProvider>
  </React.StrictMode>
);

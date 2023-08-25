import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./components/Home";
import Login from "./components/Login";
import Admin from "./components/Admin/index.js";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

const App = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const userInfo = useSelector(state => state.userInfo);

  const isAdmin = userInfo && userInfo.roleId === 1;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/admin"
          element={ <Admin /> }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

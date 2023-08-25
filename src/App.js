import React from "react";
import {  Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";
import "./App.css";
import HeaderHome from "./components/HeaderHome";

const App = () => {


  return (
   <div>
     <HeaderHome></HeaderHome>
    <Outlet></Outlet>
   </div>
  );
};

export default App;

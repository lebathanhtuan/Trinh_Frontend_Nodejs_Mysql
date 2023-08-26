import React from "react";
// import { useSelector } from "react-redux";
import "./App.css";
import HeaderHome from "./components/HeaderHome";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Admin from "./components/Admin/index.js";
import Footer from "./components/Footer";
const App = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);

  return (
    <div>
      {userInfo && userInfo.role_id === "1" ? (
        <Admin />
      ) : (
        <div>
          <HeaderHome></HeaderHome>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default App;

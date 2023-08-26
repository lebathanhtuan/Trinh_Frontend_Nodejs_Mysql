import React from "react";
import { Link } from "react-router-dom";
import "../style/headerhome.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions";
import { useState } from "react";

const HeaderHome = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("trangchu");

 
  const handleLogout = () => {
    setActiveTab("trangchu")
    dispatch(logout());
  };

  return (
    <div>
      <div className="container-headerhome">
        {console.log("Thông tin", userInfo, isLoggedIn)}
        <div className="title-main">SHOPGAMEVN</div>
        <nav>
          <div
            className={`${activeTab === "trangchu" ? "active" : ""}`}
            onClick={() => setActiveTab("trangchu")}
          >
            <Link to="/">TRANG CHỦ</Link>
          </div>
          <div
            className={` ${activeTab === "naptien" ? "active" : ""}`}
            onClick={() => setActiveTab("naptien")}
          >
            <Link to="/deposit">NẠP TIỀN</Link>
          </div>
          <div
            className={` ${activeTab === "dichvu" ? "active" : ""}`}
            onClick={() => setActiveTab("dichvu")}
          >
            <Link to="/sevices">DỊCH VỤ</Link>
          </div>
          <div
            className={` ${activeTab === "nickgame" ? "active" : ""}`}
            onClick={() => setActiveTab("nickgame")}
          >
            <Link to="/accountGAME">NICK GAME</Link>
          </div>
          <div
            className={` ${activeTab === "hackmod" ? "active" : ""}`}
            onClick={() => setActiveTab("hackmod")}
          >
            <Link to="/dowloadMOD">TẢI HACK MOD</Link>
          </div>
        </nav>

        {isLoggedIn ? (
          <div>
            <p style={{ fontSize: "20px", color: "white" }} className="Btn">
              Welcome, {userInfo.email}
            </p>
            <p onClick={handleLogout} className="btn logout">
              <Link to="/">LOGOUT</Link>
            </p>
          </div>
        ) : (
          <p
            onClick={() => {
              setActiveTab("islogin");
            }}
            className={`btn ${activeTab === "islogin" ? "active" : ""}`}
          >
            <Link to="/login">Log In</Link>.
          </p>
        )}
      </div>
      <marquee className="scroll" behavior="scroll" direction="left">
        ALL DỊCH VỤ GAME VỚI ĐỘI NGŨ CHẤT LƯỢNG 24/24 !!!
      </marquee>
    </div>
  );
};

export default HeaderHome;

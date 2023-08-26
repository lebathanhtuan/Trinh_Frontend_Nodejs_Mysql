import React from "react";
import { Link } from "react-router-dom";
import "../style/headerhome.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions";

const HeaderHome = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div className="container-headerhome">
        {console.log("Thông tin", userInfo, isLoggedIn)}
        <div className="title-main">SHOPGAMEVN</div>
        <nav>
          <div>
            <Link to="/">TRANG CHỦ</Link>
          </div>
          <div>
            <Link to="/deposit">NẠP TIỀN</Link>
          </div>
          <div>
            <Link to="/sevices">DỊCH VỤ</Link>
          </div>
          <div>
            <Link to="/accountGAME">NICK GAME</Link>
          </div>
          <div>
            <Link to="/dowloadMOD">TẢI HACK MOD</Link>
          </div>
        </nav>
        {isLoggedIn ? (
          <div>
            <p style={{ fontSize: "20px", color: "white" }} className="Btn">
              Welcome, {userInfo.email}
            </p>
            <p onClick={handleLogout} className="btn">
              <Link to="/">LOGOUT</Link>
            </p>
          </div>
        ) : (
          <p className="btn">
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

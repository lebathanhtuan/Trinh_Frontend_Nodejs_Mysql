import React from "react";
import { Link } from "react-router-dom";
import "./headerhome.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions";

const HeaderHome = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const dispatch = useDispatch();

  const isAdmin = userInfo && userInfo.roleId === 1;

  const handleLogout = () =>{
    dispatch(logout());
  }


  return (
    
    <div className="container-headerhome">
      {console.log("Thông tin",userInfo,isLoggedIn)}
      <nav>
        <div><Link to="/about">About me</Link></div>
        <div><Link to="/support">Support</Link></div>
        <div><Link to="/notify">NOTIFICATION</Link></div>

     </nav>
      <h1 className="title-main">Shop Game VN</h1>
      {isLoggedIn ? (
        <div>
          <p style={{fontSize : "20px" , color : "white"}} className="Btn">
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
  );
};

export default HeaderHome;

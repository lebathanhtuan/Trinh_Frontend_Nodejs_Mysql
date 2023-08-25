import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./headerhome.scss";
const HeaderHome = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const userInfo = useSelector((state) => state.userInfo);

  const isAdmin = userInfo && userInfo.roleId === 1;

  return (
    <div className="container-headerhome">
      <nav>
        <div><Link to="/about">About me</Link></div>
        <div><Link to="/support">Support</Link></div>
        <div><Link to="/notify">NOTIFICATION</Link></div>

     </nav>
      <h1 className="title-main">Shop Game VN</h1>
      {isLoggedIn ? (
        <p>
          Welcome, {userInfo.username}!{" "}
          {isAdmin && <Link to="/admin">Admin</Link>}
        </p>
      ) : (
        <p className="btn">
        <Link to="/login">Log In</Link>.
        </p>
      )}
    </div>
  );
};

export default HeaderHome;

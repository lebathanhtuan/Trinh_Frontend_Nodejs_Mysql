import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./admin.scss";

function Header({ activeTab, onTabChange }) {
  return (
    <div className="admin-header">
      <div className="nav">
        <div
          onClick={() => onTabChange("users")}
          className={`${activeTab === "users" ? "active-tab" : ""}`}
        >
          User
        </div>
        <div
          onClick={() => onTabChange("products")}
          className={`${activeTab === "products" ? "active-tab" : ""}`}
        >
          Product
        </div>
      </div>
      <div className="title">ADMIN</div>
      <div className="icon-logout">
        <Link to="/login">
          <i className="fa-solid fa-right-from-bracket"></i>
        </Link>
      </div>
    </div>

  );
}



export default Header;

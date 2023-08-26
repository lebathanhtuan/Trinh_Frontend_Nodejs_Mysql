import React from "react";
import "./admin.scss";
import { useDispatch} from "react-redux";
import { logout } from "../../redux/actions";




function Header({ activeTab, onTabChange }) {
  const dispatch = useDispatch();

  const handleLogout = ()=>{
    dispatch(logout());
  }
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
      <div onClick={handleLogout} className="icon-logout">
          <i className="fa-solid fa-right-from-bracket"></i>
      </div>
    </div>

  );
}



export default Header;

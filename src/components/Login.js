import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../redux/actions";
import "./login.scss";
import { handleLoginAPI, seviceCreateUser } from "../services/userService";
import { Link, Navigate ,Redirect} from "react-router-dom";
const Login = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formLogin, setFormLogin] = useState(true);
  const dispatch = useDispatch();
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    if (username !== "" || password !== "" || confirmPassword !== "") {
      if (password === confirmPassword) {
        let res = await seviceCreateUser({
          email: username,
          password: password,
        });
        if (res.data.message === "Ok") {
          alert("User created successfully");
          setFormLogin(true);
        } else {
          alert(`${res.data.message}`);
        }
      } else alert("Passwords do not match.");
    } else {
      alert("Plz, fill full the information !!!");
    }
  };

  const handleLogin = async () => {
    if (username !== "" && password !== "") {
      let res = await handleLoginAPI({ email: username, password });
      if (res.message === "Ok") {
        dispatch(loginSuccess(res.user));
          if (isLoggedIn) {
            alert("Go Home :(((")
          }
      }
    } else {
      alert("Plz, fill full the information !!!");
    }
  };

  return (
    <div className="wrapper1">
      <div className="login-container">
        <h2>{formLogin ? "Login Page" : "Register Page"}</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!formLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <button onClick={formLogin ? handleLogin : handleRegister}>
          {formLogin ? "Login" : "Register"}
        </button>
        <p onClick={() => setFormLogin(!formLogin)}>
          {formLogin ? (
            <div>
              Don't have an account?
              <span style={{ color: "red" }}>Register here.</span>
            </div>
          ) : (
            <div>
              Already have an account?{" "}
              <span style={{ color: "red" }}>Login here.</span>
            </div>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;

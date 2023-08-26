import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers/rootReducer";
import App from "./App";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Login from "./components/Login";
import Admin from "./components/Admin/index.js";
import Deposit from "./components/Deposit";
import Services from "./components/Services";
import AccountGame from "./components/AccountGame";
import Mod from "./components/Mod";
import Home from "./components/Home";
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<App />} >
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/sevices" element={<Services/>} />
            <Route path="/accountGAME" element={<AccountGame />} />
            <Route path="/dowloadMOD" element={<Mod />} />

          </Route>

          <Route path="/admin" element={<Admin/>}></Route>

        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

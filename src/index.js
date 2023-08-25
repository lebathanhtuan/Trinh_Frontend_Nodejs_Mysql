import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers/rootReducer";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultContent from "./components/DefaultContent";
import Login from "./components/Login";

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<App />} >
            <Route index element={<DefaultContent />} />
            <Route path="/login" element={<Login />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

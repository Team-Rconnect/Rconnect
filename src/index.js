import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { UsersContextProvider } from "./Context/UsersContext";
import { AuthContextProvider } from "./Context/AuthContext";

ReactDOM.render(
  <AuthContextProvider>
    <UsersContextProvider>
      <Router>
        <App />
      </Router>
    </UsersContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);

import React, { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = createContext({
  users: null,
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [users, setusers] = useState(null);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [loggedUser, setloggedUser] = useState({});

  const [loggedUserId, setLoggedUserId] = useState("");

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:5000/users");
    const json = await response.json();
    setusers([...json]);
  };

  const fetchLogged = async (email, password) => {
    console.log("json token asdfghjkl;xcvbnm,");

    const response = await fetch(`http://localhost:3001/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ userName: email, password: password }),
    });
    // console.log("json token", response);
    const loggedAccount = await response.json();
    console.log(loggedAccount.token, "logged account token");
    const decoded = jwt_decode(loggedAccount.token, {
      payload: true,
    });

    console.log(decoded._id, "decoded user");

    // setloggedUser(loggedAccount[0]);
    localStorage.setItem("userId", decoded._id);
    localStorage.setItem("isLoggedIn", "true");
    setLoggedUserId(decoded._id);
    setisLoggedIn(true);
  };

  useEffect(() => {
    const storedIsLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    // const storedEmail = localStorage.getItem("email");
    const storedUserId = localStorage.getItem("userId");
    if (storedIsLoggedIn === true) {
      setisLoggedIn(storedIsLoggedIn);
      setLoggedUserId(storedUserId);
      // fetchLogged(storedEmail);
    }
    fetchUsers();
  }, []);

  const loginHandler = (email, password) => {
    // localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("email", email);
    setisLoggedIn(true);
    fetchLogged(email, password);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    setisLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        users,
        isLoggedIn,
        loggedUser,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

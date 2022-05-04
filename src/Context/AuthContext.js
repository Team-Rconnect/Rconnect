import React, { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = createContext({
  users: null,
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
  onRegister: (firstName, lastName, email, password) => {},
  loggedUser: {},
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
  const fetchRegister = async (firstName, lastName, email, password) => {
    const response = await fetch(`http://localhost:3001/api/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        userName: email,
        password: password,
      }),
    });
    const loggedAccount = await response.json();
    console.log(loggedAccount.user, "response for register");
    localStorage.setItem("userId", loggedAccount.user);
    localStorage.setItem("isLoggedIn", "true");
    setLoggedUserId(loggedAccount.user);
    setisLoggedIn(true);
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

    localStorage.setItem("userId", decoded._id);
    localStorage.setItem("isLoggedIn", "true");
    setLoggedUserId(decoded._id);
    setisLoggedIn(true);
  };

  const fetchUser = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${localStorage.getItem("userId")}`
    );
    // console.log("json token", response);
    const loggedAccount = await response.json();
    setloggedUser(loggedAccount);
    console.log(loggedAccount, "logged account");
  };

  useEffect(() => {
    const storedIsLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    // const storedEmail = localStorage.getItem("email");
    const storedUserId = localStorage.getItem("userId");
    if (storedIsLoggedIn === true) {
      setisLoggedIn(storedIsLoggedIn);
      setLoggedUserId(storedUserId);
      fetchUser();
      // fetchLogged(storedEmail);
    }
    fetchUsers();
  }, []);

  const registerHandler = (firstName, lastName, email, password) => {
    // localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("email", email);
    setisLoggedIn(true);
    fetchRegister(firstName, lastName, email, password);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    setisLoggedIn(false);
  };

  const loginHandler = (email, password) => {
    localStorage.setItem("email", email);
    setisLoggedIn(true);
    fetchLogged(email, password);
  };

  return (
    <AuthContext.Provider
      value={{
        users,
        isLoggedIn,
        loggedUser,
        onLogin: loginHandler,
        onLogout: logoutHandler,
        onRegister: registerHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

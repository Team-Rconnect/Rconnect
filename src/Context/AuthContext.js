import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  users: null,
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email) => {},
});

export const AuthContextProvider = (props) => {
  const [users, setusers] = useState(null);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [loggedUser, setloggedUser] = useState({});

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:5000/users");
    const json = await response.json();
    setusers([...json]);
  };

  const fetchLogged = async (email) => {
    const response = await fetch(`http://localhost:5000/users/?email=${email}`);
    const loggedAccount = await response.json();
    setloggedUser(loggedAccount[0]);
    localStorage.setItem("user", JSON.stringify(loggedAccount[0]));
  };

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    const storedEmail = localStorage.getItem("email");
    const storedUser = localStorage.getItem("user");
    if (storedIsLoggedIn === "true") {
      setisLoggedIn(true);
      fetchLogged(storedEmail);
    }
    fetchUsers();
  }, []);

  const loginHandler = (email) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("email", email);
    setisLoggedIn(true);
    fetchLogged(email);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    localStorage.removeItem("user");
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

import React, { createContext, useEffect, useState } from "react";

const UsersContext = createContext();

export const UsersContextProvider = (props) => {
  const [users, setusers] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchGender, setSearchGender] = useState("Both");

  const handleSearch = (searchT) => {
    setSearchTerm(searchT);
    // fetchUsers();
  };

  const values = {
    users,
    searchTerm,
    setSearchTerm,
    searchGender,
    setSearchGender,
    handleSearch,
  };

  const fetchUserss = async () => {
    const response = await fetch("http://localhost:3001/users");
    const json = await response.json();
    console.log(response, json);
    setusers([...json]);
  };

  useEffect(() => {
    // fetchUsers();
    fetchUserss();
  }, []);

  return (
    <UsersContext.Provider value={values}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContext;

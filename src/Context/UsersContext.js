import React, { createContext, useEffect, useState } from "react";

const UsersContext = createContext();

export const UsersContextProvider = (props) => {
  const [users, setusers] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchGender, setSearchGender] = useState("Both");
  const [searchBranches, setSearchBranches] = useState([]);
  const [searchYears, setSearchYears] = useState([]);
  const [searchSkills, setSearchSkills] = useState([]);
  const [branchesList, setBranchesList] = useState([]);
  const [yearsList, setYearsList] = useState([]);
  const [skillsList, setSkillsList] = useState([]);

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
    searchSkills,
    setSearchSkills,
    searchBranches,
    setSearchBranches,
    searchYears,
    setSearchYears,
    branchesList,
    setBranchesList,
    yearsList,
    setYearsList,
    skillsList,
    setSkillsList,
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

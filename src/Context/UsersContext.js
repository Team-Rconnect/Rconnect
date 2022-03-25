import React, { createContext, useEffect, useState } from "react";

const UsersContext = createContext({ users: null });

export const UsersContextProvider = (props) => {
  const [users, setusers] = useState(null);

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:5000/users");
    const json = await response.json();
    setusers([...json]);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UsersContext.Provider
      value={{
        users: users,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContext;

import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext({ user: null });

export const AuthContextProvider = (props) => {
  const [user, setuser] = useState(null);

  const fetchUser = async () => {
    const response = await fetch("http://localhost:5000/users");
    const json = await response.json();
    setuser([...json]);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        users: user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

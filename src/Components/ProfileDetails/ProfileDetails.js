import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "../../Common/Loading";

function ProfileDetails() {
  const [user, setUser] = useState({});
  const location = useLocation();
  const currentPath = location.pathname.split("/")[2];

  const fetchUser = async (username) => {
    console.log(username);
    const response = await fetch(
      `http://localhost:5000/users/?username=${username}`
    );

    const json = await response.json();

    console.log(json[0]);
    setUser({ ...json[0] });
  };

  useEffect(() => {
    fetchUser(currentPath);
  }, [currentPath]);

  return <div>{!user ? <Loading /> : user.email}</div>;
}

export default ProfileDetails;

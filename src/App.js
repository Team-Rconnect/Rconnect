import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import { theme } from "./Common/Constants";
import Login from "./Components/Login/Login";
import ProfileDetails from "./Components/ProfileDetails/ProfileDetails";
import Profiles from "./Components/Profiles/Profiles";
import Forgotpassword from "./Components/Forgotpassword/Forgotpassword";
import { useContext } from "react";
import AuthContext from "./Context/AuthContext";

function App() {
  const authCtx = useContext(AuthContext);
  const userPresent = localStorage.getItem("isLoggedIn");
  // console.log(userPresent, "userpresent");

  // console.log(authCtx.isLoggedIn, "///////////////////");
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        {/* <Route
          path="/home"
          element={!authCtx.isLoggedIn ? <Navigate to="/" /> : <Home />}
        /> */}
        <Route path="/home" element={<Home />} />;
        <Route path="/users" element={<Profiles />} />;
        <Route path="/login" element={<Login />} />;
        <Route path="/users/:id" element={<ProfileDetails />} />;
        <Route path="/Forgotpassword" element={<Forgotpassword />} />;
      </Routes>
    </ThemeProvider>
  );
}

export default App;

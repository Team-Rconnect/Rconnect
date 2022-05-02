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
import DetailsExperiences from "./Components/ProfileDetails/ProfileExperience/DetailsExperiences";
import DetailsEducations from "./Components/ProfileDetails/ProfileEducation/DetailsEducations";
import DetailsProjects from "./Components/ProfileDetails/ProfileProjects/DetailsProjects";
import ImagePick from "./Common/ImagePick";
import Groups from "./Components/Groups/Groups";
import GroupDashboard from "./Components/Groups/GroupDashboard";

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
        <Route path="/users/search" element={<Profiles />} />;
        <Route path="/login" element={<Login />} />;
        <Route path="/users/:id" element={<ProfileDetails />} />;
        <Route
          path="/users/:id/details/experience"
          element={<DetailsExperiences />}
        />
        ;
        <Route
          path="/users/:id/details/education"
          element={<DetailsEducations />}
        />
        ;
        <Route
          path="/users/:id/details/projects"
          element={<DetailsProjects />}
        />
        ;
        <Route path="/Forgotpassword" element={<Forgotpassword />} />;
        <Route path="/img" element={<ImagePick />} />;
        <Route path="/users/:id/groups" element={<Groups />} />;
        <Route path="/users/:id/groups/:id" element={<GroupDashboard />} />;
      </Routes>
    </ThemeProvider>
  );
}

export default App;

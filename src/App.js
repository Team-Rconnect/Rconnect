import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import { theme } from "./Common/Constants";
import Login from "./Components/Login/Login";
import ProfileDetails from "./Components/ProfileDetails/ProfileDetails";
import Profiles from "./Components/Profiles/Profiles";
import Forgotpassword from "./Components/Forgotpassword/Forgotpassword";
import DetailsExperiences from "./Components/ProfileDetails/ProfileExperience/DetailsExperiences";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/users" element={<Profiles />} />;
        <Route path="/login" element={<Login />} />;
        <Route path="/users/:id" element={<ProfileDetails />} />;
        <Route
          path="/users/:id/details/experience"
          element={<DetailsExperiences />}
        />
        ;
        <Route path="/Forgotpassword" element={<Forgotpassword />} />;
      </Routes>
    </ThemeProvider>
  );
}

export default App;

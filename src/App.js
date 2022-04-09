import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import { theme } from "./Common/Constants";
import Login from "./Components/Login/Login";
import ProfileDetails from "./Components/ProfileDetails/ProfileDetails";
import Profiles from "./Components/Profiles/Profiles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/users" element={<Profiles />} />;
        <Route path="/login" element={<Login />} />;
        <Route path="/users/:id" element={<ProfileDetails />} />;
      </Routes>
    </ThemeProvider>
  );
}

export default App;

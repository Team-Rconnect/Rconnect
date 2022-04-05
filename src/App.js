import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import ProfileDetails from "./Components/ProfileDetails/ProfileDetails";
import Profiles from "./Components/Profiles/Profiles";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />;
      <Route path="/users" element={<Profiles />} />;
      <Route path="/users/:id" element={<ProfileDetails />} />;
    </Routes>
  );
}

export default App;

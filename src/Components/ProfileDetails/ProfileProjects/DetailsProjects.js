import { Container } from "@mui/material";
import React from "react";
import Navbar from "../../Navbar/Navbar";
import ProfileProjects from "./ProfileProjects";

function DetailsEducation() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="md" sx={{ marginTop: "40px" }}>
        <ProfileProjects />
      </Container>
    </div>
  );
}

export default DetailsEducation;

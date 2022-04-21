import { Container } from "@mui/material";
import React from "react";
import Navbar from "../../Navbar/Navbar";
import ProfileExperience from "./ProfileExperience";

function DetailsExperiences() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="md" sx={{ marginTop: "40px" }}>
        <ProfileExperience />
      </Container>
    </div>
  );
}

export default DetailsExperiences;

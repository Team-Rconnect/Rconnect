import { Container } from "@mui/material";
import React from "react";
import Navbar from "../../Navbar/Navbar";
import ProfileEducation from "./ProfileEducation";

function DetailsEducations() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="md" sx={{ marginTop: "40px" }}>
        <ProfileEducation />
      </Container>
    </div>
  );
}

export default DetailsEducations;

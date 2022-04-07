import { Box, Button, CardMedia, Paper } from "@mui/material";
import React from "react";
import { companies } from "../../Common/Constants";
import Heading2 from "../../Common/Heading2";

function CompaniesList() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Heading2 text={"Companies list"} />
      <Box
        sx={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "#fffccc",
        }}
      >
        {companies.map((company) => {
          return (
            <>
              <Paper
                sx={{
                  width: "110px",
                  height: "90px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 !important",
                }}
                key={company.id}
              >
                <CardMedia
                  component="img"
                  image={company.url}
                  alt="company"
                  sx={{ margin: "0 !important" }}
                />
              </Paper>
            </>
          );
        })}
      </Box>
      <Button variant="outlined">View More</Button>
    </Box>
  );
}

export default CompaniesList;

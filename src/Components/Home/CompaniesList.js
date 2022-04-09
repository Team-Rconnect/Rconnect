import { Box, Button, CardMedia, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { companies } from "../../Common/Constants";
import Heading1 from "../../Common/Heading1";

function CompaniesList() {
  const [companyViewCount, setCompanyViewCount] = useState(3);
  const handleCompanies = () => {
    let c =
      companies.length - companyViewCount < 3 &&
      companies.length !== companyViewCount
        ? companyViewCount + (companies.length - companyViewCount)
        : companyViewCount + 3;
    setCompanyViewCount(c > companies.length ? 3 : c);
    console.log(c);
  };
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
      <Typography
        variant="body1"
        sx={{ padding: "10px 0", marginBottom: "5px" }}
      >
        {" "}
        CompaniesList
      </Typography>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "#fffccc",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {companies &&
            companies.slice(0, companyViewCount).map((company, index) => {
              return (
                <>
                  <Grid item xs={2} sm={4} md={4} key={index}>
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
                  </Grid>
                </>
              );
            })}
        </Grid>
      </Box>
      {companyViewCount < companies.length && (
        <Button variant="outlined" onClick={handleCompanies}>
          View More
        </Button>
      )}
    </Box>
  );
}

export default CompaniesList;

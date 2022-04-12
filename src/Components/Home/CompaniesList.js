import { Box, Button, CardMedia, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { companies } from "../../Common/Constants";
import HeadingLG from "../../Common/HeadingLG";
import { bgSecondary, bgTerinary } from "../../Common/Pallete";
import TextIconButton from "../../Common/TextIconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Subtitle1 from "../../Common/Subtitle1";

function CompaniesList() {
  const [companyViewCount, setCompanyViewCount] = useState(9);

  const handleCompanies = () => {
    let c =
      companies.length - companyViewCount < 9 &&
      companies.length !== companyViewCount
        ? companyViewCount + (companies.length - companyViewCount)
        : companyViewCount + 9;
    setCompanyViewCount(c > companies.length ? 9 : c);
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
        padding: "20px 0px",
      }}
    >
      <HeadingLG text="Companies" />
      <Typography variant="body1">
        List of Companies that recruited our students
      </Typography>
      <Box sx={{ width: "90%", margin: "40px 0px" }}>
        <Box>
          <Box
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
          >
            {companies &&
              companies.slice(0, companyViewCount).map((company, index) => {
                return (
                  <Box
                    sx={{
                      padding: "20px",
                      margin: "10px",
                      // backgroundColor: "yellow",
                      width: "90px",
                      height: "90px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "5px",
                      // opacity: 0.2,
                      border: "1px solid #f1f1f1",
                      transition: "all 0.4s ease-in-out",
                      boxShadow: "0 0 10px -2px #d1e3fa",
                      "&:hover": {
                        transform: "scale(1.02)",
                        opacity: 1,
                        backgroundColor: "#fff",
                        boxShadow: "0 0 10px -2px #d1e3fa",
                      },
                    }}
                  >
                    <img
                      src={company.url}
                      height="70px"
                      width="70px"
                      alt="company"
                    />
                    <Typography variant="subtitle2">Company</Typography>
                  </Box>
                );
              })}
          </Box>
        </Box>
      </Box>
      <TextIconButton
        text={companyViewCount >= companies.length ? "View less" : "View more"}
        onClick={handleCompanies}
        endIcon={
          companyViewCount >= companies.length ? (
            <KeyboardArrowUpIcon size={20} />
          ) : (
            <KeyboardArrowDownIcon fontSize="large" />
          )
        }
      />
      {/* <Button variant="outlined" onClick={handleCompanies}>
        {companyViewCount >= companies.length ? "View less" : "View more"}
      </Button> */}
    </Box>
  );
}

export default CompaniesList;

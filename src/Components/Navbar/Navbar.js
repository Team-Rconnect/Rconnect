import React from "react";
import { Search } from "@mui/icons-material";
import {
  Box,
  InputAdornment,
  TextField,
  IconButton,
  Button,
} from "@mui/material";
import { bgSecondary, borderLight } from "../../Common/Pallete";

function Navbar() {
  return (
    <Box
      sx={{
        width: `calc(100% - 20px)`,
        height: "40px",
        marginRight: "5px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderColor: borderLight,
        backgroundColor: "white",
        position: "fixed",
        zIndex: 2,
      }}
    >
      <h2>Rconnect</h2>
      <Box
        sx={{
          bgcolor: bgSecondary,
          padding: "5px",
          borderRadius: "10px",
          width: "50%",
        }}
      >
        <TextField
          InputProps={{
            disableUnderline: true,
            placeholder: "Search...",
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Box>
      <Button variant="contained">Login</Button>
    </Box>
  );
}

export default Navbar;

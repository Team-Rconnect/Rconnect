import React from "react";
import { Search } from "@mui/icons-material";
import {
  Box,
  InputAdornment,
  TextField,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { bgSecondary, borderLight } from "../../Common/Pallete";

function Navbar() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: `calc(100% - 20px)`,
        height: "5vh",
        marginRight: "5px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderColor: borderLight,
        backgroundColor: "white",
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
          fullWidth
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
      <Button variant="contained" onClick={() => navigate("/login")}>
        Login
      </Button>
    </Box>
  );
}

export default Navbar;

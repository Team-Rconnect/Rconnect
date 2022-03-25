import { Box, Chip } from "@mui/material";
import React from "react";
import { borderDark, primary, secondaryTextColor } from "../../Common/Pallete";

function Tags() {
  return (
    <Box sx={{ margin: "5px 15px 15px 15px" }}>
      {[
        "#webdesign",
        "#COA",
        "programming",
        "#competitiveprogramming",
        "#AI",
        "#ML",
        "#appdesign",
        "#networking",
        "#reactjs",
        "#flutter",
        "#ML",
        "#appdesign",
        "#networking",
        "#reactjs",
        "#flutter",
      ].map((tag, index) => {
        return (
          <Chip
            key={index}
            variant="outlined"
            size="small"
            color="info"
            label={tag}
            sx={{
              margin: "2px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: primary,
                color: "white",
              },
            }}
          />
        );
      })}
    </Box>
  );
}

export default Tags;

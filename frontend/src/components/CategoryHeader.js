import React from "react";

import { Typography, Box } from "@mui/material";

const CategoryHeader = ({ category }) => {
  return (
    <Box
    id={category}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100px",
        bgcolor: "primary.main",
        borderRadius: "8px",
        margin: "16px 0",
        color: "white",
      }}
    >
      <Typography variant="h4">{category}</Typography>
    </Box>
  );
};

export default CategoryHeader;

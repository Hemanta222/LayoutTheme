import { Box, Typography } from "@mui/material";
import React from "react";

const nav = ["About", "Contact-us", "Office", "Location"];
const Index = () => {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.light",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {nav.map((item) => (
        <Typography
          key={item}
          variant="subTitle1"
          sx={{ margin: "1rem", fontSize: "1.5rem" }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
};

export default Index;

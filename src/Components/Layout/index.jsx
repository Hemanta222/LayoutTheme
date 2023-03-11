import { Box } from "@mui/material";
import React from "react";
import Header from "../Header";
import Footer from "../Footer";
const Index = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box sx={{ backgroundColor: "#fff" }}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Index;

import { Box } from "@mui/material";
import React from "react";
import Drawer from "../Drawer";
import Footer from "../Footer";
// import second from '../..'
const Index = ({ children }) => {
  return (
    <Box>
      <Drawer>{children}</Drawer>
      <Footer />
    </Box>
  );
};

export default Index;

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import MiniDrawer from "./Components/Drawer";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import React, { useState } from "react";
import { Box } from "@mui/material";
function App() {
  const [islogin, setIslogin] = useState(true);
  return (
    <>
      {islogin ? (
        <MiniDrawer>
          <Home />
        </MiniDrawer>
      ) : (
        <Box sx={{ backgroundColor: "#fff" }}>"Please login first"</Box>
      )}

      <Footer />
    </>
  );
}

export default App;

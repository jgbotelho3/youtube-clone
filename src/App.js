import React from "react";
import { Box } from "@material-ui/core";
import Menu from "./components/AppBar";
import Sidebar from "./components/Drawer";
import Content from "./components/Content";

function App() {
  return (
    <>
      <Menu />
      <Box display="flex">
        <Sidebar />
        <Content />
      </Box>
    </>
  );
}

export default App;

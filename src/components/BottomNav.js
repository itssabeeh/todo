import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { UserContext } from "../Context";
import PopUpBox from "./PopUpBox";
import Backdrop from "@mui/material/Backdrop";

const BottomNav = () => {
  const { handleToggle, open } = React.useContext(UserContext);

  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          onClick={handleToggle}
          label="Add Task"
          icon={<AddIcon />}
        />
      </BottomNavigation>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <PopUpBox />
      </Backdrop>
    </Paper>
  );
};

export default BottomNav;

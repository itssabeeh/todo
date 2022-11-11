import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";

const BottomNav = () => {
  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Add Task" icon={<AddIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;

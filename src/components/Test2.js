import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { UserContext } from "../Context";

const BottomNav = () => {
  const { addTask } = React.useContext(UserContext);
  const [task, setTask] = useState("");
  const handleAdd = () => {
    if (task) {
      addTask(task);
      setTask("");
    } else {
      console.log("empty task");
    }
  };
  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation showLabels>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            variant="standard"
          />
        </Box>
        <BottomNavigationAction
          onClick={handleAdd}
          label="Add Task"
          icon={<AddIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;

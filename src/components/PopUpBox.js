import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { UserContext } from "../Context";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

const PopUpBox = () => {
  const {
    addTask,
    toDoList,
    handleSubmit,
    isEditing,
    task,
    setTask,
    handleClose,
  } = React.useContext(UserContext);

  return (
    <Paper sx={{ position: "fixed", left: "20vw", right: "20vw" }}>
      <Card>
        <CardContent>
          <IconButton aria-label="delete" size="small" onClick={handleClose}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Task"
              value={task}
              fullWidth
              onChange={(e) => setTask(e.target.value)}
              variant="standard"
            />
          </Box>
        </CardContent>
        <CardActions>
          <Button onClick={handleSubmit} variant="contained">
            {isEditing ? "Edit" : "Add"}
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default PopUpBox;

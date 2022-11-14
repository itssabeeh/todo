import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { UserContext } from "../Context";

const Item = ({ id, value }) => {
  const { deleteTask, editTask } = React.useContext(UserContext);
  return (
    <Grid xs={12} sm={6} md={4} lg={2}>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {value}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            onClick={() => editTask(id)}
            aria-label="delete"
            size="small"
          >
            <EditIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            onClick={() => deleteTask(id)}
            aria-label="delete"
            size="small"
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Item;

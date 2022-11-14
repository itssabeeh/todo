import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Item from "./Item";
import AddIcon from "@mui/icons-material/Add";
import { UserContext } from "../Context";

const ListContainer = () => {
  const { toDoList } = React.useContext(UserContext);
  return (
    // <Box
    //   display="flex"
    //   justifyContent="flex-start"
    //   flexWrap="wrap"
    //   //   alignItems="center"
    //   minHeight="100vh"
    // >
    //   <Card sx={{ minWidth: 275, height: "15vh", width: "10vw" }}>
    //     <CardContent>
    //       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    //         Word of the Day
    //       </Typography>
    //     </CardContent>
    //     <CardActions>
    //       <Button size="small">Learn More</Button>
    //     </CardActions>
    //   </Card>
    //   <Card sx={{ minWidth: 275, height: "15vh", width: "10vw" }}>
    //     <CardContent>
    //       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    //         Word of the Day
    //       </Typography>
    //     </CardContent>
    //     <CardActions>
    //       <Button size="small">Learn More</Button>
    //     </CardActions>
    //   </Card>
    //   <Card sx={{ minWidth: 275, height: "15vh", width: "10vw" }}>
    //     <CardContent>
    //       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    //         Word of the Day
    //       </Typography>
    //     </CardContent>
    //     <CardActions>
    //       <Button size="small">Learn More</Button>
    //     </CardActions>
    //   </Card>
    //   <Card sx={{ minWidth: 275, height: "15vh", width: "10vw" }}>
    //     <CardContent>
    //       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    //         Word of the Day
    //       </Typography>
    //     </CardContent>
    //     <CardActions>
    //       <Button size="small">Learn More</Button>
    //     </CardActions>
    //   </Card>
    //   <Card sx={{ minWidth: 275, height: "15vh", width: "10vw" }}>
    //     <CardContent>
    //       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    //         Word of the Day
    //       </Typography>
    //     </CardContent>
    //     <CardActions>
    //       <Button size="small">Learn More</Button>
    //     </CardActions>
    //   </Card>
    //   <Card sx={{ minWidth: 275, height: "15vh", width: "10vw" }}>
    //     <CardContent>
    //       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    //         Word of the Day
    //       </Typography>
    //     </CardContent>
    //     <CardActions>
    //       <Button size="small">Learn More</Button>
    //     </CardActions>
    //   </Card>
    //   <Card sx={{ minWidth: 275, height: "15vh", width: "10vw" }}>
    //     <CardContent>
    //       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    //         Word of the Day
    //       </Typography>
    //     </CardContent>
    //     <CardActions>
    //       <Button size="small">Learn More</Button>
    //     </CardActions>
    //   </Card>
    //   <Card sx={{ minWidth: 275, height: "15vh", width: "10vw" }}>
    //     <CardContent>
    //       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    //         Word of the Day
    //       </Typography>
    //     </CardContent>
    //     <CardActions>
    //       <Button size="small">Learn More</Button>
    //     </CardActions>
    //   </Card>
    // </Box>
    <>
      <Box sx={{ flexGrow: 1, p: 4, pt: 10 }}>
        <Grid container height="30vh" spacing={2}>
          {toDoList.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ListContainer;

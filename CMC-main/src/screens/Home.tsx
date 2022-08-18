import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import SideBar from "./../components/SideBar";
import RightNav from "./../components/RightNav";
import "./../Styles/Home.css";

const useStyles = makeStyles({
  home: {
    display: "flex",
    backgroundColor: "#ebebeb;",
    minHeight: "100vh",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.home}>
      <CssBaseline />
      <SideBar />
      <RightNav />
    </Box>
  );
};

export default Home;

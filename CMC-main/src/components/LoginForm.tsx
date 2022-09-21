import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { Box } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import Home from "../screens/Home";
import App from "../App";
import Login from "../Login";

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    "&:focus, &:hover, &:visited, &:link, &:active": {
        textDecoration: "none",
    },
}));


const locationNav =()=>{// eslint-disable-next-line no-restricted-globals
    location.href='/Home'
}


const LoginForm = () => {

  return (
      <Router>
    <Box className="Comp2" >
        <Paper className="username"
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
            <PersonIcon />
            <InputBase
                sx={{ ml: 1, flex: 5 }}
                placeholder="Enter Username"
            />
        </Paper>
        <Paper className="password"
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
            <LockIcon />
            <InputBase
                sx={{ ml: 1, flex: 5 }}
                placeholder="Enter Password"
            />
        </Paper>
      <br />
            <Button className="loginBtn" sx={{width: 410}} variant="contained" color="primary" onClick={locationNav}>
                Sign In
            </Button>

    </Box>

          </Router>
  );
};


export default LoginForm;
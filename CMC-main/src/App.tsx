import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ServiceCallList from "./components/ServiceCallList";
import Home from "./screens/Home";
import LoginHeader from "./components/LoginHeader";
import LoginForm from "./components/LoginForm";
import Grid from '@mui/material/Grid';
import Graphic1 from "./images/img2.svg";
import Graphic2 from "./images/img1.svg";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";

const useStyles = makeStyles({
    home: {
        display: "flex",
        backgroundColor: "#ebebeb;",
        minHeight: "100vh",
    },
});

const App = () => {
    const classes = useStyles();
    return (
        <Router>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route exact path="/Home">
                <Home />
            </Route>
        </Router>
    );
};

export default App;

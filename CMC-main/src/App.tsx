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
import EmployeeService from "./api/api"
import Service from "./api/api"
import ForgetPassWord from "./components/ForgetPassword"

const useStyles = makeStyles({
    home: {
        display: "flex",
        backgroundColor: "#ebebeb;",
        minHeight: "100vh",
    },
});
console.log(localStorage.getItem('log') || '{}')
if((localStorage.getItem('log') || '{}')==='y'){
   var Routes=(
       <Router>
           <Route exact path="/Home">
               <Home />
           </Route>
           <Route exact path="/SpareParts">
               <Home/>
           </Route>
           <Route exact path="/ServiceTickets">
               <Home/>
           </Route>
           <Route exact path="/ServiceCall">
               <Home/>
           </Route>
           <Route exact path="/Attendance">
               <Home/>
           </Route>
           <Route exact path="/Reports">
               <Home/>
           </Route>
           <Route exact path="/Administration">
               <Home/>
           </Route>
           <Route exact path="/Masters">
               <Home/>
           </Route>
           <Route exact path="/Calendar">
               <Home/>
           </Route>
           <Route exact path="/ResourceAllocation">
               <Home/>
           </Route>
           <Route exact path="/forget">
               <Login/>
           </Route>
           <Route exact path="/Calendar">
               <Home />
           </Route>
       </Router>
   )
}

const App = () => {
    const classes = useStyles();
    return (
        <React.StrictMode>
            <Service>
                <Router>
                    <Route exact path="/">
                        <Login/>
                    </Route>
                    {Routes}
                </Router>
              
            </Service>
        </React.StrictMode>
    );
};

export default App;

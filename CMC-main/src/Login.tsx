import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import "./Styles/Home.css";
import Grid from "@mui/material/Grid";
import Graphic2 from "./images/img1.svg";
import LoginHeader from "./components/LoginHeader";
import LoginForm from "./components/LoginForm";
import Graphic1 from "./images/img2.svg";
import Home from "./screens/Home";
import CssBaseline from "@mui/material/CssBaseline";
import SideBar from "./components/SideBar";
import RightNav from "./components/RightNav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateAccount from "./components/CreateAccountForm";
import ForgetPassWord from "./components/ForgetPassword";

const useStyles = makeStyles({
    home: {
        display: "flex",
        backgroundColor: "#ebebeb;",
        minHeight: "100vh",
    },
});

const Login = () => {
    const classes = useStyles();
    return (


        <Router>

                <Box className={classes.home}>
                    <Grid container spacing={2} >
                        <Grid item xs style=
                            {{backgroundImage: `linear-gradient(135deg, #1167b090 10%, #445C77 80%),  url(${Graphic2})`,
                                backgroundSize: "cover",
                            }}
                        >
                            <LoginHeader/>
                            <Link to="/Create">
                            <div className="Comp2" >
                                <h6 className="txt2">Create new Account</h6>
                            </div>
                            </Link>
                            <Link to="/">
                            <div className="Comp2">
                                <h6 className="txt2">Sign In To Your Account</h6>
                            </div>
                            </Link>
                            <Route exact path="/">
                                <LoginForm/>
                            </Route>
                            <Route exact path="/Create">
                                <CreateAccount/>
                            </Route>
                            <Route exact path="/forget">
                                <ForgetPassWord/>
                            </Route>
                            <Link to="/forget">
                                <div className="Comp2">
                                    <h6 className="txt2">Forget Password</h6>
                                </div>
                            </Link>


                        </Grid>
                        <Grid item xs style=  {{backgroundImage: `url(${Graphic1})`,
                            backgroundSize: "cover",
                        }}>
                        </Grid>
                    </Grid>
                </Box>
            {/*<Route exact path="/Home">*/}
            {/*    <Box className={classes.home}>*/}
            {/*        <CssBaseline />*/}
            {/*        <SideBar />*/}
            {/*        <RightNav />*/}
            {/*    </Box>*/}
            {/*</Route>*/}
        </Router>

    );
};

export default Login;

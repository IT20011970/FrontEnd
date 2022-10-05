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
import {styled} from "@mui/material/styles"

const useStyles = makeStyles({
    home: {
        display: "flex",
        backgroundColor: "#ebebeb;",
        minHeight: "100vh",
    },
});

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    "&:focus, &:hover, &:visited, &:link, &:active": {
        textDecoration: "none",
    },
}));

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
                            <StyledLink to="/">
                            <div className="Comp2">
                                <h6 className="txt2">Sign In To Your Account</h6>
                            </div>
                            </StyledLink>
                            <Route exact path="/">
                                <LoginForm/>
                            </Route>
                            <Route exact path="/Create">
                                <CreateAccount/>
                            </Route>
                            <Route exact path="/forget">
                                <ForgetPassWord/>
                            </Route>
                            <Grid container spacing={3} style={{marginLeft:'15%',marginRight:'20%'}}>
                                <Grid item xs={6} md={3}>
                                    <StyledLink to="/forget">
                                        <Route exact path="/">
                                            <div className="Comp2">
                                                <h6 className="txt2">Forget Password</h6>
                                            </div>
                                        </Route>
                                    </StyledLink>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <StyledLink to="/Create">
                                        <Route exact path="/">
                                            <div className="Comp2" >
                                                <h6 className="txt2">Create new Account</h6>
                                            </div>
                                        </Route>
                                    </StyledLink>
                                </Grid>
                            </Grid>
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

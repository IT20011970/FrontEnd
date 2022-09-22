import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import "./Styles/Home.css";
import Grid from "@mui/material/Grid";
import Graphic2 from "./images/img1.svg";
import LoginHeader from "./components/LoginHeader";
import LoginForm from "./components/LoginForm";
import Graphic1 from "./images/img2.svg";

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
        <Box className={classes.home}>
            <Grid container spacing={2} >
                <Grid item xs style=
                    {{backgroundImage: `linear-gradient(135deg, #1167b090 10%, #445C77 80%),  url(${Graphic2})`,
                        backgroundSize: "cover",
                    }}
                >
                    <LoginHeader/>
                    <LoginForm/>
                </Grid>
                <Grid item xs style=  {{backgroundImage: `url(${Graphic1})`,
                    backgroundSize: "cover",
                }}>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Login;

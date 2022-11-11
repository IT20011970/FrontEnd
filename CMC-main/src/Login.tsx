import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import "./Styles/Home.css";
import Grid from "@mui/material/Grid";
import Graphic2 from "./images/img.jpg";
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
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react"

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
    const [open, setOpen] = React.useState(false);
    const [fields, setfields] = useState<any>({});
    const [errors,seterrors]=useState<any>({})
    const [otp, setotp] = React.useState(0)
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function handleChange(e:any,f:any) {
        // let field=fields
        fields[f] = e.target.value;
        setfields(fields)
        //  handleValidation()
    }
    React.useEffect(()=>{
            localStorage.setItem('log',"N")
    },[])
    function forget(){
        console.log(fields)
         let otp=Math.floor(Math.random()*1000000)
        setotp(otp)
        const requestOptions ={
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                id:Math.random()*10000,
                email:fields["email"],
                otp:otp
            })
        };
        fetch('http://localhost:3000/auth/forgot',requestOptions)
            .then(response=>{ return response.json()})
    }
    function validate(){
        if(otp===fields["otp"]){
            window.location.href='/'
        }
        else {
            window.location.href='/forget'
        }
    }
    
    return (
        <Router>
                <Box className={classes.home}>
                    <Grid container spacing={2} >
                        <Grid item xs style=
                            {{backgroundImage: `linear-gradient(135deg, #1167b090 10%, #445C77 80%),  url(${Graphic2})`,
                                backgroundSize: "cover",
                            }}
                        >
                            <Route exact path="/">
                                <div className="Comp1">
                                    <h1 className="loginText">
                                        Welcome back <br/> to <span className="w600">CMC</span>
                                    </h1>
                                </div>
                            </Route>
                            <Route exact path="/Create">
                                <div className="Comp1">
                                    <h1 className="loginText">
                                        Create <br/> new <span className="w600">Account</span>
                                    </h1>
                                </div>
                            </Route>
                            <Route exact path="/forget">
                            <div className="Comp1">
                                <h1 className="loginText">
                                    Reset <br/>  <span className="w600">Password</span>
                                </h1>
                            </div>
                            </Route>
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
                                    <StyledLink to="/forget" onClick={handleClickOpen}>
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
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Forgert Password</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Type your otp.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={(e) => handleChange(e,"email")}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="OTP"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={(e) => handleChange(e,"otp")}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={validate}>Cancel</Button>
                    <Button onClick={forget}>Send OTP</Button>
                </DialogActions>
            </Dialog>
            
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

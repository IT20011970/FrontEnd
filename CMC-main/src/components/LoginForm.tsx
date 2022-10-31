import React, {useState} from "react";
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
import {da} from "date-fns/locale";

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    "&:focus, &:hover, &:visited, &:link, &:active": {
        textDecoration: "none",
    },
}));

// const requestOptions ={
//     method:'POST',
//     headers:{'Content-Type':'application/json'},
//     body:JSON.stringify({
//         email:username,
//         password:passWord
//     })
// };
// fetch('http://localhost:3000/service-calls/',requestOptions)

const LoginForm = () => {
    const [username,setUserName] = React.useState("");
    const [passWord,setPassword]= React.useState("");

    const handleChangeLogin = (event: any) => {
        setUserName(event.target.value)
    }
    const handleChangePassword = (event: any) => {
        setPassword(event.target.value)
    }

    function locationNav(){
        const requestOptions ={
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                Id: 1,
                Description:"string",
                Status:1,
                login:{
                    UserName:username,
                    Password:passWord,
                }
            })
        };
        fetch('http://localhost:3000/auth/signin',requestOptions)
            .then(response=>{ return response.json()})
            .then(data=>{
                console.log(data.Id)
                 if(data.Id){
                     window.location.href='/Home'
                     localStorage.setItem('user', JSON.stringify(data))
                     localStorage.setItem('log',"y")
                 }
                else{
                     window.location.reload()
                     alert("Password Is Incorrect")
                 }

            });
    }

// window.location.href='/Home'
//
//
//
//     console.log(passWord,username)

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
                onChange={handleChangeLogin}
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
                type={passWord}
                onChange={handleChangePassword}
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

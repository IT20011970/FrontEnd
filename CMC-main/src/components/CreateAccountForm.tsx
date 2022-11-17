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
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    "&:focus, &:hover, &:visited, &:link, &:active": {
        textDecoration: "none",
    },
}));

const SelectBox = styled(Select)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: "center",
    boxShadow: "none",
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeight: 400,
    color: "#383838",
    borderRadius: "4px",
    height: "40px",
    boxSizing: "content-box",
    // "& .MuiSelect-select": {
    //   borderRadius: "4px",
    //   height: "40px",
    //   width: "auto",
    //   // padding: "10px",
    // },
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

const CreateAccount = () => {
    const [username,setUserName] = React.useState("");
    const [passWord,setPassword]= React.useState("");
    const [fields, setfields] = useState<any>({});
    const [errors,seterrors]=useState<any>({})
    const [open, setOpen] = React.useState(false);
    
    const handleChangeLogin = (event: any) => {
        setUserName(event.target.value)
    }
    const handleChangePassword = (event: any) => {
        setPassword(event.target.value)
    }

    function handleChange(e:any,f:any) {
        // let field=fields
        fields[f] = e.target.value;
        setfields(fields)
      //  handleValidation()
    }
    function select() {
        let field=fields
        if(!fields["Status"])
            field["Status"] = "0";
        // setfields({Status:"0"})
      //  handleValidation()
    }


    function handleValidation() {
        console.log(typeof fields["ItemGroup"])
        // console.log(fields["MRF"])
        // let errors: any = {};
        let formIsValid = true;
        // console.log( typeof fields["Status"])
        //  console.log( fields["Status"])
        //   //ItemCode


        // MRF
        if (typeof fields["MRF"] === "string") {
            if (fields["MRF"] === "") {
                errors["MRF"] = "Please Enter MRF ";
                seterrors(errors)
            } else {
                errors["MRF"] = ""
                setfields(fields)
                seterrors(errors)
            }
        }

    }

    function locationNav(){
        console.log(fields)
        const requestOptions ={
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                Id: parseInt(fields["usertype"]),
                user:[ {
                    id:Math.floor(Math.random()*1000000) ,
                    NIC: fields["nic"] ,
                    ContactNumber: fields["contactnumber"] ,
                    Status: "1" ,
                    login:{
                        UserName:fields["username"],
                        Password:fields["password"],
                        Email:fields["email"],
                        Status:1,
                        DeviceId:"1"
                    }
                }
                ]
            })
        };
        fetch('http://localhost:3000/auth/signup',requestOptions)
            .then(response=>{ return response.json()})
            .then(data=>{
                 console.log(data.Id)
                if(data.Id){
                    setOpen(true)
                    window.location.href='/'
                }else{
                    setOpen(true)
                }

            });
    }
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
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
                placeholder="Enter NIC"
                onChange={(e) => handleChange(e,"nic") }
            />
        </Paper>
        <Paper className="username"
               component="form"
               sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <PersonIcon />
            <InputBase
                sx={{ ml: 1, flex: 5 }}
                placeholder="Enter Contact Number"
                onChange={(e) => handleChange(e,"contactnumber") }
            />
        </Paper>
        <Paper className="username"
               component="form"
               sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <PersonIcon />
            <InputBase
                sx={{ ml: 1, flex: 5 }}
                placeholder="Enter Username"
                onChange={(e) => handleChange(e,"username") }
            />
        </Paper>
        <Paper className="username"
               component="form"
               sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <PersonIcon />
            <InputBase
                sx={{ ml: 1, flex: 5 }}
                placeholder="Enter Email"
                onChange={(e) => handleChange(e,"email") }
            />
        </Paper>
        <Paper className="username"
               component="form"
               sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <PersonIcon />
            <SelectBox
                labelId="demo-simple-select-label"
                id="demo-simple-select1"
                sx={{ width: "99%" }}
                placeholder="Select User Type"
                onChange={(e) => handleChange(e,"usertype") }
            >
                <MenuItem value={1}>Admin</MenuItem>
            </SelectBox>
        </Paper>
        <Paper className="Password"
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
            <LockIcon />
            <InputBase
                sx={{ ml: 1, flex: 5 }}
                placeholder="Enter Password"
                onChange={(e) => handleChange(e,"password") }
            />
        </Paper>
      <br />
            <Button className="loginBtn" sx={{width: 410}} variant="contained" color="primary" onClick={locationNav}>
                Register
            </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Success !"}
                <hr/>
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Your User Account is Successfully Created !
                </DialogContentText>
            </DialogContent>
            <hr/>
            <DialogActions>
                <Button onClick={handleClose}>Ok</Button>
            </DialogActions>
        </Dialog>

    </Box>

          </Router>
  );
};


export default CreateAccount;

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "../../../Styles/Modal.css";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import AdmistrationTab3 from "../Administration/AdministrationTab3"
import {useState} from "react"
import AdministrationTab3 from "../Administration/AdministrationTab3";
import AdministrationModel from "./AdministrationModel";
import axios from "axios";



const TextBoxHeader = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  border: "none",
  boxShadow: "none",
  fontFamily: "Montserrat",
  fontSize: 16,
  fontWeight: 600,
  color: "#383838",
  backgroundColor: "transparent",
  marginTop: "17px",
}));

const TextBox = styled(TextField)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  boxShadow: "none",
  fontFamily: "Montserrat",
  fontSize: 14,
  fontWeight: 400,
  color: "#383838",
  borderRadius: "8px",
  // minWidth: "250px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "4px",
    height: "40px",
    width: "auto",
    // padding: "10px",
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
//   // "& .MuiSelect-select": {
//   //   borderRadius: "4px",
//   //   height: "40px",
//   //   width: "auto",
//   //   // padding: "10px",
//   // },
}));

const SelectInput = styled(Select)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  boxShadow: "none",
  fontFamily: "Montserrat",
  fontSize: 14,
  fontWeight: 400,
  color: "#383838",
  borderRadius: "4px",
  width: "95%",
  height: "40px",
  // minWidth: "250px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "4px",
    height: "40px",
    width: "auto",
    // padding: "10px",
  },
}));

const ModalButton = styled(Button)(({ theme }) => ({
  width: "90px",
  height: "auto",
  borderRadius: "2px",
  cursor: "pointer",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: 600,
  float: "right",
  padding: "7px",
  boxShadow: "none",
}));

const Modal = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

// const ModalTittle = styled("text")(({ theme }) => ({
//   fontFamily: "Montserrat",
//   fontSize: 24,
//   fontWeight: 700,
// }));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalTittle = styled("text")(({ theme }) => ({
  fontFamily: "Montserrat",
  fontSize: 24,
  fontWeight: 700,
}));

const ViewUserRoleSpecific = (props: any) => {

  const { open, setOpen } = props;
  const handleOpen = () => setOpen(true);
  //const handleClose = () => setOpen(false);

  const handleClose = () => {
    //console.log("closed");
    setOpen(false);
    setMainTabValue("1")
    AdministrationModel(open)
  };

  

  
  const [age, setAge] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);  
  const [fields, setfields] = useState<any>({});
  const [errors,seterrors]=useState<any>({})
  const [mainTabValue, setMainTabValue] = React.useState("1");
  //const [Description, setDescription] = React.useState("");
  
  // const handleChange = (event: any) => {
  //   setAge(event.target.value);
  // };

  const buttonChange = (newValue: string) => {
    setMainTabValue(newValue);
    
  };

  

  // function handleChange(e:any,f:any) {
  //   // let field=fields
  //   fields[f] = e.target.value;
  //   handleValidation()
  // }


  // function select(e:any,f:any) {
  //   let field=fields
  //   if(!fields[f])
  //     field[f] = "0";
  //   handleValidation()
  // }

  // function handleValidation(){
  //   console.log(fields)
  

  // }

  const [Description, setDescription] = React.useState("");
  const [RoleDescription, setRoleDescription] = React.useState("");

  
  const onChangeRole = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
    console.log(e.target.value);
  }

  const onChangeDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoleDescription(e.target.value );
    console.log(e.target.value);
    
  }


  function post(){
    //handleClose()
    console.log(fields.fields)
    console.log(fields)
    const requestOptions ={
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        //UserRoleId: ,
            Description: Description ,
            RoleDescription: RoleDescription,
            Status: "1"
           
        
      })
    };
    console.log(JSON.parse(requestOptions.body));
    
    fetch('http://localhost:3000/user-role-controller/post',requestOptions)
    alert("User Role Type Added Successfully.")
    
  }

  

  

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        
        {mainTabValue == "2" && (
               <AdministrationTab3 />
              )}

{mainTabValue == "1" && (
        <Grid container spacing={2} >
          <Grid item xs={4} md={2} >
            <TextBoxHeader>User Role</TextBoxHeader>
          </Grid>
          <Grid item xs={8} md={6} mb={2}>
            <TextBox
              // name="stid"
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              name=""
              sx={{ width: "99%" }}
              
              
            />
            </Grid>
          
            
            <br></br>
          <Grid container spacing={1} ml={1} mb={2}>
            <Grid item xs={4} md={2} >
            <TextBoxHeader>Role Description</TextBoxHeader>
          </Grid>
          <Grid item xs={8} md={6} mb={2}>
            <TextBox
              // name="stid"
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              name=""
              sx={{ width: "99%" }}
              
            />
            </Grid></Grid>

            <br></br>
            
            
            
         
          
        </Grid>
        
              )}
                

      </Box>

                  
      
        


    </>
  );
};


export default ViewUserRoleSpecific;

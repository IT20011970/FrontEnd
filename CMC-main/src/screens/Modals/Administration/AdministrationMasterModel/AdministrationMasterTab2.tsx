import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Alert, DialogContentText } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "../../../../Styles/Modal.css";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
// import AdmistrationTab3 from "../Administration/AdministrationTab3"
import {useState} from "react"
// import AdministrationTab3 from "../Administration/AdministrationTab3";
// import AdministrationModel from "./AdministrationModel";
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

const AdministrationMasterTab2 = (props: any) => {

  const { open, setOpen } = props;
  const handleOpen = () => setOpen(true);
  //const handleClose = () => setOpen(false);

  const handleClose = () => {
    //console.log("closed");
    setOpen(false);
    setMainTabValue("1")
    //AdministrationModel(open)
  };

  

  
  const [age, setAge] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);  
  const [fields, setfields] = useState<any>({});
  const [errors,seterrors]=useState<any>({})
  const [mainTabValue, setMainTabValue] = React.useState("1");
  //const [Description, setDescription] = React.useState("");
  const [openmsg, setOpenmsg] = React.useState(false);
  
  // const handleChange = (event: any) => {
  //   setAge(event.target.value);
  // };

  const buttonChange = (newValue: string) => {
    setMainTabValue(newValue);
    
  };

  const handleClosemsg = () => {
    setOpenmsg(false);
  };  

  // const handleChangeItemCode = (event: any) => {
  //   props.setItemCode(event.target.value)
  // };
  // const handleChangeMRF = (event: any) => {
  //   props.setChangeMRF(event.target.value)
  // };
  // const handleChangeSerialNumber = (event: any) => {
  //   props.setIChangeSerialNumber(event.target.value)
  // };
  // const handleChangeItemDescription = (event: any) => {
  //   props.setItemDescription(event.target.value)
  // };
  // const handleChangeItemGroup = (event: any) => {
  //   props.setItemGroup(event.target.value)
  // };
  // const handleChangeCustomerID = (event: any) => {
  //   props.setCustomerID(event.target.value)
  // };
  // const handleChangeContactPerson = (event: any) => {
  //   props.setContactPerson(event.target.value)
  // };
  // const handlChangeAddress = (event: any) => {
  //   props.setAddress(event.target.value)
  // };
  // const handleChangeTelephoneNo = (event: any) => {
  //   props.setTelephoneNo(event.target.value)
  // };
  // const handleChangeStatus = (event: any) => {
  //   props.setChangeStatus(event.target.value);
  // };
  // const handleChangeServiceCallId = (event: any) => {
  //   props.setChangeServiceCallId(event.target.value)
  // };
  // const handleChangePriority = (event: any) => {
  //   props.setChangePriority(event.target.value)
  // };
  // const handleChangeCustomerName = (event: any) => {
  //   props.setCustomerName(event.target.value)
  // };

  function handleChange(e:any,f:any) {
    
    fields[f] = e.target.value;
    handleValidation()
  }


  function select(e:any,f:any) {
    let field=fields
    if(!fields[f])
      field[f] = "0";
    handleValidation()
  }

  function handleValidation(){
    console.log(fields)
  
   
    //User role
    if(typeof fields["User Role"] === "string"){
      if (fields["User Role"]==="") {
        errors["User Role"] = "Please Enter a User Role! ";
        seterrors(errors)
      }
      else if (!fields["User Role"].match(/^[a-zA-Z]+$/)) {
        errors["User Role"] = "Only letters! ";
        seterrors(errors)
      }
      else{
        errors["User Role"] = ""
        setfields( fields )
        seterrors(errors)
      }
    }
    //Content
    if(typeof fields["Content"] === "string"){
      if (fields["Content"]==="") {
        errors["Content"] = "Please Enter a Role Description! ";
        seterrors(errors)
      }
      else if (!fields["Content"].match(/^[a-zA-Z]+$/)) {
        errors["Content"] = "Only letters! ";
        seterrors(errors)
      }
      else{
        errors["Content"] = ""
        setfields( fields )
        seterrors(errors)
      }
    }
  }


  const [ProblemTypeName, setProblemTypeName] = React.useState("");
  const [ProblemTypeValue, setProblemTypeValue] = React.useState("");

  
  const onChangeProblem = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProblemTypeName(e.target.value);
    console.log(e.target.value);
  }

  const onChangeProblemDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProblemTypeValue(e.target.value );
    console.log(e.target.value);
    
  }


  function post(){
    if (ProblemTypeName == '' || ProblemTypeValue == '') {
      alert('Please Fill all Required Fields!');
    } else {
      //handleClose()
    console.log(fields.fields)
    console.log(fields)
    const requestOptions ={
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        //UserRoleId: ,
            ProblemTypeName: ProblemTypeName ,
            ProblemTypeValue: ProblemTypeValue,
            Status: "1"
        
      })
    };
    console.log(JSON.parse(requestOptions.body));
    
    fetch('http://localhost:3000/problem-type-controller/post',requestOptions)
    setOpenmsg(true)
    }   
  }

  

  

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        
        {/* {mainTabValue == "2" && (
              <AdministrationTab3 />
              )} */}

{mainTabValue == "1" && (
        <Grid container spacing={2} >
          <Grid item xs={4} md={2} >
            <TextBoxHeader>Problem Type</TextBoxHeader>
          </Grid>
          <Grid item xs={8} md={6} mb={2}>
            <TextBox
              // name="stid"
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              name="User Role"
              sx={{ width: "99%" }}
              //onChange={(e) => handleChange(e,"User Role") }
              onChange={onChangeProblem}
              
            />
            </Grid>
          
            
            <br></br>
          <Grid container spacing={1} ml={1} mb={2}>
            <Grid item xs={4} md={2} >
            <TextBoxHeader>Description</TextBoxHeader>
          </Grid>
          <Grid item xs={8} md={6} mb={2}>
            <TextBox
              // name="stid"
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              name=""
              sx={{ width: "99%" }}
              onChange={onChangeProblemDesc}
            />
            </Grid></Grid>

            <br></br>
            
            <Grid container spacing={1} ml={1} md={8.7}>         
          <Grid item xs={4} md={4} ml={61}>
      <Button
                    variant="contained"
                    className="ModalCommonButton"
                     sx={{ width: "70%" }}
                     type='submit'
                     onClick={post}
                    >
                      Submit
                      
        </Button>
        </Grid>
        </Grid>
        

            <span style={{color: "red"}}>{errors["TicketID"]}</span>
            
         
          
        </Grid>
        
              )}
                

      </Box>
          {/*msg*/}
        <Dialog
            open={openmsg}
            onClose={handleClosemsg}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Success !"}
            <hr/>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Problem Type Added Successfully !
            </DialogContentText>
          </DialogContent>
          <hr/>
          <DialogActions>
            <Button onClick={handleClosemsg}>Ok</Button>
          </DialogActions>
        </Dialog>
    </>
  );
};


export default AdministrationMasterTab2;

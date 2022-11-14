import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { DialogContentText } from "@mui/material";
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
import {useEffect, useState} from "react"
import { UserRoleTypes } from "../../../Types/Types";



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

const AdministrationTab3 = (props: any) => {

  const [userRoleType, setUserRoleType] =useState<any[]>([]);

  // React.useEffect(() => {
 
  // });

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    };

    fetch('http://localhost:3000/user-role-controller/get',requestOptions)
        .then(response=>{ return response.json()})
        .then(data=>{
          //console.log(data[3].Groups[1].students)
          // console.log(data)
          setUserRoleType(data)
        });
  },[] )

  const { open, setOpen } = props;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  
  const [fields, setfields] = useState<any>({});
  const [errors,seterrors]=useState<any>({})

  const handleChangeItemCode = (event: any) => {
    props.setItemCode(event.target.value)
  };
  const handleChangeMRF = (event: any) => {
    props.setChangeMRF(event.target.value)
  };
  const handleChangeSerialNumber = (event: any) => {
    props.setIChangeSerialNumber(event.target.value)
  };
  const handleChangeItemDescription = (event: any) => {
    props.setItemDescription(event.target.value)
  };
  const handleChangeItemGroup = (event: any) => {
    props.setItemGroup(event.target.value)
  };
  const handleChangeCustomerID = (event: any) => {
    props.setCustomerID(event.target.value)
  };
  const handleChangeContactPerson = (event: any) => {
    props.setContactPerson(event.target.value)
  };
  const handlChangeAddress = (event: any) => {
    props.setAddress(event.target.value)
  };
  const handleChangeTelephoneNo = (event: any) => {
    props.setTelephoneNo(event.target.value)
  };
  const handleChangeStatus = (event: any) => {
    props.setChangeStatus(event.target.value);
  };
  const handleChangeServiceCallId = (event: any) => {
    props.setChangeServiceCallId(event.target.value)
  };
  const handleChangePriority = (event: any) => {
    props.setChangePriority(event.target.value)
  };
  const handleChangeCustomerName = (event: any) => {
    props.setCustomerName(event.target.value)
  };

  const [roleId, setRoleId] = React.useState(0);
  const [desc, setDesc] = React.useState('');
  const [selectsStatus, setSelectedStatus] = React.useState('');
  const [openmsg, setOpenmsg] = React.useState(false);

  const handleClosemsg = () => {
    setOpenmsg(false);
  }; 

  function handleChange(e:any,f:any) {

    console.log(e.target.value);
    //console.log(f)
    const requestOptions = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    };

    fetch('http://localhost:3000/user-role-controller/get/role/' + e.target.value)
        .then(response=>{ return response.json()})
        .then(data=>{
          console.log(data[0].RoleDescription);
          setSelectedStatus(data[0].Status);
          
          setRoleId(data[0].Id);
          setDesc(data[0].RoleDescription);
        });
    

  }

  function changeStatus(){

    const requestOptions = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'}
    };

    fetch(`http://localhost:3000/user-role-controller/update/status/${roleId}/${selectsStatus}`, requestOptions)
        .then(response=>{ return response.json()})
        .then(data=>{
          console.log(data);
        });
        setOpenmsg(true)

  }


  function select(e:any,f:any) {
    let field=fields
    if(!fields[f])
      field[f] = "0";
    handleValidation()
  }

  function handleValidation(){
    console.log(fields)
  }

  

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} >
          <Grid item xs={6} md={2}>
            <TextBoxHeader>User Role</TextBoxHeader>
          </Grid>
          <Grid item xs={6} md={6.6} mb={2} >
          <SelectInput
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                placeholder="Text (default)"
                sx={{ textAlign: 'left' }}
                onChange={(e) => handleChange(e,"Secretary") }
                //onFocus={(e) => handleChange(e,"Secretary") }

            >
              {userRoleType.map(( row:UserRoleTypes, i: number) => (
              <MenuItem key={row.Id} value={row.Description}>{row.Description}</MenuItem>
              ))}
            </SelectInput>
            </Grid>
          </Grid>

        

        <Grid container spacing={2} >
        <Grid item xs={6} md={2}>
            <TextBoxHeader>Role Description</TextBoxHeader>
          </Grid>
          <Grid item xs={6} md={7} mb={2}>
            <TextBox
              // name="stid"
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              name="TicketId"
              sx={{ width: "90%"  }}
              value={desc}               
            />
            </Grid>
        </Grid>

            <span style={{color: "red"}}>{errors["TicketID"]}</span>
            
       

        
      </Box>

                  <br></br>
      <Grid container spacing={1} md={8.9}>         
      
        <Grid item xs={4} md={4} ml={63}>
        <Button
                    variant="contained"
                    className="ModalCommonButton"
                     sx={{ width: "80%" }}
                    onClick={changeStatus}
                    >
                      {Number(selectsStatus) == 1 ? 'Disable User' : 'Enable User'}
                      
        </Button>
        </Grid>
        
        </Grid>
        
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
              User Role Type Changed Successfully !
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

export default AdministrationTab3;

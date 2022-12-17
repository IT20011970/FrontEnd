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
import "../../../../Styles/Modal.css";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import {useEffect, useState} from "react";
import { ClusterHead, ManageUserDetails } from "../../../../Types/Types";
//import SelectInput from "@material-ui/core/Select/SelectInput";



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

const AdministrationMasterTab7 = (props: any) => {

  const [engineer, setEngineer] =useState<any[]>([]);
  const [clusterHead, setClusterHead] =useState<any[]>([]);

  // React.useEffect(() => {
 
  // });

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    };

    fetch('http://localhost:3000/manage-user-details-controller/get',requestOptions)
        .then(response=>{ return response.json()})
        .then(data=>{
          //console.log(data[3].Groups[1].students)
          // console.log(data)
          setEngineer(data)
        });
  },[] )

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    };

    fetch('http://localhost:3000/cluster-head-controller/get',requestOptions)
        .then(response=>{ return response.json()})
        .then(data=>{
          //console.log(data[3].Groups[1].students)
          // console.log(data)
          setClusterHead(data)
        });
  },[] )

  const { open, setOpen } = props;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  
  const [fields, setfields] = useState<any>({});
  const [errors,seterrors]=useState<any>({})

  const [roleId, setRoleId] = React.useState(0);
  const [desc, setDesc] = React.useState('');
  const [selectsStatus, setSelectedStatus] = React.useState('');
  const [openmsg, setOpenmsg] = React.useState(false);

  const [engineerName, setEngineerName] = React.useState("");
  const [clusterHeadName, setClusterHeadName] = React.useState("");

  const onChangeHandledBy = (e: React.ChangeEvent<HTMLInputElement>) => {
    //setSalesAssistantName(e.target.value);
    console.log(e.target.value);
  }

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

    fetch('http://localhost:3000/manage-user-details-controller/get' + e.target.value)
        .then(response=>{ return response.json()})
        .then(data=>{
          setSelectedStatus(data[0].Status);
          
          setRoleId(data[0].Id);
          setDesc(data[0].RoleDescription);
        });
    

  }

  // Add Engineer
  function post(){
    if ( engineerName == '' ||  clusterHeadName == ''){
      alert('Please Select All Required Fields!');
    } else {
      console.log(fields.fields)
      console.log(fields)
      const requestOptions ={
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          //UserRoleId: ,
              EngineerName: engineerName ,
              ClusterHead: clusterHeadName,
              EngineerStatus: "1"
          
        })
      };
      console.log(JSON.parse(requestOptions.body));
      
      fetch('http://localhost:3000/engineer-controller/post',requestOptions)
      setOpenmsg(true)
      }
    }
       

    
  
  

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} >
          <Grid item xs={6} md={2}>
            <TextBoxHeader>Add Engineer</TextBoxHeader>
          </Grid>
          <Grid item xs={6} md={6.6} mb={2} >
          <SelectInput
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                placeholder="Text (default)"
                sx={{ textAlign: 'left' }}
                //value={handledByName}
                onChange={(e) => setEngineerName(String(e.target.value)) }
            >
              {engineer.map(( row:ManageUserDetails, i: number) => (
              <MenuItem key={row.Id} value={row.UserName}>{row.UserName}</MenuItem>
              ))}
            </SelectInput>
            </Grid>
          </Grid> 
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} >
          <Grid item xs={6} md={2}>
            <TextBoxHeader>Add Cluster Head For This Engineer</TextBoxHeader>
          </Grid>
          <Grid item xs={6} md={6.6} mb={2} >
          <SelectInput
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                placeholder="Text (default)"
                sx={{ textAlign: 'left' }}
                //value={handledByName}
                onChange={(e) => setClusterHeadName(String(e.target.value)) }
            >
              {clusterHead.map(( row:ClusterHead, i: number) => (
              <MenuItem key={row.ClusterHeadCode} value={row.ClusterHeadName}>{row.ClusterHeadName}</MenuItem>
              ))}
            </SelectInput>
            </Grid>
          </Grid> 
      </Box>

                  <br></br>
      <Grid container spacing={1} md={8.9}>         
      
        <Grid item xs={4} md={4} ml={78}>
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
        
        {/* msg */}
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
              Engineer Added Successfully !
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

export default AdministrationMasterTab7;
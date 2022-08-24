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
import {number, string} from "prop-types";
import {useEffect} from "react";

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
  // "& .MuiSelect-select": {
  //   borderRadius: "4px",
  //   height: "40px",
  //   width: "auto",
  //   // padding: "10px",
  // },
}));

const SelectInput = styled(Select)(({ theme }) => ({
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

const CreateServiceCallModal1 = (props: any) => {
  console.log(props.setNext)

  const [age, setAge] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const [errorItem,setItemError] =React.useState(false)
  const [errorMRF,setMRFError] =React.useState(false)
  const [errorSerialNumber,setSerialNumberError] =React.useState(false)
  const [errorItemDescription,setItemDescriptionError] =React.useState(false)
  const [errorItemGroup,setItemGroup] =React.useState(false)
  const [errorCustomerID,setCustomerID] =React.useState(false)
  const [errorCustomerName,setCustomerName] =React.useState(false)
  const [errorContactPerson,setContactPerson] =React.useState(false)
  const [errorTelephone,setTelephone] =React.useState(false)
  const [errorCustomerAddress,setCustomerAddress] =React.useState(false)
  const [errorServiceCall,setServiceCall] =React.useState(false)
  const [errorStatus,setStatus] =React.useState(false)
  const [allError,setError]=React.useState(false)


  useEffect (()=>{
    console.log(props.valueNext)
      // if(props.valueNext==="true"){
      //  if(props)
      //   setItemError(true)
      //   setMRFError(true)
      //   setSerialNumberError(true)
      //   setItemDescriptionError(true)
      //   setItemGroup(true)
      //   setCustomerID(true)
      //   setCustomerName(true)
      //   setContactPerson(true)
      //   setTelephone(true)
      //   setCustomerAddress(true)
      //   setServiceCall(true)
      //   setStatus(true)
      // }
  })

  const handleChangeItemCode = (event: any) => {
     props.setNext("false")
    if(!event.target.value){
      setItemError(true)
    }
    else{
      setItemError(false)
      props.setItemCode(event.target.value)
    }
  };
  const handleChangeMRF = (event: any) => {
    props.setNext("false")
    if(!event.target.value){
      setMRFError(true)
    }else {
      setMRFError(false)
      props.setChangeMRF(event.target.value)
    }
  };
  const handleChangeSerialNumber = (event: any) => {
    props.setNext("false")
    if(!event.target.value){
      setSerialNumberError(true)
    }else {
      setSerialNumberError(false)
      props.setIChangeSerialNumber(event.target.value)
    }
  };
  const handleChangeItemDescription = (event: any) => {
    props.setNext("false")
    if(!event.target.value){
      setItemDescriptionError(true)
    }else {
      setItemDescriptionError(false)
      props.setItemDescription(event.target.value)
    }
  };
  const handleChangeItemGroup = (event: any) => {
    props.setNext("false")
    if(!event.target.value){
      setItemGroup(true)
    }else {
      setItemGroup(false)
      props.setItemGroup(event.target.value)
    }
  };
  const handleChangeCustomerID = (event: any) => {
    props.setNext("false")
    if(!event.target.value){
      setCustomerID(true)
    }else {
      setCustomerID(false)
      props.setCustomerID(event.target.value)
    }
  };
  const handleChangeCustomerName = (event: any) => {
    props.setNext("false")
    if(!event.target.value){
      setCustomerName(true)
    }else {
      setCustomerName(false)
      props.setCustomerName(event.target.value)
    }
  };
  const handleChangeContactPerson = (event: any) => {
    props.setNext("false")
    if(!event.target.value){
      setContactPerson(true)
    }else {
      setContactPerson(false)
      props.setContactPerson(event.target.value)
    }
  };

  const handleChangeTelephoneNo = (event: any) => {
    props.setNext("false")
    if(!event.target.value){
           setTelephone(true)
      //setTelephone(true)
    }else {
      if(event.target.value.length===3){
        event.target.value=event.target.value+"-"
      }
      else if(event.target.value.length===4) {
        event.target.value=""
      }

      if(event.target.value.match('[0-9]{3}[-][0-9]{7}$')){
        setTelephone(false)
        props.setTelephoneNo(event.target.value)
      }
      else{
        setTelephone(true)
      }

    }
  };
  const handlChangeAddress = (event: any) => {
    props.setNext("false")
    if(!event.target.value){
      setCustomerAddress(true)
    }else {
      setCustomerAddress(false)
      props.setAddress(event.target.value)
    }
  };
  const handleChangeServiceCallId = (event: any) => {
    props.setNext("false")
    if(!event.target.value){
      setServiceCall(true)
    }else {
      setServiceCall(false)
      props.setChangeServiceCallId(event.target.value)
    }
  };
  const handleChangeStatus = (event: any) => {
    props.setNext("false")
    console.log(event.target.value)
    if(!event.target.value){
      setStatus(true)
    }else {
      setStatus(false)
      props.setChangeStatus(event.target.value);
    }
  };
  const handleChangePriority = (event: any) => {
    props.setNext("false")
    props.setChangePriority(event.target.value)
  };


  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Item Code</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              sx={{ width: "99%" }}
              onChange={handleChangeItemCode}
              onFocus={handleChangeItemCode}
            />
            {errorItem && <span style={{color: "red",fontSize: "12px",padding: "3px"}}>Please Enter Item Code</span>}
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>MRF Serial Number</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              sx={{ width: "99%" }}
              onChange={handleChangeMRF}
              onFocus={handleChangeMRF}
            />
            {errorMRF && <span style={{color: "red",fontSize: "12px",padding: "3px"}}>Please Enter MRF number</span>}
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Serial Number</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              sx={{ width: "99%" }}
              onChange={handleChangeSerialNumber}
              onFocus={handleChangeSerialNumber}
              />
            {errorSerialNumber && <span style={{color: "red",fontSize: "12px",padding: "3px"}}>Please Enter Serial Number</span>}
           </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Item Description</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              sx={{ width: "99%" }}
              onChange={handleChangeItemDescription}
              onFocus={handleChangeItemDescription}
            />
            {errorItemDescription && <span style={{color: "red",fontSize: "12px",padding: "3px"}}>Please Enter Item Description</span>}
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Item Group</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              sx={{ width: "99%" }}
              onChange={handleChangeItemGroup}
              onFocus={handleChangeItemGroup}
            />
            {errorItemGroup && <span style={{color: "red",fontSize: "12px",padding: "3px"}}>Please Enter Item Group</span>}
          </Grid>
        </Grid>
        <Divider
          orientation="horizontal"
          variant="middle"
          flexItem
          sx={{ marginTop: "30px" }}
        />

        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Customer ID</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              sx={{ width: "99%" }}
              onChange={handleChangeCustomerID}
              onFocus={handleChangeCustomerID}
            />
            {errorCustomerID && <span style={{color: "red",fontSize: "12px",padding: "3px"}}>Please Enter Customer ID</span>}
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Customer Name</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              sx={{ width: "99%" }}
              onChange={handleChangeCustomerName}
              onFocus={handleChangeCustomerName}
                />
            {errorCustomerName && <span style={{color: "red",fontSize: "12px",padding: "3px"}}>Please Enter Customer Name</span>}
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Contact Person</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              sx={{ width: "99%" }}
              onChange={handleChangeContactPerson}
              onFocus={handleChangeContactPerson}
            />
            {errorContactPerson && <span style={{color: "red",fontSize: "12px",padding: "3px"}}>Please Enter Contact Person</span>}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Telephone No</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              sx={{ width: "99%" }}
              onChange={handleChangeTelephoneNo}
              onFocus={handleChangeTelephoneNo}
            />
            {errorTelephone && <span style={{color: "red",fontSize: "12px",padding: "3px"}}>Please Enter Valid Number</span>}
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Customer Address ID</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              sx={{ width: "99%" }}
              onChange={handlChangeAddress}
              onFocus={handlChangeAddress}
            />
            {errorCustomerAddress && <span style={{color: "red",fontSize: "12px",padding: "3px"}}>Please Enter Adddress Id</span>}
          </Grid>
        </Grid>
        <Divider
          orientation="horizontal"
          variant="middle"
          flexItem
          sx={{ marginTop: "30px" }}
        />
        <Grid container spacing={2}>
          <Grid item xs={6} md={3} spacing={12}>
            <TextBoxHeader>Service Call ID</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              sx={{ width: "99%" }}
              onChange={handleChangeServiceCallId}
              onFocus={handleChangeServiceCallId}
            />
            {errorServiceCall && <span style={{color: "red",fontSize: "12px",padding: "3px"}}>Please Enter Service Call Id</span>}
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Status</TextBoxHeader>
            <SelectBox
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              required
              onChange={handleChangeStatus}
              sx={{ width: "99%" }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </SelectBox>
            {errorStatus && <span style={{color: "red",fontSize: "12px",padding: "3px"}}>Please Enter Status</span>}
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Priority</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              sx={{ width: "99%" }}
              onChange={handleChangePriority}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CreateServiceCallModal1;

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
import {useState} from "react"



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
  React.useEffect(() => {
 
  });

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

  function handleChange(e:any,f:any) {
    // let field=fields
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
  }

  

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} >
          <Grid item xs={4} md={2}>
            <TextBoxHeader>User</TextBoxHeader>
          </Grid>
          <Grid item xs={8} md={6} mb={2}>
          <SelectInput
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                placeholder="Text (default)"
                sx={{ width: "100%" }}
                onChange={(e) => handleChange(e,"Secretary") }
                onFocus={(e) => handleChange(e,"Secretary") }

            >
              <MenuItem value={"Gayan"}>Gayan</MenuItem>
              <MenuItem value={"Kamal"}>Kamal</MenuItem>
              <MenuItem value={"Saman"}>Saman</MenuItem>
            </SelectInput>
            </Grid>
          </Grid>



        <Grid container spacing={2} >
        <Grid item xs={6} md={2}>
            <TextBoxHeader>Email</TextBoxHeader>
          </Grid>
          <Grid item xs={6} md={7} mb={2}>
            <TextBox
              // name="stid"
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              name="TicketId"
              sx={{ width: "85%" }}
            //   onChange={(e) => handleChange(e,"TicketID") }
            //   onFocus={(e) => handleChange(e,"TicketID") }
              
            />
            </Grid>
            
        </Grid>

        
            <span style={{color: "red"}}>{errors["TicketID"]}</span>
            
       

        
      </Box>

                  <br></br>
      <Grid container spacing={1} md={8.9}>         
      <Grid item xs={4} md={4} ml={30}>
      <Button
                    variant="contained"
                    className="ModalCommonButton"
                     sx={{ width: "70%" }}
                      //onClick={}
                    >
                      Update
                      
        </Button>
        </Grid>
        <Grid item xs={4} md={4} >
        <Button
                    variant="contained"
                    className="ModalCommonButton"
                     sx={{ width: "70%" }}
                      //onClick={}
                    >
                      Disable User
                      
        </Button>
        </Grid>
        </Grid>
        


    </>
  );
};

export default AdministrationTab3;

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import "../../../../Styles/Modal.css";
import "../../../../Styles/ServiceCall.css";
import Button from "@mui/material/Button"
import {useContext, useState} from "react"
import {ServiceContext} from "../../../../api/api"

const SelectInput = styled(Select)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  boxShadow: "none",
  fontFamily: "Montserrat",
  fontSize: 14,
  fontWeight: 400,
  color: "#383838",
  backgroundColor: "#FBFBFB",
  width: "95%",
  height: "40px",
  borderRadius: "4px",
  // minWidth: "250px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "4px",
    height: "40px",
    width: "auto",
    // padding: "10px",
  },
}));

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
  backgroundColor: "#FBFBFB",
  // borderRadius: "8px",
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius: "4px",
    height: "40px",
    // width: "auto",
    // padding: "10px",
  },
}));

const ModalButton = styled(Button)(({ theme }) => ({
  width: "90px",
  height: "auto",
  borderRadius: "2px",
  marginTop:"45px",
  marginLeft:"45px",
  cursor: "pointer",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: 600,
  float: "left",
  padding: "7px",
  boxShadow: "none",
}));


const createData = (
  date: Date,
  time: string,
  engineer: string,
  priority: string,
  plannedStart: Date,
  recurrence: string,
  content: string,
  more: string
) => {
  return {
    date,
    time,
    engineer,
    priority,
    plannedStart,
    recurrence,
    content,
    more,
  };
};

const rows: any = [];
for (var i = 0; i < 5; i++) {
  rows.push(
    createData(
      new Date(),
      "10:23:14 AM",
      "Engineer E",
      "Priority P",
      new Date(),
      "Recurrence R",
      "Content C",
      "More M"
    )
  );
}

const ScheduluingTab = (props: any) => {
  // console.log(props.props.serviceCallData.fields.ServiceCallId)
  const [age, setAge] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [fields, setfields] = useState<any>({})
  const Service =useContext(ServiceContext)
  
  function handleChangeField(event:any,data:any) {
    fields[data] = event;
    console.log(fields)
    setfields(fields)
  }
  function post(){
    fields['ServiceCallId']=props.props.serviceCallData.fields.ServiceCallId
    setfields(fields)
    console.log(fields)
    if(Service !==undefined){
     Service.addSchedule(fields).then((result)=>{
       console.log(result)
     })
    }
  }
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ marginTop: "-30px" }}>
        <Grid item xs={4} md={4}>
          <TextBoxHeader>Planned Start Date & Time</TextBoxHeader>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(params:any) => <TextBox {...params} />}
              value={date}
              onChange={(newValue) => {
                handleChangeField((newValue != null ? newValue.toString() : new Date()),"PlanedStart");
              }}
              className="dateTimePicker"
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={4} md={4}>
          <TextBoxHeader>Estimated Duration</TextBoxHeader>
          <TextBox
            id="outlined-basic"
            variant="outlined"
            placeholder="Text (default)"
          />
        </Grid>
        <Grid item xs={4} md={4}>
          <TextBoxHeader>Planned End Date & Time</TextBoxHeader>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
                renderInput={(params:any) => <TextBox {...params} />}
                value={date}
                onChange={(newValue) => {
                  handleChangeField((newValue != null ? newValue.toString() : new Date()),"PlanedEnd");
                }}
                className="dateTimePicker"
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: "-30px" }}>
      <Grid item xs={2} md={4}>
        <ModalButton
            variant="contained"
            className="ModalCommonButton"
            sx={{ width: "300px"}}
             onClick={post}
        >
          Add Schedule
        </ModalButton>
      </Grid>
        <Grid item xs={8} md={4}></Grid>
      <Grid item xs={2} md={4}>
        <ModalButton
            variant="contained"
            className="ModalCommonButton"
            disabled={true}
            sx={{ width: "300px"}}
            // onClick={post}
        >
         View Schedule
        </ModalButton>
      </Grid>
      </Grid>
      <Divider
        orientation="horizontal"
        variant="middle"
        flexItem
        sx={{ marginTop: "30px" }}
      />
      <Grid xs={12}>
        <FormControlLabel
          control={<Checkbox />}
          label="Select Same as Customer Location"
        />
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <TextBoxHeader>Address ID</TextBoxHeader>
          <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextBoxHeader>Street 1</TextBoxHeader>
          <TextBox
            id="outlined-basic"
            variant="outlined"
            placeholder="Text (default)"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextBoxHeader>Street 2</TextBoxHeader>
          <TextBox
            id="outlined-basic"
            variant="outlined"
            placeholder="Text (default)"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextBoxHeader>Room</TextBoxHeader>
          <TextBox
            id="outlined-basic"
            variant="outlined"
            placeholder="Text (default)"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextBoxHeader>State</TextBoxHeader>
          <TextBox
            id="outlined-basic"
            variant="outlined"
            placeholder="Text (default)"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextBoxHeader>City</TextBoxHeader>
          <TextBox
            id="outlined-basic"
            variant="outlined"
            placeholder="Text (default)"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextBoxHeader>Country</TextBoxHeader>
          <TextBox
            id="outlined-basic"
            variant="outlined"
            placeholder="Text (default)"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ScheduluingTab;

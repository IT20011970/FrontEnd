
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
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {useEffect, useState} from "react";
//import "../../../../Styles/Modal.css";

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

const SelectBox = styled(Select)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
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

const TextBox = styled(TextField)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  boxShadow: "none",
  fontFamily: "Montserrat",
  fontSize: 14,
  fontWeight: 400,
  color: "#383838",
  borderRadius: "4px",
  width: "95%",
  backgroundColor: "#FBFBFB",
  // minWidth: "250px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "4px",
    height: "40px",
    width: "auto",
    // padding: "10px",
  },
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

const GeneralTabTicket = (props: any) => {
  const [age, setAge] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [CreatedOn, setDateCreatedOn] = React.useState(new Date());
  const [planedStartDate, setPlanedStartDate] = React.useState(new Date());
  const [estimatedDate, setEstimatedDate] = React.useState(new Date());
  const [plannedEndDate, setPlannedEndDate] = React.useState(new Date());
  const [actualStartDate, setActualStartDate] = React.useState(new Date());
  const [actualEndDate, setActualEndDate] = React.useState(new Date());
  const [estimate, setEstimation] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [fields, setfields] = useState<any>({contact:''});
  React.useEffect(()=>{
    fields["CreatedOn"] = new Date(props.props.dataUpdate.CreatedOn)
    fields["planedStartDate"] = new Date(props.props.dataUpdate.PlannedStartDate)
    fields["plannedEndDate"] = new Date(props.props.dataUpdate.PlannedEndDate)
     fields["actualStartDate"] =new Date(props.props.dataUpdate.ActualStartDate)
    fields["actualEndDate"] =new Date(props.props.dataUpdate.ActualEndDate)
    fields["contact"]=props.props.dataUpdate.ContactPerson
    // fields["CustomerId"]=dataUpdate.serviceCall.customerEntity.CustomerId
    // fields["CustomeName"] =dataUpdate.serviceCall.customerEntity.CustomeName;
    // fields["ContactPerson"] = dataUpdate.serviceCall.customerEntity.ContactPerson;
    // fields["TelephoneNo"] =dataUpdate.serviceCall.customerEntity.TelephoneNo;
    // fields["CustomerAddressId"] =dataUpdate.serviceCall.customerEntity.CustomerAddressId;
    // fields["AssignedTo"] =dataUpdate.AssignedTo;
    // fields["AssignedBy"] =dataUpdate.AssignedBY;
    props.setSubfields({fields})

  },[])

  function handleChangeDateField(event:any,data:any) {
    fields[data] = event;
    setfields(fields)
    props.setSubfields({fields})
    console.log(fields)
  }
  function handleChangeField(event:any,data:any) {
    fields[data] = event.target.value;
    setfields(fields)
    props.setSubfields({fields})
    console.log(fields)
  }
  const handleChangesetDateCreatedOn= (event:any) => {
    console.log(props)
    setDateCreatedOn(event)
    props.setCreatedOnDate(event)
  }

  const handleChangesetPlanedStartDate= (event:any) => {
    setPlanedStartDate(event)
    props.setDatePlanedStart(event)
  }
  const handleChangesetEstimatedDuration= (event:any) => {
    setEstimation(event.target.value)
    props.setEstimate(event.target.value)
  }
  const handleChangesetPlanedEndDate= (event:any) => {
    setPlannedEndDate(event)
    props.setDatePlannedEnd(event)
  }

  const handleChangesetActualStartDate= (event:any) => {
    setActualStartDate(event)
    props.setDateActualStart(event)
  }
  const handleChangesetActualEndDate= (event:any) => {
    setActualEndDate(event)
    props.setDateActualEnd(event)
  }
  const handleChangesetContact= (event:any) => {
    setContact(event.target.value)
    props.setContact(event.target.value)
  }

  return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={6} md={4}>
              <TextBoxHeader>Created On</TextBoxHeader>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                    renderInput={(params) => <TextBox {...params} />}
                    value={fields["CreatedOn"]}
                    // onChange={handleChangesetDateCreatedOn}
                    onChange={(newValue) => {
                      handleChangeDateField((newValue != null ? newValue.toString() : new Date()),"CreatedOn");
                    }}
                    className="dateTimePicker"
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6} md={4}>
              <TextBoxHeader>Planned Start Date & Time</TextBoxHeader>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                    renderInput={(params:any) => <TextBox {...params} />}
                    value={fields["planedStartDate"]}
                    onChange={(newValue) => {
                      handleChangeDateField((newValue != null ? newValue.toString() : new Date()),"planedStartDate");
                    }}
                    className="dateTimePicker"
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6} md={4}>
              <TextBoxHeader>Estimated Duration</TextBoxHeader>
              <SelectBox
                  labelId="demo-simple-select-label"
                  id="demo-simple-select312"
                  // label="Age"
                  defaultValue=""
                  onChange={handleChangesetEstimatedDuration}
              >
                <MenuItem value={1}>1 Hrs</MenuItem>
                <MenuItem value={2}>2 Hrs</MenuItem>
                <MenuItem value={3}>3 Hrs</MenuItem>
                <MenuItem value={4}>4 Hrs</MenuItem>
                <MenuItem value={5}>5 Hrs</MenuItem>
              </SelectBox>
            </Grid>
            <Grid item xs={6} md={4}>
              <TextBoxHeader>Planned End Date & Time</TextBoxHeader>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                    renderInput={(params:any) => <TextBox {...params} />}
                    value={fields["plannedEndDate"]}
                    onChange={(newValue) => {
                      handleChangeDateField((newValue != null ? newValue.toString() : new Date()),"plannedEndDate");
                    }}
                    className="dateTimePicker"
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6} md={4}>
              <TextBoxHeader>Actual Start Date</TextBoxHeader>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                    renderInput={(params:any) => <TextBox {...params} />}
                    value={fields["actualStartDate"]}
                    onChange={(newValue) => {
                      handleChangeDateField((newValue != null ? newValue.toString() : new Date()),"actualStartDate");
                    }}
                    className="dateTimePicker"
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6} md={4}>
              <TextBoxHeader>Actual End Date</TextBoxHeader>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                    renderInput={(params:any) => <TextBox {...params} />}
                    value={fields["actualEndDate"]}
                    onChange={(newValue) => {
                      handleChangeDateField((newValue != null ? newValue.toString() : new Date()),"actualEndDate");
                    }}
                    className="dateTimePicker"
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={5} md={4}>
              <TextBoxHeader>Contact Person</TextBoxHeader>
              <TextBox
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Text (default)"
                  value={fields["contact"]}
                  onChange={e=>handleChangeField(e,"contact")}
              />
              {/*<SelectBox*/}
              {/*    labelId="demo-simple-select-label"*/}
              {/*    id="demo-simple-select"*/}
              {/*    // value={age}*/}
              {/*    // label="Age"*/}
              {/*    onChange={handleChangesetContact}*/}
              {/*>*/}
              {/*  <MenuItem value={"Gayan"}>Gayan</MenuItem>*/}
              {/*  <MenuItem value={"Dilini"}>Dilini</MenuItem>*/}
              {/*  <MenuItem value={"Poornima"}>Poornima</MenuItem>*/}
              {/*  <MenuItem value={"Rukshan"}>Rukshan</MenuItem>*/}
              {/*  <MenuItem value={"Pawani"}>Pawani</MenuItem>*/}
              {/*  <MenuItem value={"Rasika"}>Rasika</MenuItem>*/}
              {/*</SelectBox>*/}
            </Grid>
            <Grid item xs={6} md={4}>
              <TextBoxHeader>Mobile</TextBoxHeader>
              <TextBox
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Text (default)"
                  value={fields["contact"]}
              />
            </Grid>
          </Grid>
        </Box>
      </>
  );
};

export default GeneralTabTicket;


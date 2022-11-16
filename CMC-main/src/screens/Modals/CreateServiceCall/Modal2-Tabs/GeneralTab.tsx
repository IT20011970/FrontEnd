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
import "../../../../Styles/Modal.css";
import {useEffect, useState} from "react"
import {DropdownOrigins, DropdownProblemTypes, DropdownUsers, Ticket} from "../../../../Types/Types"
import moment from "moment"

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
  padding: theme.spacing(1),
  textAlign: "left",
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


const GeneralTab = (props: any) => {
  const [age, setAge] = React.useState("");
  const [CreatedOn, setDateCreatedOn] = React.useState(new Date());
  const [planedStartDate, setPlanedStartDate] = React.useState(new Date());
  const [estimatedDate, setEstimatedDate] = React.useState(new Date());
  const [plannedEndDate, setPlannedEndDate] = React.useState(new Date());
  const [actualStartDate, setActualStartDate] = React.useState(new Date());
  const [actualEndDate, setActualEndDate] = React.useState(new Date());
  const [students, setStudents] =useState<any[]>([]);
  const [originDropDown, setOriginDropDown] =useState<any[]>([]);
  const [problemTypeDropDown, setProblemTypeDropDown] =useState<any[]>([]);
  
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    };

    fetch('http://localhost:3000/service-calls/drop',requestOptions)
        .then(response=>{ return response.json()})
        .then(data=>{
          //console.log(data[3].Groups[1].students)
          // console.log(data)
          setStudents(data)
        });
  },[] )

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    };

    fetch('http://localhost:3000/service-calls/origindrop',requestOptions)
        .then(response=>{ return response.json()})
        .then(data=>{
          //console.log(data[3].Groups[1].students)
          // console.log(data)
          setOriginDropDown(data)
        });
  },[] )

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    };

    fetch('http://localhost:3000/service-calls/problemTypedrop',requestOptions)
        .then(response=>{ return response.json()})
        .then(data=>{
          //console.log(data[3].Groups[1].students)
          // console.log(data)
          setProblemTypeDropDown(data)
        });
  },[] )

  const handleChangeSubject = (event: any) => {
    console.log(props)
    console.log(JSON.parse(localStorage.getItem('user') || '{}').email)
    props.p.setSubject(event.target.value)
  };
  const handleChangeOrigin = (event: any) => {
    props.p.setOrigin(event.target.value)
  };
  const handleChangeProblemType = (event: any) => {
    props.p.setProblemType(event.target.value)
  };
  const handleChangeInquiryType = (event: any) => {
    props.p.setInquiryType(event.target.value)
  };
  const handleChangeCreatedBy = (event: any) => {
    props.p.setCreatedBy(event.target.value)
  };
  const handleChangeHandledBy = (event: any) => {
    props.p.setHandledBy(event.target.value)
  }
  const handleChangeQueue = (event: any) => {
    props.p.setQueue(event.target.value)
  }
  const handleChangeSecretary = (event: any) => {
    props.p.setSecretary(event.target.value)
  }
  const handleChangeSalesAssistant = (event: any) => {
    props.p.setSalesAssistant(event.target.value)
  }
  const handleChangesetDateCreatedOn= (event:any) => {
    setDateCreatedOn(event)
    props.p.setDateCreatedOn(event)
  }
  const handleChangesetPlanedStartDate= (event:any) => {
    setPlanedStartDate(event)
    props.p.setPlanedStartDate(event)
  }
  const handleChangesetEstimatedDuration= (event:any) => {
    setEstimatedDate(event)
    props.p.setEstimatedDuration(event)
  }
  const handleChangesetPlanedEndDate= (event:any) => {
    setPlannedEndDate(event)
    console.log(Date.now() - +(new Date("2013-02-20T12:01:04.753Z")))
    props.p.setPlanedEndDate(event)
  }

  const handleChangesetActualStartDate= (event:any) => {
    setActualStartDate(event)
    props.p.setActualStartDate(event)
  }
  const handleChangesetActualEndDate= (event:any) => {
    setActualEndDate(event)
    props.p.setActualEndDate(event)
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={12} md={12} sx={{ marginTop: "-20px" }}>
            <TextBoxHeader>Subject</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              sx={{ width: "99%" }}
              onChange={handleChangeSubject}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Origin</TextBoxHeader>
            <SelectInput
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleChangeOrigin}
              // label="Age"
              defaultValue=""

            >
              {originDropDown.map(( row:DropdownOrigins, i: number) => (
              <MenuItem value={row.OriginValue}>{row.OriginName}</MenuItem>
              ))}
              {/* <MenuItem value={"Email"}>Email</MenuItem>
              <MenuItem value={"Call"}>Call</MenuItem>
              <MenuItem value={"Web"}>Web</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem> */}
            </SelectInput>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Problem Type</TextBoxHeader>
            <SelectInput
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // label="Age"
              defaultValue=""
              onChange={handleChangeProblemType}
            >
              {problemTypeDropDown.map(( row:DropdownProblemTypes, i: number) => (
              <MenuItem value={row.ProblemTypeValue}>{row.ProblemTypeName}</MenuItem>
              ))}
              {/* <MenuItem value={"Mechanical"}>Mechanical</MenuItem>
              <MenuItem value={"Electrical"}>Electrical</MenuItem>
              <MenuItem value={"Replacement"}>Replacement</MenuItem>
              <MenuItem value={"Service"}>Service</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem> */}
            </SelectInput>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Inquiry Type</TextBoxHeader>
            <TextBox
                id="outlined-basic1"
                variant="outlined"
                onChange={handleChangeInquiryType}
            />
          </Grid>
        </Grid>
        <Divider
          orientation="horizontal"
          variant="middle"
          flexItem
          sx={{ marginTop: "30px" }}
        />

        <Grid container>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Created By</TextBoxHeader>
            <TextBox
                id="outlined-basic1"
                variant="outlined"
                value={JSON.parse(localStorage.getItem('user') || '{}').UserName}
                onChange={handleChangeCreatedBy}
            />
            {/*<span style={{fontWeight: 'bold'}}>{)} </span>*/}
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Handled By</TextBoxHeader>
            <SelectInput
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // label="Age"
                defaultValue=""
                onChange={handleChangeHandledBy}
            >
              <MenuItem value={"Gayan"}>Gayan</MenuItem>
              <MenuItem value={"Dilini"}>Dilini</MenuItem>
              <MenuItem value={"Poornima"}>Poornima</MenuItem>
              <MenuItem value={"Rukshan"}>Rukshan</MenuItem>
              <MenuItem value={"Pawani"}>Pawani</MenuItem>
              <MenuItem value={"Rasika"}>Rasika</MenuItem>
            </SelectInput>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Cluster Head</TextBoxHeader>
            <SelectInput
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // label="Age"
                defaultValue=""
                // onChange={handleChangeSecretary}
            >

              {students.map(( row:DropdownUsers, i: number) => (
              <MenuItem value={row.Value}>{row.UserName}</MenuItem>
              ))}
            </SelectInput>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Secretary</TextBoxHeader>
            <SelectInput
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // label="Age"
              defaultValue=""
              onChange={handleChangeSecretary}
            >
              {students.map(( row:DropdownUsers, i: number) => (
              <MenuItem value={row.Value}>{row.UserName}</MenuItem>
              ))}

              {/* <MenuItem value={"Gayan"}>Gayan</MenuItem>
              <MenuItem value={"Dilini"}>Dilini</MenuItem>
              <MenuItem value={"Poornima"}>Poornima</MenuItem>
              <MenuItem value={"Rukshan"}>Rukshan</MenuItem>
              <MenuItem value={"Pawani"}>Pawani</MenuItem>
              <MenuItem value={"Rasika"}>Rasika</MenuItem> */}
            </SelectInput>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Sales Assistant</TextBoxHeader>
            <SelectInput
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // label="Age"
              defaultValue=""
               onChange={handleChangeSalesAssistant}
            >
              {students.map(( row:DropdownUsers, i: number) => (
              <MenuItem value={row.Value}>{row.UserName}</MenuItem>
              ))}
            </SelectInput>
          </Grid>
        </Grid>

        <Divider
          orientation="horizontal"
          variant="middle"
          flexItem
          sx={{ marginTop: "30px" }}
        />
        <Grid container>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Created On <span style={{color:'red'}}>*</span></TextBoxHeader>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(params) => <TextBox {...params} />}
                value={CreatedOn}
               // onChange={handleChangesetDateCreatedOn}
                onChange={(newValue) => {
                  handleChangesetDateCreatedOn((newValue != null ? newValue.toString() : new Date())
                  );
                }}
                className="dateTimePicker"
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Planned start Date & Time <span style={{color:'red'}}>*</span></TextBoxHeader>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(params:any) => <TextBox {...params} />}
                value={planedStartDate}
                onChange={(newValue:any) => {
                  handleChangesetPlanedStartDate((newValue != null ? newValue.toString() : new Date())
                  );
                }}
                className="dateTimePicker"
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Planned End Date & Time <span style={{color:'red'}}>*</span></TextBoxHeader>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(params:any) => <TextBox {...params} />}
                value={plannedEndDate}
                onChange={(newValue:any) => {
                  handleChangesetPlanedEndDate((newValue != null ? newValue.toString() : new Date())
                  );
                }}
                className="dateTimePicker"
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Estimated Duration <span style={{color:'red'}}>*</span></TextBoxHeader>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                  renderInput={(params:any) => <TextBox {...params} />}
                  value={estimatedDate}
                  onChange={(newValue:any) => {
                    handleChangesetEstimatedDuration((newValue != null ? newValue.toString() : new Date())
                    );
                  }}
                  className="dateTimePicker"
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Actual Start Date</TextBoxHeader>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(params:any) => <TextBox {...params} />}
                value={actualStartDate}
                disabled={true}
                onChange={(newValue:any) => {
                  handleChangesetActualStartDate((newValue != null ? newValue.toString() : new Date())
                  );
                }}
                className="dateTimePicker"
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Actual End Date</TextBoxHeader>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(params) => <TextBox {...params} />}
                value={actualEndDate}
                disabled={true}
                onChange={(newValue) => {
                  handleChangesetActualEndDate((newValue != null ? newValue.toString() : new Date())
                  );
                }}
                className="dateTimePicker"
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default GeneralTab;

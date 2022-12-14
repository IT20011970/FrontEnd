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


const GeneralServiceCallDocumentTab = (props: any) => {
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
    console.log(props.props.props.dataUpdate)
  })

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
    // props.p.setSubject(event.target.value)
  };
  const handleChangeOrigin = (event: any) => {
    // props.p.setOrigin(event.target.value)
  };
  const handleChangeProblemType = (event: any) => {
    // props.p.setProblemType(event.target.value)
  };
  const handleChangeInquiryType = (event: any) => {
    // props.p.setInquiryType(event.target.value)
  };
  const handleChangeCreatedBy = (event: any) => {
    // props.p.setCreatedBy(event.target.value)
  };
  const handleChangeHandledBy = (event: any) => {
    // props.p.setHandledBy(event.target.value)
  }
  const handleChangeQueue = (event: any) => {
    // props.p.setQueue(event.target.value)
  }
  const handleChangeSecretary = (event: any) => {
    // props.p.setSecretary(event.target.value)
  }
  const handleChangeSalesAssistant = (event: any) => {
    // props.p.setSalesAssistant(event.target.value)
  }
  const handleChangesetDateCreatedOn= (event:any) => {
    setDateCreatedOn(event)
    // props.p.setDateCreatedOn(event)
  }
  const handleChangesetPlanedStartDate= (event:any) => {
    setPlanedStartDate(event)
    // props.p.setPlanedStartDate(event)
  }
  const handleChangesetEstimatedDuration= (event:any) => {
    setEstimatedDate(event)
    props.p.setEstimatedDuration(event)
  }
  const handleChangesetPlanedEndDate= (event:any) => {
    setPlannedEndDate(event)
    console.log(Date.now() - +(new Date("2013-02-20T12:01:04.753Z")))
    // props.p.setPlanedEndDate(event)
  }

  const handleChangesetActualStartDate= (event:any) => {
    setActualStartDate(event)
    // props.p.setActualStartDate(event)
  }
  const handleChangesetActualEndDate= (event:any) => {
    setActualEndDate(event)
    // props.p.setActualEndDate(event)
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Item Code</TextBoxHeader>
            <TextBox
                id="outlined-basic1"
                variant="outlined"
                value={props.props.props.dataUpdate.itemEntity.ItemCode}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>MRF Serial No</TextBoxHeader>
            <TextBox
                id="outlined-basic1"
                variant="outlined"
                value={props.props.props.dataUpdate.itemEntity.MrfSerialNumber}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Serial Number</TextBoxHeader>
            <TextBox
                id="outlined-basic1"
                variant="outlined"
                value={props.props.props.dataUpdate.itemEntity.SerialNumber}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Item Description</TextBoxHeader>
            <TextBox
                id="outlined-basic1"
                variant="outlined"
                value={props.props.props.dataUpdate.itemEntity.ItemDescription}
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
            <TextBoxHeader>Customer Id</TextBoxHeader>
            <TextBox
                id="outlined-basic1"
                variant="outlined"
                value={props.props.props.dataUpdate.customerEntity.CustomerId}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Customer Name</TextBoxHeader>
            <TextBox
                id="outlined-basic1"
                variant="outlined"
                value={props.props.props.dataUpdate.customerEntity.CustomeName}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Contact Person</TextBoxHeader>
            <TextBox
                id="outlined-basic1"
                variant="outlined"
                value={props.props.props.dataUpdate.customerEntity.ContactPerson}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Telephone Number</TextBoxHeader>
            <TextBox
                id="outlined-basic1"
                variant="outlined"
                value={props.props.props.dataUpdate.customerEntity.TelephoneNo}
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
            <TextBoxHeader>Service Call Id </TextBoxHeader>
            <TextBox
                id="outlined-basic1"
                variant="outlined"
                value={props.props.props.dataUpdate.ServiceCallId}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Created On <span style={{color:'red'}}>*</span></TextBoxHeader>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(params) => <TextBox {...params} />}
                value={new Date(props.props.props.dataUpdate.CreatedOn)}
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
            <TextBoxHeader>Actual Start Date</TextBoxHeader>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(params:any) => <TextBox {...params} />}
                value={new Date(props.props.props.dataUpdate.ActualStartDate)}
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
                value={new Date(props.props.props.dataUpdate.ActualEndDate)}
                disabled={true}
                onChange={(newValue) => {
                  handleChangesetActualEndDate((newValue != null ? newValue.toString() : new Date())
                  );
                }}
                className="dateTimePicker"
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Handled By</TextBoxHeader>
            <TextBox
                id="outlined-basic1"
                variant="outlined"
                value={props.props.props.dataUpdate.HandledBy}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Secratary</TextBoxHeader>
            <TextBox
                id="outlined-basic1"
                variant="outlined"
                value={props.props.props.dataUpdate.Secretary}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextBoxHeader>Subject</TextBoxHeader>
            <TextBox
                id="outlined-basic1"
                variant="outlined"
                value={props.props.props.dataUpdate.Subject}
            />
          </Grid>
          <Grid item xs={6} md={12}>
          <TextBoxHeader>Remarks</TextBoxHeader>
          <TextField
              id="outlined-multiline-static"
              // label="Multiline"
              multiline
              rows={4}
              sx={{width: "100%"}}
              placeholder="Textarea (default)"
              // defaultValue="Default Value"
          />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default GeneralServiceCallDocumentTab;

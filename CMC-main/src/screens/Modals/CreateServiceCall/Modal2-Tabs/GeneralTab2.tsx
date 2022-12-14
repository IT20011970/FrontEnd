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
import {DropdownUsers, Ticket} from "../../../../Types/Types"
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

const SelectBox = styled(Select)(({ theme }) => ({
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


const GeneralTab2 = (props: any) => {
   // console.log(props.p.dataUpdate.CreatedOn)
  const [age, setAge] = React.useState('');
 // const [CreatedOn, setDateCreatedOn] = React.useState(new Date());
 // const [planedStartDate, setPlanedStartDate] = React.useState(new Date());
  const [estimatedDate, setEstimatedDate] = React.useState(new Date());
  //const [plannedEndDate, setPlannedEndDate] = React.useState(new Date());
  const [actualStartDate, setActualStartDate] = React.useState(new Date());
  const [actualEndDate, setActualEndDate] = React.useState(new Date());
  const [students, setStudents] =useState<any[]>([]);
  const [fields,setFields]=useState<any>({Origin:'',ProblemType:'',InquiryType:'',Secretary:'',SalesAssistant:'',Queue:'',CreatedBy:'',HandledBy:'',planedStartDate:'',plannedEndDate:'',CreatedOn:'',Subject:''});
  useEffect(() => {
    //setDateCreatedOn(new Date(props.p.dataUpdate.CreatedOn))
    // setPlanedStartDate(new Date(props.p.dataUpdate.PlanedStartDateTime))
   // setPlannedEndDate(new Date(props.p.dataUpdate.PlanedEndDateTime))
    setEstimatedDate(new Date(props.p.dataUpdate.EstimatedDutation))
    setActualStartDate(new Date(props.p.dataUpdate.ActualStartDate))
    setActualEndDate(new Date(props.p.dataUpdate.ActualEndDate))
    //props.p.setDateCreatedOn(CreatedOn)
    // props.p.setPlanedStartDate(planedStartDate)
    props.p.setEstimatedDuration(estimatedDate)
    //props.p.setPlanedEndDate(plannedEndDate)
    props.p.setActualStartDate(actualStartDate)
    props.p.setActualEndDate(actualEndDate)
    console.log(props.p.dataUpdate)
    
    fields["planedStartDate"] = new Date(props.p.dataUpdate.PlanedStartDateTime)
    fields['plannedEndDate']= new Date(props.p.dataUpdate.PlanedEndDateTime)
    fields['CreatedOn']= new Date(props.p.dataUpdate.CreatedOn)
    fields["Origin"] = props.p.dataUpdate.Origin
    fields["ProblemType"] =props.p.dataUpdate.ProblemType
    fields["InquiryType"] = props.p.dataUpdate.InquiryType
    fields["CreatedBy"] = props.p.dataUpdate.CreatedBy
    fields["HandledBy"] = props.p.dataUpdate.HandledBy
    fields["Queue"] = props.p.dataUpdate.Queue
    fields["Secretary"] = props.p.dataUpdate.Secretary
    fields["SalesAssistant"] =props.p.dataUpdate.SalesAssistant
    fields["Subject"] =props.p.dataUpdate.Subject
    
    setFields(fields)
    props.p.setfields2({fields})
    console.log(fields)
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


  function handleChange(e:any,f:any) {
    fields[f] = e.target.value;
    handleValidation()
  }

  // function select(e:any,f:any) {
  //   let field=fields
  //   if(!fields[f])
  //     field[f] = "0";
  //   // setfields({Status:"0"})
  //   handleValidation()
  // }

  function handleValidation(){
 
    if(typeof fields["Subject"] === "string"){
      if (fields["Subject"] === "") {
      }  else {
        setFields( fields )
        props.p.setfields2({fields})
      }
    }

    if(typeof fields["InquiryType"] === "string"){
      if (fields["InquiryType"] === "") {
      }  else {
        setFields( fields )
        props.p.setfields2({fields})
      }
    }

    if(typeof fields["CreatedBy"] === "string"){
      if (fields["CreatedBy"] === "") {
      }  else {
        setFields( fields )
        props.p.setfields2({fields})
      }
    }

    
  }
  
  
  const handleChangeSubject = (event: any) => {
    console.log(props)
    console.log(JSON.parse(localStorage.getItem('user') || '{}').email)
    props.p.setSubject(event.target.value)
  };
  const handleChangeOrigin = (event: any) => {
    fields["Origin"] = event.target.value
    setFields(fields)
    props.p.setOrigin(event.target.value)
    
  };
  
  
  const handleChangeProblemType = (event: any) => {
    fields["ProblemType"] = event.target.value
    props.p.setProblemType(event.target.value)
    setFields(fields)
  };
  const handleChangeInquiryType = (event: any) => {
    fields["InquiryType"] = event.target.value
    props.p.setInquiryType(event.target.value)
    setFields(fields)
  };
  const handleChangeCreatedBy = (event: any) => {
    fields["CreatedBy"] = event.target.value
    props.p.setCreatedBy(event.target.value)
    setFields(fields)
  };
  const handleChangeHandledBy = (event: any) => {
    fields["HandledBy"] = event.target.value
    props.p.setHandledBy(event.target.value)
    setFields(fields)
  }
  const handleChangeQueue = (event: any) => {
    fields["Queue"] = event.target.value
    props.p.setQueue(event.target.value)
    setFields(fields)
  }
  const handleChangeSecretary = (event: any) => {
    fields["Secretary"] = event.target.value
    props.p.setSecretary(event.target.value)
    setFields(fields)
  }
  const handleChangeSalesAssistant = (event: any) => {
    fields["SalesAssistant"] = event.target.value
    props.p.setSalesAssistant(event.target.value)
    setFields(fields)
  }
  const handleChangesetDateCreatedOn= (event:any) => {
   // setDateCreatedOn(event)
    props.p.setDateCreatedOn(event)
  }
  const handleChangesetPlanedStartDate= (event:any) => {
    // setPlanedStartDate(event)
    props.p.setPlanedStartDate(event)
  }
  const handleChangesetEstimatedDuration= (event:any) => {
    setEstimatedDate(event)
    props.p.setEstimatedDuration(event)
  }
  const handleChangesetPlanedEndDate= (event:any) => {
  //  setPlannedEndDate(event)
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
              value={fields.Subject}
              onChange={(e) => handleChange(e,"Subject")}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Origin</TextBoxHeader>
            <SelectBox
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // label="Age"
              defaultValue=""
              value={fields.Origin}
              onChange={(e) => handleChange(e,"Origin")}
              // defaultValue={fields["Origin"]}
            >
              <MenuItem value={"Email"}>Email</MenuItem>
              <MenuItem value={'Call'}>Call</MenuItem>
              <MenuItem value={"Web"}>Web</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </SelectBox>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Problem Type</TextBoxHeader>
            <SelectBox
              labelId="demo-simple-select-label2"
              id="demo-simple-select"
              // label="Age"
             // defaultValue={fields["ProblemType"]}
              defaultValue=""
              value={fields.ProblemType}
              onChange={(e) => handleChange(e,"ProblemType")}
            >
              <MenuItem value={"Mechanical"}>Mechanical</MenuItem>
              <MenuItem value={"Electrical"}>Electrical</MenuItem>
              <MenuItem value={"Replacement"}>Replacement</MenuItem>
              <MenuItem value={"Service"}>Service</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </SelectBox>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Inquiry Type</TextBoxHeader>
            <TextBox
                id="outlined-basic1"
                variant="outlined"
                value={fields.InquiryType}
                onChange={(e) => handleChange(e,"InquiryType")}
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
                value={fields.CreatedBy}
                onChange={(e) => handleChange(e,"CreatedBy")}
            />
            {/*<span style={{fontWeight: 'bold'}}>{)} </span>*/}
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Handled By</TextBoxHeader>
            <SelectBox
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // label="Age"
                defaultValue=""
                value={fields.HandledBy}
                onChange={(e) => handleChange(e,"HandledBy")}
            >
              <MenuItem value={"Gayan"}>Gayan</MenuItem>
              <MenuItem value={"Dilini"}>Dilini</MenuItem>
              <MenuItem value={"Poornima"}>Poornima</MenuItem>
              <MenuItem value={"Rukshan"}>Rukshan</MenuItem>
              <MenuItem value={"Pawani"}>Pawani</MenuItem>
              <MenuItem value={"Rasika"}>Rasika</MenuItem>
            </SelectBox>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Cluster Head</TextBoxHeader>
            <SelectBox
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // label="Age"
                defaultValue=""
                value={fields.Queue}
                onChange={(e) => handleChange(e,"Queue")}
            >
              <MenuItem value={"Gayan"}>Gayan</MenuItem>
              <MenuItem value={"Dilini"}>Dilini</MenuItem>
              <MenuItem value={"Poornima"}>Poornima</MenuItem>
              <MenuItem value={"Rukshan"}>Rukshan</MenuItem>
              <MenuItem value={"Pawani"}>Pawani</MenuItem>
              <MenuItem value={"Rasika"}>Rasika</MenuItem>
            </SelectBox>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Secretary</TextBoxHeader>
            <SelectBox
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // label="Age"
              defaultValue=""
              value={fields.Secretary}
              onChange={(e) => handleChange(e,"Secretary")}
            >
              <MenuItem value={"Gayan"}>Gayan</MenuItem>
              <MenuItem value={"Dilini"}>Dilini</MenuItem>
              <MenuItem value={"Poornima"}>Poornima</MenuItem>
              <MenuItem value={"Rukshan"}>Rukshan</MenuItem>
              <MenuItem value={"Pawani"}>Pawani</MenuItem>
              <MenuItem value={"Rasika"}>Rasika</MenuItem>
            </SelectBox>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Sales Assistant</TextBoxHeader>
            <SelectBox
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // label="Age"
              defaultValue=""
              value={fields.SalesAssistant}
              onChange={(e) => handleChange(e,"SalesAssistant")}
            >
              {students.map(( row:DropdownUsers, i: number) => (
              <MenuItem value={row.Value}>{row.UserName}</MenuItem>
              ))}
            </SelectBox>
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
            <TextBoxHeader>Created On</TextBoxHeader>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(params) => <TextBox {...params} />}
                value={fields["CreatedOn"]}
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
            <TextBoxHeader>Planned start Date & Time</TextBoxHeader>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(params:any) => <TextBox {...params} />}
                value={fields["planedStartDate"]}
                onChange={(newValue:any) => {
                  handleChangesetPlanedStartDate((newValue != null ? newValue.toString() : new Date())
                  );
                }}
                className="dateTimePicker"
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Planned End Date & Time</TextBoxHeader>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(params:any) => <TextBox {...params} />}
                value={fields['plannedEndDate']}
                onChange={(newValue:any) => {
                  handleChangesetPlanedEndDate((newValue != null ? newValue.toString() : new Date())
                  );
                }}
                className="dateTimePicker"
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Estimated Duration</TextBoxHeader>
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

export default GeneralTab2;

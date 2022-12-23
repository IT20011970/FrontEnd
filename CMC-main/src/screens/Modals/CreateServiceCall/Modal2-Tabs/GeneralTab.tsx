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
import {ClusterHead, DropdownOrigins, DropdownProblemTypes, DropdownUsers, HandledBy, SalesAssistant, Secretary, Ticket} from "../../../../Types/Types"
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
  const [handledBy, setHandledBy] =useState<any[]>([]);
  const [clusterHead, setClusterHead] =useState<any[]>([]);
  const [secretary, setSecretary] =useState<any[]>([]);
  const [salesAssistant, setSalesAssistant] =useState<any[]>([]);
  const [fields,setFields]=useState<any>({});
  const [errors,seterrors]=useState<any>({})

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

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    };

    fetch('http://localhost:3000/handled-by-controller/get',requestOptions)
        .then(response=>{ return response.json()})
        .then(data=>{
          //console.log(data[3].Groups[1].students)
          // console.log(data)
          setHandledBy(data)
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

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    };

    fetch('http://localhost:3000/secretary-controller/get',requestOptions)
        .then(response=>{ return response.json()})
        .then(data=>{
          //console.log(data[3].Groups[1].students)
          // console.log(data)
          setSecretary(data)
        });
  },[] )

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    };

    fetch('http://localhost:3000/sales-assistant-controller/get',requestOptions)
        .then(response=>{ return response.json()})
        .then(data=>{
          //console.log(data[3].Groups[1].students)
          // console.log(data)
          setSalesAssistant(data)
        });
  },[] )


  function handleChange(e:any,f:any) {
    fields[f] = e.target.value;
    console.log(e)
    handleValidation()
  }

  function select(e:any,f:any) {
    let field=fields
    if(!fields[f])
      field[f] = "0";
    handleValidation()
  }
  // function select(e:any,f:any) {
  //   let field=fields
  //   if(!fields[f])
  //     field[f] = "0";
  //   // setfields({Status:"0"})
  //   handleValidation()
  // }
  // console.log(fields)
  function handleChangeDate(e:any,f:any){
    fields[f] = e;

    let aa:any=new Date(fields["plannedEndDate"])
    let bb:any=new Date(fields["planedStartDate"])
    let difference=aa-bb
    console.log(msToTime(difference))
    fields['Duration']=msToTime(difference)
    handleValidation()
    // setFields( fields )
    // props.p.setfields2({fields})
  }
  function msToTime(millisec:number) {
    var seconds:any = (millisec / 1000).toFixed(0);
    var minutes:any = Math.floor(seconds / 60);
    var hours:any = "";
    if (minutes > 59) {
      hours = Math.floor(minutes / 60);
      hours = (hours >= 10) ? hours : "0" + hours;
      minutes = minutes - (hours * 60);
      minutes = (minutes >= 10) ? minutes : "0" + minutes;
    }

    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    if (hours != "") {
      return hours + "H:" + minutes + "M:" + seconds+"S";
    }
    return minutes + "M:" + seconds;
  }
  function handleValidation(){
    console.log( typeof fields["Duration"])
    console.log(  fields["Duration"])
    if(typeof fields["Subject"] === "string"){
      if (fields["Subject"] === "") {
        errors["Subject"] = "Please Enter Subject ";
        seterrors(errors)
      }  else {
        setFields( fields )
        props.p.setfields2({fields})
        errors["Subject"] = ""
        seterrors(errors)
      }
    }

    if(typeof fields["InquiryType"] === "string"){
      if (fields["InquiryType"] === "") {
        errors["InquiryType"] = "Please Enter Inquiry Type ";
        seterrors(errors)
      }  else {
        setFields( fields )
        props.p.setfields2({fields})
        errors["InquiryType"] = ""
        seterrors(errors)
      }
    }

    if(typeof fields["Duration"] === "string"){
      if (fields["Duration"] === "") {
        errors["Duration"] = "Please Enter Estimated Duration ";
        seterrors(errors)
      }  else {
        setFields( fields )
        props.p.setfields2({fields})
        errors["Duration"] = ""
        seterrors(errors)
      }
    }



    // if(typeof fields["CreatedBy"] === "string"){
    //   if (fields["CreatedBy"] === "") {
    //   }  else {
    //     setFields( fields )
    //     props.p.setfields2({fields})
    //   }
    // }

    if(typeof fields["Origin"] !== "undefined"){
      if (fields["Origin"]==="0") {
        errors["Origin"] = "Please Enter Origin";
        seterrors(errors)
      }
      else{
        errors["Origin"] = ""
        setFields( fields )
        seterrors(errors)
        props.p.setfields2({fields})
      }
    }

    if(typeof fields["ProblemType"] !== "undefined"){
      if (fields["ProblemType"]==="0") {
        errors["ProblemType"] = "Please Enter Problem Type";
        seterrors(errors)
      }
      else{
        errors["ProblemType"] = ""
        setFields( fields )
        seterrors(errors)
        props.p.setfields2({fields})
      }
    }

    if(typeof fields["HandledBy"] !== "undefined"){
      if (fields["HandledBy"]==="0") {
        errors["HandledBy"] = "Please Enter Handled By";
        seterrors(errors)
      }
      else{
        errors["HandledBy"] = ""
        setFields( fields )
        seterrors(errors)
        props.p.setfields2({fields})
      }
    }

    if(typeof fields["Queue"] !== "undefined"){
      if (fields["Queue"]==="0") {
        errors["Queue"] = "Please Enter Queue";
        seterrors(errors)
      }
      else{
        errors["Queue"] = ""
        setFields( fields )
        seterrors(errors)
        props.p.setfields2({fields})
      }
    }
    if(typeof fields["Secretary"] !== "undefined"){
      if (fields["Secretary"]==="0") {
        errors["Secretary"] = "Please Enter Secretary";
        seterrors(errors)
      }
      else{
        errors["Secretary"] = ""
        setFields( fields )
        seterrors(errors)
        props.p.setfields2({fields})
      }
    }
    if(typeof fields["SalesAssistant"] !== "undefined"){
      if (fields["SalesAssistant"]==="0") {
        errors["SalesAssistant"] = "Please Enter Sales Assistant";
        seterrors(errors)
      }
      else{
        errors["SalesAssistant"] = ""
        setFields( fields )
        seterrors(errors)
        props.p.setfields2({fields})
      }
    }
    if(typeof fields["plannedEndDate"] === "string"){
      if (fields["plannedEndDate"] === "0") {
        errors["plannedEndDate"] = "Please Enter Planned End Date";
        seterrors(errors)
      }  else {
        setFields( fields )
        props.p.setfields2({fields})

        errors["plannedEndDate"] = ""
        seterrors(errors)
      }
    }
    if(typeof fields["plannedEndDate"] === "string"){
      if (fields["plannedEndDate"] === "0") {
        errors["plannedEndDate"] = "Please Enter Planned End Date";
        seterrors(errors)
      }  else {
        setFields( fields )
        props.p.setfields2({fields})

        errors["plannedEndDate"] = ""
        seterrors(errors)
      }
    }
    if(typeof fields["planedStartDate"] === "string"){
      if (fields["planedStartDate"] === "0") {
        errors["planedStartDate"] = "Please Enter Planed Start Date";
        seterrors(errors)
      }  else {
        setFields( fields )
        props.p.setfields2({fields})

        errors["planedStartDate"] = ""
        seterrors(errors)
      }
    }
  }


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
              onChange={(e) => handleChange(e,"Subject")}
              onFocus={(e) => handleChange(e,"Subject")}
            />
            <span style={{color: "red"}}>{errors["Subject"]}</span>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Origin</TextBoxHeader>
            <SelectInput
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={(e) => handleChange(e,"Origin")}
              onFocus={(e) => select(e,"Origin")}
              // label="Age"
              defaultValue=""

            >
              {originDropDown.map(( row:DropdownOrigins, i: number) => (
              <MenuItem value={row.OriginName}>{row.OriginName}</MenuItem>
              ))}
              {/* <MenuItem value={"Email"}>Email</MenuItem>
              <MenuItem value={"Call"}>Call</MenuItem>
              <MenuItem value={"Web"}>Web</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem> */}
            </SelectInput>
            <span style={{color: "red"}}>{errors["Origin"]}</span>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Problem Type</TextBoxHeader>
            <SelectInput
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // label="Age"
              defaultValue=""
              onChange={(e) => handleChange(e,"ProblemType")}
              onFocus={(e) => select(e,"ProblemType")}
            >
              {problemTypeDropDown.map(( row:DropdownProblemTypes, i: number) => (
              <MenuItem value={row.ProblemTypeName}>{row.ProblemTypeName}</MenuItem>
              ))}
              {/* <MenuItem value={"Mechanical"}>Mechanical</MenuItem>
              <MenuItem value={"Electrical"}>Electrical</MenuItem>
              <MenuItem value={"Replacement"}>Replacement</MenuItem>
              <MenuItem value={"Service"}>Service</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem> */}
            </SelectInput>
            <span style={{color: "red"}}>{errors["ProblemType"]}</span>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Inquiry Type</TextBoxHeader>
            <TextBox
                id="outlined-basic1"
                variant="outlined"
                onChange={(e) => handleChange(e,"InquiryType")}
                onFocus={(e) => handleChange(e,"InquiryType")}
            />
            <span style={{color: "red"}}>{errors["InquiryType"]}</span>
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
                onChange={(e) => handleChange(e,"CreatedBy")}
                onFocus={(e) => select(e,"CreatedBy")}
            />
            <span style={{color: "red"}}>{errors["CreatedBy"]}</span>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Handled By</TextBoxHeader>
            <SelectInput
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // label="Age"
                defaultValue=""
                onChange={(e) => handleChange(e,"HandledBy")}
                onFocus={(e) => select(e,"HandledBy")}
            >
              {handledBy.map(( row:HandledBy, i: number) => (
              <MenuItem key={row.HandledByCode} value={row.HandledByName}>{row.HandledByName}</MenuItem>
              ))}
              {/* <MenuItem value={"Gayan"}>Gayan</MenuItem>
              <MenuItem value={"Dilini"}>Dilini</MenuItem>
              <MenuItem value={"Poornima"}>Poornima</MenuItem>
              <MenuItem value={"Rukshan"}>Rukshan</MenuItem>
              <MenuItem value={"Pawani"}>Pawani</MenuItem>
              <MenuItem value={"Rasika"}>Rasika</MenuItem> */}
            </SelectInput>
            <span style={{color: "red"}}>{errors["HandledBy"]}</span>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Cluster Head</TextBoxHeader>
            <SelectInput
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // label="Age"
                defaultValue=""
                onChange={(e) => handleChange(e,"Queue")}
                onFocus={(e) => select(e,"Queue")}
            >

              {clusterHead.map(( row:ClusterHead, i: number) => (
              <MenuItem key={row.ClusterHeadCode} value={row.ClusterHeadName}>{row.ClusterHeadName}</MenuItem>
              ))}
            </SelectInput>
            <span style={{color: "red"}}>{errors["Queue"]}</span>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Secretary</TextBoxHeader>
            <SelectInput
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // label="Age"
              defaultValue=""
              onChange={(e) => handleChange(e,"Secretary")}
              onFocus={(e) => select(e,"Secretary")}
            >
              {secretary.map(( row:Secretary, i: number) => (
              <MenuItem key={row.SecretaryCode} value={row.SecretaryName}>{row.SecretaryName}</MenuItem>
              ))}
              {/* <MenuItem value={"Gayan"}>Gayan</MenuItem>
              <MenuItem value={"Dilini"}>Dilini</MenuItem>
              <MenuItem value={"Poornima"}>Poornima</MenuItem>
              <MenuItem value={"Rukshan"}>Rukshan</MenuItem>
              <MenuItem value={"Pawani"}>Pawani</MenuItem>
              <MenuItem value={"Rasika"}>Rasika</MenuItem> */}
            </SelectInput>
            <span style={{color: "red"}}>{errors["Secretary"]}</span>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Sales Assistant</TextBoxHeader>
            <SelectInput
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // label="Age"
              defaultValue=""
              onChange={(e) => handleChange(e,"SalesAssistant")}
              onFocus={(e) => select(e,"SalesAssistant")}
            >
              {salesAssistant.map(( row:SalesAssistant, i: number) => (
              <MenuItem key={row.SalesAssistantCode} value={row.SalesAssistantName}>{row.SalesAssistantName}</MenuItem>
              ))}
            </SelectInput>
            <span style={{color: "red"}}>{errors["SalesAssistant"]}</span>
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
                renderInput={(params:any) => <TextBox   onFocus={(e) => select(e,"planedStartDate")} {...params} />}
                value={fields["planedStartDate"]}
                onChange={(newValue:any) => {
                  handleChangeDate((newValue != null ? newValue.toString() : new Date()),"planedStartDate"
                  );
                }}
                className="dateTimePicker"
              />
            </LocalizationProvider>
            <span style={{color: "red"}}>{errors["planedStartDate"]}</span>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Planned End Date & Time <span style={{color:'red'}}>*</span></TextBoxHeader>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(params:any) => <TextBox  onFocus={(e) => select(e,"plannedEndDate")} {...params} />}
                value={fields["c"]}
                onChange={(newValue:any) => {
                  handleChangeDate((newValue != null ? newValue.toString() : new Date()),"plannedEndDate"
                  );
                }}
                className="dateTimePicker"
              />
            </LocalizationProvider>
            <span style={{color: "red"}}>{errors["plannedEndDate"]}</span>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Estimated Duration <span style={{color:'red'}}>*</span></TextBoxHeader>
              <TextBox
                  id="outlined-basic1"
                  variant="outlined"
                  onChange={(e) => handleChange(e,"Duration")}
                  onFocus={(e) => handleChange(e,"Duration")}
                  value={fields['Duration']}
              />
            <span style={{color: "red"}}>{errors["Duration"]}</span>
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

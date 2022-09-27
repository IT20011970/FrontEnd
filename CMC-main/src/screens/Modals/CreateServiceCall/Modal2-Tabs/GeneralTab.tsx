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


const GeneralTab = (props: any) => {
  const [age, setAge] = React.useState("");
  const [CreatedOn, setDateCreatedOn] = React.useState(new Date());
  const [planedStartDate, setPlanedStartDate] = React.useState(new Date());
  const [estimatedDate, setEstimatedDate] = React.useState(new Date());
  const [plannedEndDate, setPlannedEndDate] = React.useState(new Date());
  const [actualStartDate, setActualStartDate] = React.useState(new Date());
  const [actualEndDate, setActualEndDate] = React.useState(new Date());


  const handleChangeSubject = (event: any) => {
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
              placeholder="Text (default)"
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
              <MenuItem value={"Email"}>Email</MenuItem>
              <MenuItem value={"Call"}>Call</MenuItem>
              <MenuItem value={"Web"}>Web</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
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
              <MenuItem value={"Mechanical"}>Mechanical</MenuItem>
              <MenuItem value={"Electrical"}>Electrical</MenuItem>
              <MenuItem value={"Replacement"}>Replacement</MenuItem>
              <MenuItem value={"Service"}>Service</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </SelectInput>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Inquiry Type</TextBoxHeader>
            <SelectInput
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // label="Age"
              defaultValue=""
              onChange={handleChangeInquiryType}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
            <TextBoxHeader>Created By</TextBoxHeader>
            <TextBox
                id="outlined-basic1"
                variant="outlined"
                placeholder="Text (default)"
                value={JSON.parse(localStorage.getItem('user') || '{}').email}
                onChange={handleChangeCreatedBy}
            />
            {/*<span style={{fontWeight: 'bold'}}>{)} </span>*/}
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Handled By</TextBoxHeader>
            <TextBox
                id="outlined-basic1"
                variant="outlined"
                placeholder="Text (default)"
                onChange={handleChangeHandledBy}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Queue</TextBoxHeader>
            <SelectInput
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // label="Age"
              defaultValue=""
              onChange={handleChangeQueue}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={2}>3</MenuItem>
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
              <MenuItem value={10001}>10001</MenuItem>
              <MenuItem value={10002}>10002</MenuItem>
              <MenuItem value={10003}>10003</MenuItem>
              <MenuItem value={10004}>10004</MenuItem>
              <MenuItem value={10005}>10005</MenuItem>
              <MenuItem value={10006}>10006</MenuItem>
              <MenuItem value={10007}>10007</MenuItem>
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
              <MenuItem value={10001}>10001</MenuItem>
              <MenuItem value={10002}>10002</MenuItem>
              <MenuItem value={10003}>10003</MenuItem>
              <MenuItem value={10004}>10004</MenuItem>
              <MenuItem value={10005}>10005</MenuItem>
              <MenuItem value={10006}>10006</MenuItem>
              <MenuItem value={10007}>10007</MenuItem>

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
            <TextBoxHeader>Created On</TextBoxHeader>
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
            <TextBoxHeader>Planned start Date & Time</TextBoxHeader>
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
            <TextBoxHeader>Planned End Date & Time</TextBoxHeader>
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
            <TextBoxHeader>Actual Start Date</TextBoxHeader>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(params:any) => <TextBox {...params} />}
                value={actualStartDate}
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

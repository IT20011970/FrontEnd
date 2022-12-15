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
import ViewScheduling from "../ViewScheduling";
import ViewScheduling2 from "../ViewScheduling2";

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
  // console.log(props)
  const [age, setAge] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [fields, setfields] = useState<any>({})
  const Service =useContext(ServiceContext)
  const [openModal, setOpenModal] = React.useState(false);

  function handleChangeField(event:any,data:any) {
    fields[data] = event;
   // console.log(fields["PlanedStart"])
  //  console.log(fields["PlanedEnd"])
         let aa:any=new Date(fields["PlanedEnd"])
        let bb:any=new Date(fields["PlanedStart"])
    let difference=aa-bb
      console.log(msToTime(difference))
    fields['Duration']=msToTime(difference)
   console.log(aa-bb)
    setfields(fields)
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
    // console.log(msToTime(300000))

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
              value={fields["PlanedStart"]}
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
            value={fields['Duration']}
          />
        </Grid>
        <Grid item xs={4} md={4}>
          <TextBoxHeader>Planned End Date & Time</TextBoxHeader>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
                renderInput={(params:any) => <TextBox {...params} />}
                value={fields["PlanedEnd"]}
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
            sx={{ width: "300px"}}
            onClick={e=>setOpenModal(true)}
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
          <TextBoxHeader>Address</TextBoxHeader>
          <TextBox
              id="outlined-basic"
              variant="outlined"
              value={props.props.serviceCallData.fields.ServiceCallId}
              placeholder="Text (default)"
          />
        </Grid>

      </Grid>
      <ViewScheduling2 props={props} open={openModal} setOpen={setOpenModal}/>
    </Box>
  );
};

export default ScheduluingTab;

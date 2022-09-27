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

const CreateServiceCallModal1 = (props: any) => {
  const [age, setAge] = React.useState("");
  const [date, setDate] = React.useState(new Date());

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ marginTop: "-30px" }}>
        <Grid item xs={6} md={3}>
          <TextBoxHeader>Planned Start Date & Time</TextBoxHeader>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(params:any) => <TextBox {...params} />}
              value={date}
              onChange={(newValue:any) => {
                setDate(
                  new Date(newValue != null ? newValue.toString() : new Date())
                );
              }}
              className="dateTimePicker"
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={6} md={3}>
          <TextBoxHeader>Estimated Duration</TextBoxHeader>
          <TextBox
            id="outlined-basic"
            variant="outlined"
            placeholder="Text (default)"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextBoxHeader>Planned End Date & Time</TextBoxHeader>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(params:any) => <TextBox {...params} />}
              value={date}
              onChange={(newValue:any) => {
                setDate(
                  new Date(newValue != null ? newValue.toString() : new Date())
                );
              }}
              className="dateTimePicker"
            />
          </LocalizationProvider>
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
          <SelectInput
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            // label="Age"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </SelectInput>
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

export default CreateServiceCallModal1;

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
  const [date, setDate] = React.useState(new Date());

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={6} md={4}>
            <TextBoxHeader>Created On</TextBoxHeader>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(params:any) => <TextBox {...params} />}
                value={date}
                onChange={(newValue:any) => {
                  setDate(
                    new Date(
                      newValue != null ? newValue.toString() : new Date()
                    )
                  );
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
                value={date}
                onChange={(newValue:any) => {
                  setDate(
                    new Date(
                      newValue != null ? newValue.toString() : new Date()
                    )
                  );
                }}
                className="dateTimePicker"
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} md={4}>
            <TextBoxHeader>Estimated Duration</TextBoxHeader>
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
          <Grid item xs={6} md={4}>
            <TextBoxHeader>Planned End Date & Time</TextBoxHeader>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(params:any) => <TextBox {...params} />}
                value={date}
                onChange={(newValue:any) => {
                  setDate(
                    new Date(
                      newValue != null ? newValue.toString() : new Date()
                    )
                  );
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
                value={date}
                onChange={(newValue:any) => {
                  setDate(
                    new Date(
                      newValue != null ? newValue.toString() : new Date()
                    )
                  );
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
                value={date}
                onChange={(newValue:any) => {
                  setDate(
                    new Date(
                      newValue != null ? newValue.toString() : new Date()
                    )
                  );
                }}
                className="dateTimePicker"
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} md={4}>
            <TextBoxHeader>Contact Person</TextBoxHeader>
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
        </Grid>
      </Box>
    </>
  );
};

export default GeneralTab;

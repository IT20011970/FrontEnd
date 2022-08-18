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
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
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

const LinkedDocumentsTab = (props: any) => {
  const [age, setAge] = React.useState("");
  const [date, setDate] = React.useState(new Date());

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={6} md={4}>
            <TextBoxHeader>Document Type</TextBoxHeader>
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
            <TextBoxHeader>Document No</TextBoxHeader>
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
            <br />
            <FormControlLabel
              control={<Checkbox />}
              label="Show Documents Related to the Customer"
            />
          </Grid>

          <Grid item xs={6} md={4}>
            <TextBoxHeader>Source Object Type</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <TextBoxHeader>Source Object No</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
            />
          </Grid>

          <Grid item xs={6} md={4}>
            <TextBoxHeader>Previous Ticket</TextBoxHeader>
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

export default LinkedDocumentsTab;

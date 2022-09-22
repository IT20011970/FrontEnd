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
import "../../../Styles/Modal.css";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { Table, TableBody, TableCell, tableCellClasses, TableContainer, TableRow } from "@mui/material";
import TableHead from "@material-ui/core/TableHead/TableHead";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



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
  borderRadius: "8px",
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
  padding: theme.spacing(0),
  textAlign: "center",
  boxShadow: "none",
  fontFamily: "Montserrat",
  fontSize: 14,
  fontWeight: 400,
  color: "#383838",
  borderRadius: "4px",
  height: "40px",
  boxSizing: "content-box",
//   // "& .MuiSelect-select": {
//   //   borderRadius: "4px",
//   //   height: "40px",
//   //   width: "auto",
//   //   // padding: "10px",
//   // },
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
  borderRadius: "4px",
  width: "95%",
  height: "40px",
  // minWidth: "250px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "4px",
    height: "40px",
    width: "auto",
    // padding: "10px",
  },
}));

const ModalButton = styled(Button)(({ theme }) => ({
  width: "90px",
  height: "auto",
  borderRadius: "2px",
  cursor: "pointer",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: 600,
  float: "right",
  padding: "7px",
  boxShadow: "none",
}));

const Modal = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

// const ModalTittle = styled("text")(({ theme }) => ({
//   fontFamily: "Montserrat",
//   fontSize: 24,
//   fontWeight: 700,
// }));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalTittle = styled("text")(({ theme }) => ({
  fontFamily: "Montserrat",
  fontSize: 24,
  fontWeight: 700,
}));

const CreateSparePartsTab2 = (props: any) => {

  const { open, setOpen } = props;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [age, setAge] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  const handleChangeItemCode = (event: any) => {
    props.setItemCode(event.target.value)
  };
  const handleChangeMRF = (event: any) => {
    props.setChangeMRF(event.target.value)
  };
  const handleChangeSerialNumber = (event: any) => {
    props.setIChangeSerialNumber(event.target.value)
  };
  const handleChangeItemDescription = (event: any) => {
    props.setItemDescription(event.target.value)
  };
  const handleChangeItemGroup = (event: any) => {
    props.setItemGroup(event.target.value)
  };
  const handleChangeCustomerID = (event: any) => {
    props.setCustomerID(event.target.value)
  };
  const handleChangeContactPerson = (event: any) => {
    props.setContactPerson(event.target.value)
  };
  const handlChangeAddress = (event: any) => {
    props.setAddress(event.target.value)
  };
  const handleChangeTelephoneNo = (event: any) => {
    props.setTelephoneNo(event.target.value)
  };
  const handleChangeStatus = (event: any) => {
    props.setChangeStatus(event.target.value);
  };
  const handleChangeServiceCallId = (event: any) => {
    props.setChangeServiceCallId(event.target.value)
  };
  const handleChangePriority = (event: any) => {
    props.setChangePriority(event.target.value)
  };
  const handleChangeCustomerName = (event: any) => {
    props.setCustomerName(event.target.value)
  };



//   const stidRegex = RegExp(
//     /^[0-9]{1,5}$/
//   );
  
//   const formValid = formErrors =>{
//     let valid = true;

//     Object.values(formErrors).forEach(val => {
//         val.length > 0 && (valid = false)
//     });
//     return valid;
// };

//   handleInputChange = (e) => {
//     const { name, value } = e.target;

//     let formErrors = this.state.formErrors;

//     switch(name){
//         case "stid":
//             formErrors.email = stidRegex.test(value) ? ""
//             : "invalid email address";
//             break;
//             default:
//               break;
//     }

//     this.setState({formErrors, [name]:value}, ()=>console.log(this.state));

//     this.setState({
//         ...this.state,
//         [name]: value
//     })
//   }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Spare Part Request ID</TextBoxHeader>
            <TextBox
              // name="stid"
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)" required
              sx={{ width: "99%" }} 
              onChange={handleChangeItemCode}
            
              // {formErrors.name.length != 10 && (
              //   <span className="errorMessage">{formErrors.name}</span>
              //   )} 
            /><br></br><hr></hr>
          </Grid>
          <br></br>
          <Grid>
            <br></br>  <br></br>  <br></br>  <br></br>   <br></br>  <br></br>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Spare Part ID</StyledTableCell>
            <StyledTableCell align="right">Spare Part Description</StyledTableCell>
            <StyledTableCell align="right">Remarks&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Available Qty&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Request Qty&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Service Ticket Type</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              sx={{ width: "99%" }}
              onChange={handleChangeMRF}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Subject</TextBoxHeader>
            <SelectInput
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                 variant="outlined"
                placeholder="Text (default)"
                  >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </SelectInput>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Assigned To</TextBoxHeader>
            <TextBox
                id="outlined-basic"
                variant="outlined"
                placeholder="Text (default)"
                sx={{ width: "99%" }}
                onChange={handleChangeItemDescription}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Planned start Date</TextBoxHeader>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                  renderInput={(params:any) => <TextBox {...params} />}
                  value={new Date()}
                  onChange={(newValue:any) => {
                    console.log((newValue != null ? newValue.toString() : new Date())
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

        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Service Call ID</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              sx={{ width: "99%" }}
              onChange={handleChangeCustomerID}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Item Code</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              sx={{ width: "99%" }}
              onChange={handleChangeCustomerName}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Item Description</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              sx={{ width: "99%" }}
              onChange={handleChangeContactPerson}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Customer Name</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              sx={{ width: "99%" }}
              onChange={handleChangeContactPerson}
            />
          </Grid>
        </Grid>
        <Divider
          orientation="horizontal"
          variant="middle"
          flexItem
          sx={{ marginTop: "30px" }}
        />
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Remark</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              sx={{ width: "415%" }}
              onChange={handleChangeTelephoneNo}
            />
          </Grid>
         
        </Grid>

        <Grid item xs={6} md={3}>
            <TextBoxHeader>Content</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              sx={{ width: "400%" }}
              onChange={handlChangeAddress}
            />
          </Grid>
     
        <Grid container spacing={2}>
          
        <Grid item xs={6} md={3}>
            <TextBoxHeader>Secretary</TextBoxHeader>
            <SelectInput
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                placeholder="Text (default)"
                // label="Age"

            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </SelectInput>
          </Grid>

                   

          {/*<Grid item xs={6} md={3}>*/}
          {/*  <TextBoxHeader>Status</TextBoxHeader>*/}
          {/*  <SelectBox*/}
          {/*    labelId="demo-simple-select-label"*/}
          {/*    id="demo-simple-select"*/}
          {/*    value={age}*/}
          {/*    onChange={handleChangeStatus}*/}
          {/*    sx={{ width: "99%" }}*/}
          {/*  >*/}
          {/*    <MenuItem value={10}>Ten</MenuItem>*/}
          {/*    <MenuItem value={20}>Twenty</MenuItem>*/}
          {/*    <MenuItem value={30}>Thirty</MenuItem>*/}
          {/*  </SelectBox>*/}
          {/*</Grid>*/}
          
        </Grid>

        
      </Box>

                  <br></br>
      <Grid item xs={7} md={0.65}>
      <Button
                    variant="contained"
                    className="ModalCommonButton"
                     sx={{ width: "500%" }}
                     //margin-left="2%"
                    // margin-right:25%
                    
                      // onClick={post}
                    >
                      View Service Ticket Details
        </Button>
        </Grid>


    </>
  );
};

export default CreateSparePartsTab2;

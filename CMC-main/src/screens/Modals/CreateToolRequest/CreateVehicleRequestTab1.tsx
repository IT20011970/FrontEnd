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
import {useState} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Pagination from "@mui/material/Pagination";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";



import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
    TablePaginationActionsProps,
    SparePartsRequestListData, ServiceCallData, ServiceCallData2, Ticket,
} from "../../../Types/Types";
import "./../../../Styles/Tabs.css";


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



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: "#383838",
    backgroundColor: "#fff",
    fontWeight: 600,
    fontSize: 14,
    fontFamily: "Montserrat",
    textAlign: "left",
    borderBottom: "2px solid rgba(0, 65, 102, 0.2);",
    lineHeight: "1.5",
    padding: 7,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: 400,
    fontFamily: "Segoe UI",
    color: "#383838",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "rgba(0, 32, 51, 0.05)",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    borderBottom: 0,
  },
  td: {
    borderBottom: 0,
    padding: 7,
    // lineHeight: "0.5",
    // borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
  },
}));




const CreateVehicleRequestTab1 = (props: any) => {
  React.useEffect(() => {
 
  });

  const { open, setOpen } = props;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  
  const [fields, setfields] = useState<any>({});
  const [errors,seterrors]=useState<any>({})
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
const [page, setPage] = React.useState(0);
const [students, setStudents] =useState<any[]>([]);

  // const handleChange = (event: any) => {
  //   setAge(event.target.value);
  // };

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

  function handleChange(e:any,f:any) {
    // let field=fields
    fields[f] = e.target.value;
    handleValidation()
  }


  function select(e:any,f:any) {
    let field=fields
    if(!fields[f])
      field[f] = "0";
    handleValidation()
  }

  function handleValidation(){
    console.log(fields)
    
    // Ticket ID
    // if(typeof fields["TicketID"] === "string"){
    //
    //   if (fields["TicketID"] === "") {
    //     errors["TicketID"] = "Please Enter Ticket ID";
    //     seterrors(errors)
    //   }  
    //   else {
    //     errors["TicketID"] = ""
    //     seterrors(errors)
    //     const requestOptions = {
    //       method: 'GET',
    //       headers: {'Content-Type': 'application/json'}
    //     };
    //     fetch('http://localhost:3000/spare-parts/'+fields["TicketID"],requestOptions)
    //         .then(response=>{ return response.json()})
    //         .then(data=>{
    //           if(data.statusCode===404){
    //             setfields(fields)
    //             props.setfields({fields})
    //           }
    //           else{
    //             console.log(data)
    //             fields["TicketType"] = data.TicketType
    //             fields["Subject"] = data.Subject
    //             fields["ServiceCallId"] = data.serviceCall.ServiceCallId
    //             fields["AssignedTo"] = data.AssignedTo
    //             fields["ItemCode"] = data.serviceCall.itemEntity.ItemCode
    //             fields["ItemDescription"] = data.serviceCall.itemEntity.ItemDescription
    //             fields["CustomeName"] = data.serviceCall.customerEntity.CustomeName
    //             setfields(fields)
    //             props.setfields({fields})
    //             // setfields( {CustomerID:data.CustomerId,ContactPerson:data.ContactPerson,CustomerName:data.CustomeName,TelephoneNo:data.TelephoneNo,AddressId:data.CustomerAddressId} )
    //           }
    //
    //         })
    //   }
    // }



    if (fields["TicketID"] === "") {
      errors["TicketID"] = "Please Enter Item Code";
      seterrors(errors)
    }  else {
      errors["TicketID"] = ""
      seterrors(errors)
      const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      };
      fetch('http://localhost:3000/spare-parts/'+fields["TicketID"],requestOptions)
          .then(response=>{ return response.json()})
          .then(data=>{
            if(data.statusCode===404){
              setfields(fields)
            }
            else{
              fields["TicketType"] = data.TicketType
              fields["Subject"] = data.Subject
              fields["ServiceCallId"] = data.serviceCall.ServiceCallId
              fields["AssignedTo"] = data.AssignedTo
              fields["ItemCode"] = data.serviceCall.itemEntity.ItemCode
              fields["ItemDescription"] = data.serviceCall.itemEntity.ItemDescription
              fields["CustomeName"] = data.serviceCall.customerEntity.CustomeName
              setfields(fields)
              console.log(fields)
            }

          })
    }


    //Resolution
    if(typeof fields["Remark"] === "string"){
      if (fields["Remark"]==="") {
        errors["Remark"] = "Please Enter Resolution ";
        seterrors(errors)
      }
      else if (!fields["Remark"].match(/^[a-zA-Z\s]+$/)) {
        errors["Remark"] = "Only letters ";
        seterrors(errors)
      }
      else{
        errors["Remark"] = ""
        setfields( fields )
        props.setfieldsSpare({fields})
        seterrors(errors)
      }
    }
    //Content
    if(typeof fields["Content"] === "string"){
      if (fields["Content"]==="") {
        errors["Content"] = "Please Enter Content ";
        seterrors(errors)
      }
      else if (!fields["Content"].match(/^[a-zA-Z\s]+$/)) {
        errors["Content"] = "Only letters ";
        seterrors(errors)
      }
      else{
        errors["Content"] = ""
        setfields( fields )
        props.setfieldsSpare({fields})
        seterrors(errors)
      }
    }
    //TicketType
    if(typeof fields["Secretary"] === "string"){
      if (fields["Secretary"]==="") {
        errors["Secretary"] = "Please Enter Secretary ";
        seterrors(errors)
      }
      else{
        errors["Secretary"] = ""
        setfields( fields )
        props.setfieldsSpare({fields})
        seterrors(errors)
      }
    }
    if(typeof fields["TicketType"] === "string"){
      if (fields["TicketType"]==="") {
        errors["TicketType"] = "Please Enter Ticket Type ";
        seterrors(errors)
      }
      else{
        errors["TicketType"] = ""
        setfields( fields )
        props.setfieldsSpare({fields})
        seterrors(errors)
      }
    }
    //
    if(typeof fields["ItemDescription"] === "string"){
      if (fields["TicketType"]==="") {
        errors["TicketType"] = "Please Enter Item Description";
        seterrors(errors)
      }
      else{
        errors["ItemDescription"] = ""
        setfields( fields )
        props.setfieldsSpare({fields})
        seterrors(errors)
      }
    }
    
    
    //Begin
    console.log(props.valueNext)
    // if(props.valueNext==="true") {
    //   if(typeof fields["ItemCode"] !== "string") {
    //     errors["ItemCode"] = "Please Enter Item Code ";
    //     seterrors(errors)
    //   }
    //   if(typeof fields["MRF"] !== "string") {
    //     errors["MRF"] = "Please Enter MRF ";
    //     seterrors(errors)
    //   }
    //   if(typeof fields["SerialNumber"] !== "string") {
    //     errors["SerialNumber"] = "Please Enter Serial Number ";
    //     seterrors(errors)
    //   }
    //   if(typeof fields["ItemDescription"] !== "string") {
    //     errors["ItemDescription"] = "Please Enter Item Description ";
    //     seterrors(errors)
    //   }
    //   if(typeof fields["ItemGroup"] !== "string") {
    //     errors["ItemGroup"] = "Please Enter Item Group ";
    //     seterrors(errors)
    //   }
    //   if(typeof fields["CustomerID"] !== "string") {
    //     errors["CustomerID"] = "Please Enter Customer ID ";
    //     seterrors(errors)
    //   }
    //   if(typeof fields["CustomerName"] !== "string") {
    //     errors["CustomerName"] = "Please Enter Customer Name ";
    //     seterrors(errors)
    //   }
    //   if(typeof fields["ContactPerson"] !== "string") {
    //     errors["ContactPerson"] = "Please Enter Contact Person ";
    //     seterrors(errors)
    //   }
    //   if(typeof fields["TelephoneNo"] !== "string") {
    //     errors["TelephoneNo"] = "Please Enter Telephone No ";
    //     seterrors(errors)
    //   }
    //   if(typeof fields["AddressId"] !== "string") {
    //     errors["AddressId"] = "Please Enter Address Id ";
    //     seterrors(errors)
    //   }
    //   if(typeof fields["CustomerName"] !== "string") {
    //     errors["CustomerName"] = "Please Enter Customer Name ";
    //     seterrors(errors)
    //   }
    //   // if(typeof fields["ServiceCallId"] !== "string") {
    //   //   errors["ServiceCallId"] = "Please Enter ServiceCall Id";
    //   //   seterrors(errors)
    //   // }
    //   if(typeof fields["Status"] !== "string") {
    //     errors["Status"] = "Please Enter Status ";
    //     seterrors(errors)
    //   }
    //   if(typeof fields["Priority"] !== "string") {
    //     errors["Priority"] = "Please Enter Priority ";
    //     seterrors(errors)
    //   }
    // }
  }

  

  return (
    <>
      <Box sx={{ flexGrow: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <TextBoxHeader>Vehicle ID</TextBoxHeader>
            <TextBox
              // name="stid"
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              name="TicketId"
              sx={{ width: "99%" }}
              onChange={(e) => handleChange(e,"TicketID") }
              onFocus={(e) => handleChange(e,"TicketID") }
              
            />
            <span style={{color: "red"}}>{errors["TicketID"]}</span>
          </Grid>
          <Grid item xs={6} md={4}>
            <TextBoxHeader>Vehicle Type</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              value={fields['TicketType']}
              sx={{ width: "99%" }}
              
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <TextBoxHeader>Vehicle Request ID</TextBoxHeader>
            <TextBox
                id="outlined-basic"
                variant="outlined"
                placeholder="Text (default)"
                value={fields['Subject']}
                sx={{ width: "99%" }}
            />
            <span style={{color: "red"}}>{errors["Subject"]}</span>
          </Grid>
          
          
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <TextBoxHeader>Vehicle Description</TextBoxHeader>
            <TextBox
              // name="stid"
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              name="TicketId"
              sx={{ width: "99%" }}
              onChange={(e) => handleChange(e,"TicketID") }
              onFocus={(e) => handleChange(e,"TicketID") }
              
            />
            <span style={{color: "red"}}>{errors["TicketID"]}</span>
          </Grid>
          <Grid item xs={6} md={4}>
            <TextBoxHeader>Vehicle Capacity</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              value={fields['TicketType']}
              sx={{ width: "99%" }}
              
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <TextBoxHeader>Vehicle Request Status</TextBoxHeader>
            <TextBox
                id="outlined-basic"
                variant="outlined"
                placeholder="Text (default)"
                value={fields['Subject']}
                sx={{ width: "99%" }}
            />
            <span style={{color: "red"}}>{errors["Subject"]}</span>
          </Grid>
          
          
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <TextBoxHeader>Plate No.</TextBoxHeader>
            <TextBox
              // name="stid"
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              name="TicketId"
              sx={{ width: "99%" }}
              onChange={(e) => handleChange(e,"TicketID") }
              onFocus={(e) => handleChange(e,"TicketID") }
              
            />
            <span style={{color: "red"}}>{errors["TicketID"]}</span>
          </Grid>
          <Grid item xs={6} md={4}>
            
            
            <ModalButton
                    variant="contained"
                    className="ModalCommonButton"
                     sx={{ width: "99%" ,marginTop:"13%"}}
                     //margin-left="2%"
                    // margin-right:25%
                    
                      // onClick={post}
                      onClick={()=>window.location.href='/Calendar'}
                    >
                      Check Vehicle Calender
                      
        </ModalButton>
          </Grid>
                   
          
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
          <TextBoxHeader>Created Date & Time</TextBoxHeader>
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
          <Grid item xs={6} md={8}>
          <TextBoxHeader>Remark</TextBoxHeader>
            <TextField
                                id="outlined-multiline-static"
                                // label="Multiline"
                                multiline
                                rows={2}
                                sx={{width: "100%"}}
                                placeholder="Textarea (default)"
                                // defaultValue="Default Value"
                            />
          </Grid>
          
                        
          
        </Grid>
        <Grid item xs={6} md={3}>
            <TextBoxHeader>Request Date & Time</TextBoxHeader>
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
          <Grid item xs={6} md={3}>
            <TextBoxHeader>No of Days</TextBoxHeader>
            <SelectInput
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                placeholder="Text (default)"
                onChange={(e) => handleChange(e,"Secretary") }
                onFocus={(e) => handleChange(e,"Secretary") }

            >
              <MenuItem value={"1"}>1</MenuItem>
              <MenuItem value={"2"}>2</MenuItem>
              <MenuItem value={"3"}>3</MenuItem>
              <MenuItem value={"4"}>4</MenuItem>
              <MenuItem value={"5"}>5</MenuItem>
              <MenuItem value={"6"}>6</MenuItem>
            </SelectInput>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Handover Date & Time</TextBoxHeader>
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
          
        <Divider
          orientation="horizontal"
          variant="middle"
          flexItem
          sx={{ marginTop: "30px" }}
        />

        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Service Ticket</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              sx={{ width: "99%" }}
              value={fields['ServiceCallId']}
            />
            <span style={{color: "red"}}>{errors["ServiceCallId"]}</span>
          </Grid>


          </Grid> 


          


          <br></br>
          <Grid container spacing={2}>
          <Grid item xs={6} md={12}>

         
          <Box sx={{ flexGrow: 1 }}>
        <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
          <Table sx={{ width: "100%" }} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <StyledTableCell
                    sx={{
                      borderLeft: "none",
                    }}
                >
                  Date
                </StyledTableCell>
                <StyledTableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                    }}
                >
                  Engineer
                </StyledTableCell>
                <StyledTableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                    }}
                >
                  Priority
                </StyledTableCell>
                <StyledTableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                    }}
                >
                  Planned Start
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                      ? students.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                      )
                      : students
              ).map((row: Ticket, i: number) => (
                  <StyledTableRow key={Math.random()}>
                    <StyledTableCell
                        sx={{
                          borderLeft: "none",
                        }}
                    >
                      {/* {moment(row.CreatedOn).format("DD/MM/YYYY")} */}
                    </StyledTableCell>
                    <StyledTableCell
                        sx={{
                          borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                        }}
                    >
                      {row.AssignedTo}
                    </StyledTableCell>
                    <StyledTableCell
                        sx={{
                          borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                        }}
                    >
                      {row.serviceCall.Priority}
                    </StyledTableCell>
                    <StyledTableCell
                        sx={{
                          borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                        }}
                    >
                      {row.PlannedStartDate}
                    </StyledTableCell>
                    
                  </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
       
      
      </Box>
          
      </Grid>          
        </Grid> 




          {/* <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Tool Request ID</StyledTableCell>
                                  
                                    <StyledTableCell align="right">Tool Description</StyledTableCell>
                                    <StyledTableCell align="right">Created Date</StyledTableCell>
                                    <StyledTableCell align="right">Requested Date</StyledTableCell>
                                    <StyledTableCell align="right">Handover Date</StyledTableCell>
                                    <StyledTableCell align="right">Status</StyledTableCell>
                                    <StyledTableCell align="right">More</StyledTableCell>
                                    <StyledTableCell align="right"></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {(rowsPerPage > 0
                                        ? students.slice(
                                            page * rowsPerPage,
                                            page * rowsPerPage + rowsPerPage
                                        )
                                        : students
                                ).map(( row:ServiceCallData2, i: number) => (
                                    <StyledTableRow key={row.ServiceCallId}>
                                        <StyledTableCell
                                            sx={{
                                                borderLeft: "none",
                                            }}
                                        >
                                            {row.ServiceCallId}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row.itemEntity.ItemDescription}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row.customerEntity.CustomeName}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row.Status}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row.CreatedOn}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row.Priority}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row.Subject}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <Stack
                                                direction="row"
                                                justifyContent="center"
                                                alignItems="flex-start"
                                                spacing={0}
                                            >
                                                <ControlButton disableRipple>
                                                    <svg
                                                        width="21"
                                                        height="21"
                                                        viewBox="0 0 21 21"
                                                        className="controlButton"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M10.5 13.125C11.9497 13.125 13.125 11.9497 13.125 10.5C13.125 9.05025 11.9497 7.875 10.5 7.875C9.05025 7.875 7.875 9.05025 7.875 10.5C7.875 11.9497 9.05025 13.125 10.5 13.125Z" />
                                                        <path d="M20.3046 10.2769C19.5327 8.28033 18.1928 6.55372 16.4503 5.31043C14.7078 4.06715 12.6392 3.36169 10.5002 3.28125C8.36117 3.36169 6.29259 4.06715 4.55012 5.31043C2.80766 6.55372 1.46769 8.28033 0.695834 10.2769C0.643706 10.4211 0.643706 10.5789 0.695834 10.7231C1.46769 12.7197 2.80766 14.4463 4.55012 15.6896C6.29259 16.9329 8.36117 17.6383 10.5002 17.7188C12.6392 17.6383 14.7078 16.9329 16.4503 15.6896C18.1928 14.4463 19.5327 12.7197 20.3046 10.7231C20.3567 10.5789 20.3567 10.4211 20.3046 10.2769ZM10.5002 14.7656C9.65655 14.7656 8.83183 14.5155 8.13036 14.0467C7.42888 13.578 6.88214 12.9118 6.55929 12.1324C6.23643 11.3529 6.15196 10.4953 6.31655 9.66782C6.48114 8.84037 6.8874 8.08031 7.48396 7.48375C8.08051 6.88719 8.84058 6.48093 9.66803 6.31634C10.4955 6.15175 11.3532 6.23622 12.1326 6.55908C12.912 6.88193 13.5782 7.42867 14.0469 8.13015C14.5157 8.83162 14.7658 9.65634 14.7658 10.5C14.7641 11.6308 14.3141 12.7148 13.5145 13.5143C12.715 14.3139 11.631 14.7639 10.5002 14.7656Z" />
                                                    </svg>
                                                </ControlButton>
                                                
                                            </Stack>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))} */}
                                {/* {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}
                            {/* </TableBody>
                        </Table>
                    </TableContainer>*/}
                    
      
        
        <Divider
          orientation="horizontal"
          variant="middle"
          flexItem
          sx={{ marginTop: "30px" }}
        />
        <Grid container spacing={2}>
          {/* <Grid item xs={6} md={3}>
            <TextBoxHeader>Resolution</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              sx={{ width: "415%" }}
              onChange={(e) => handleChange(e,"Resolution") }
              onFocus={(e) => handleChange(e,"Resolution") }
            />
            <span style={{color: "red"}}>{errors["Resolution"]}</span>
          </Grid> */}
         
        </Grid>

        {/* <Grid item xs={6} md={3}>
            <TextBoxHeader>Content</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              sx={{ width: "400%" }}
              onChange={(e) => handleChange(e,"Content") }
              onFocus={(e) => handleChange(e,"Content") }
            />
          <span style={{color: "red"}}>{errors["Content"]}</span>
          </Grid> */}
     
        <Grid container spacing={2}>
          
        {/* <Grid item xs={6} md={3}>
            <TextBoxHeader>Secretary</TextBoxHeader>
            <SelectInput
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                placeholder="Text (default)"
                onChange={(e) => handleChange(e,"Secretary") }
                onFocus={(e) => handleChange(e,"Secretary") }

            >
              <MenuItem value={"Gayan"}>Gayan</MenuItem>
              <MenuItem value={"Dilini"}>Dilini</MenuItem>
              <MenuItem value={"Poornima"}>Poornima</MenuItem>
              <MenuItem value={"Rukshan"}>Rukshan</MenuItem>
              <MenuItem value={"Pawani"}>Pawani</MenuItem>
              <MenuItem value={"Rasika"}>Rasika</MenuItem>
            </SelectInput>
          <span style={{color: "red"}}>{errors["Secretary"]}</span>
          </Grid> */}

                   

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
      {/* <Grid item xs={7} md={0.65}>
      <Button
                    variant="contained"
                    className="ModalCommonButton"
                     sx={{ width: "500%" }}
                     //margin-left="2%"
                    // margin-right:25%
                    
                      // onClick={post}
                      onClick={()=>window.location.href='/ServiceTickets'}
                    >
                      View Service Ticket Details
                      
        </Button>
        
        </Grid> */}


    </>
  );
};

export default CreateVehicleRequestTab1;

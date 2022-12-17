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
import {useEffect, useState} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";

import Pagination from "@mui/material/Pagination";
import TableHead from "@mui/material/TableHead";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
    TablePaginationActionsProps,
    SparePartsRequestListData, ServiceCallData, ServiceCallData2, Ticket, ArrayTab,
} from "../../../Types/Types";
import "./../../../Styles/Tabs.css";
import moment from "moment";


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

const CheckToolRequestTab1 = (props: any) => {
  
  React.useEffect(() => {
    setData1(props.props)
    console.log(props.props.arry)
    if(props.props.arry.length!==0){
    fields["TicketID"] = props.props.arry[0].ServiceCallId
    fields["ToolGroup"] =  props.props.arry[0].Status
    fields["ToolType"]= props.props.arry[0].Status
    fields["ToolDes"] =  props.props.arry[0].Status
    fields["SerialNo"] =  props.props.arry[0].Status

    fields["ToolReqID"]= Math.floor(Math.random()*1000000)
  }
    
  },[]);
 
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
  const [data1, setData1] =React.useState<ArrayTab[]>([]);

  // const handleChange = (event: any) => {
  //   setAge(event.target.value);
  // };

  // const handleChangeItemCode = (event: any) => {
  //   props.setItemCode(event.target.value)
  // };
  // const handleChangeMRF = (event: any) => {
  //   props.setChangeMRF(event.target.value)
  // };
  // const handleChangeSerialNumber = (event: any) => {
  //   props.setIChangeSerialNumber(event.target.value)
  // };
  // const handleChangeItemDescription = (event: any) => {
  //   props.setItemDescription(event.target.value)
  // };
  // const handleChangeItemGroup = (event: any) => {
  //   props.setItemGroup(event.target.value)
  // };
  // const handleChangeCustomerID = (event: any) => {
  //   props.setCustomerID(event.target.value)
  // };
  // const handleChangeContactPerson = (event: any) => {
  //   props.setContactPerson(event.target.value)
  // };
  // const handlChangeAddress = (event: any) => {
  //   props.setAddress(event.target.value)
  // };
  // const handleChangeTelephoneNo = (event: any) => {
  //   props.setTelephoneNo(event.target.value)
  // };
  // const handleChangeStatus = (event: any) => {
  //   props.setChangeStatus(event.target.value);
  // };
  // const handleChangeServiceCallId = (event: any) => {
  //   props.setChangeServiceCallId(event.target.value)
  // };
  // const handleChangePriority = (event: any) => {
  //   props.setChangePriority(event.target.value)
  // };
  // const handleChangeCustomerName = (event: any) => {
  //   props.setCustomerName(event.target.value)
  // };

  function handleChange(e:any,f:any) {
    // let field=fields
    fields[f] = e.target.value;
    handleValidation()
  }

  function handleChangeDate(e:any,f:any){
    fields[f] = e;
    setfields( fields )
    console.log(fields)
  }


  function select(e:any,f:any) {
    let field=fields
    if(!fields[f])
      field[f] = "0";
    handleValidation()
  }


  function handleValidation(){
    console.log(typeof fields["Handover"] )
    
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



    

    //Remark
    if(typeof fields["Remark"] === "string"){
      if (fields["Remark"]==="") {
        errors["Remark"] = "Please Enter Remark ";
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
    //ToolReqStatus
    if(typeof fields["ToolReqStatus"] === "string"){
      if (fields["ToolReqStatus"]==="") {
        errors["ToolReqStatus"] = "Please Enter Tool request status ";
        seterrors(errors)
      }
      else if (!fields["ToolReqStatus"].match(/^[a-zA-Z\s]+$/)) {
        errors["ToolReqStatus"] = "Only letters ";
        seterrors(errors)
      }
      else{
        errors["ToolReqStatus"] = ""
        setfields( fields )
        props.setfieldsSpare({fields})
        seterrors(errors)
      }
    }
     //NoOfDays
     if(typeof fields["NoOfDays"] !== "undefined"){
      if (fields["NoOfDays"]==="0") {
       // errors["Status"] = "Please Enter Status";
        seterrors(errors)
      }
      else{
        errors["NoOfDays"] = ""
        setfields( fields )
        props.setfields({fields})
        seterrors(errors)
      }
    }

     //ServiceTiceketId
     if(typeof fields["ServiceTiceketId"] === "string"){
      if (fields["ServiceTiceketId"]==="") {
        errors["ServiceTiceketId"] = "Please Enter ServiceTiceketId ";
        seterrors(errors)
      }
      else if (!fields["ServiceTiceketId"].match(/^[a-zA-Z\s]+$/)) {
        errors["ServiceTiceketId"] = "Only letters ";
        seterrors(errors)
      }
      else{
        errors["ServiceTiceketId"] = ""
        setfields( fields )
        props.setfieldsSpare({fields})
        seterrors(errors)
      }
    }
    //Handover
    if(typeof fields["Handover"] === "string"){
      if (fields["Handover"]==="") {
        errors["Handover"] = "Please Enter Handover ";
        seterrors(errors)
      }
      
      else{
        errors["Handover"] = ""
        setfields( fields )
        props.setfieldsSpare({fields})
        seterrors(errors)
      }
    }
    // //TicketType
    // if(typeof fields["Secretary"] === "string"){
    //   if (fields["Secretary"]==="") {
    //     errors["Secretary"] = "Please Enter Secretary ";
    //     seterrors(errors)
    //   }
    //   else{
    //     errors["Secretary"] = ""
    //     setfields( fields )
    //     props.setfieldsSpare({fields})
    //     seterrors(errors)
    //   }
    // }
   
    console.log(props.valueNext)
    
  }
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    };
    fetch('http://localhost:3000/spare-parts/FindTicket',requestOptions)
        .then(response=>{ return response.json()})
        .then(data=>{
            if(data.statusCode===404){
              setfields(fields)
            }
            else{
                fields["TicketID"] = props.props.arry[0].ServiceCallId
                fields["ToolGroup"] =  props.props.arry[0].Status
                fields["ToolType"]= props.props.arry[0].Status
                fields["ToolDes"] =  props.props.arry[0].Status
                fields["SerialNo"] =  props.props.arry[0].Status
            
                fields["ToolReqID"]= Math.floor(Math.random()*1000000)
              }

          });
  } )
  

  return (
    <>
      <Box sx={{ flexGrow: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <TextBoxHeader>Tool ID</TextBoxHeader>
            <TextBox
              // name="stid"
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              name="TicketId"
              value={fields["TicketID"]}
              sx={{ width: "99%" }}
              onChange={(e) => handleChange(e,"TicketID") }
              onFocus={(e) => handleChange(e,"TicketID") }
              
            />
            <span style={{color: "red"}}>{errors["TicketID"]}</span>
          </Grid>
          <Grid item xs={6} md={4}>
            <TextBoxHeader>Tool Group</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              value={fields["ToolGroup"]}
              sx={{ width: "99%" }}
              onChange={(e) => handleChange(e,"ToolGroup") }
              onFocus={(e) => handleChange(e,"ToolGroup") }
              
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <TextBoxHeader>Tool Request ID</TextBoxHeader>
            <TextBox
                id="outlined-basic"
                variant="outlined"
                placeholder="Text (default)"
                value={fields["ToolReqID"]}
                sx={{ width: "99%" }}
                onChange={(e) => handleChange(e,"ToolReqID") }
                onFocus={(e) => handleChange(e,"ToolReqID") }
            />
            <span style={{color: "red"}}>{errors["ToolReqID"]}</span>
          </Grid>
          
          
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <TextBoxHeader>Tool Description</TextBoxHeader>
            <TextBox
              // name="stid"
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              value={fields["ToolDes"]}
              name="TicketId"
              sx={{ width: "99%" }}
              onChange={(e) => handleChange(e,"ToolDes") }
              onFocus={(e) => handleChange(e,"ToolDes") }
              
            />
            <span style={{color: "red"}}>{errors["ToolDes"]}</span>
          </Grid>
          <Grid item xs={6} md={4}>
            <TextBoxHeader>Serial No</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              value={fields["SerialNo"]}
              sx={{ width: "99%" }}
              onChange={(e) => handleChange(e,"SerialNo") }
                onFocus={(e) => handleChange(e,"SerialNo") }
              
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <TextBoxHeader>Tool Request Status</TextBoxHeader>
            <TextBox
                id="outlined-basic"
                variant="outlined"
                placeholder="Text (default)"
                value={fields["ToolReqStatus"]}
                sx={{ width: "99%" }}
                onChange={(e) => handleChange(e,"ToolReqStatus") }
                onFocus={(e) => handleChange(e,"ToolReqStatus") }
            />
            <span style={{color: "red"}}>{errors["ToolReqStatus"]}</span>
          </Grid>
          
          
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <TextBoxHeader>Tool Type</TextBoxHeader>
            <TextBox
              // name="stid"
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              value={fields["ToolType"]}
              name="TicketId"
              sx={{ width: "99%" }}
              onChange={(e) => handleChange(e,"ToolType") }
              onFocus={(e) => handleChange(e,"ToolType") }
              
            />
            <span style={{color: "red"}}>{errors["ToolType"]}</span>
          </Grid>
          <Grid item xs={6} md={4}>
           
            {/* <ModalButton
                    variant="contained"
                    className="ModalCommonButton"
                     sx={{ width: "99%" ,marginTop:"13%"}}
                     //margin-left="2%"
                    // margin-right:25%
                    
                      // onClick={post}
                      onClick={()=>window.location.href='/Calendar'}
                    >
                      Check Tool Calender
                      
        </ModalButton> */}

                    <Button
                    variant="contained"
                    className="ModalCommonButton"
                    sx={{ width: "99%" ,marginTop:"13%"}}
                     //margin-left="2%"
                    // margin-right:25%
                    
                      // onClick={post}
                      onClick={()=>window.location.href='/Calendar'}
                    >
                        Check Tool Calender
                      
        </Button>
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
                                onChange={(e) => handleChange(e,"Remark") }
                                onFocus={ (e)=> select(e,"Remark")}
                                // defaultValue="Default Value"
                            />
          </Grid>   
        </Grid>
        <Grid item xs={6} md={3}>
            <TextBoxHeader>Request Date & Time</TextBoxHeader>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                  renderInput={(params:any) => <TextBox {...params} />}
                  value={fields['Request']}
                  onChange={(newValue) => {
                    handleChangeDate((newValue != null ? newValue.toString() : new Date()),"Request"
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
                onChange={(e) => handleChange(e,"NoOfDays") }
                onFocus={ (e)=> select(e,"NoOfDays")}
                    defaultValue=""
            >
              <MenuItem value={"1"}>1</MenuItem>
              <MenuItem value={"2"}>2</MenuItem>
              <MenuItem value={"3"}>3</MenuItem>
              <MenuItem value={"4"}>4</MenuItem>
              <MenuItem value={"5"}>5</MenuItem>
                       </SelectInput>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Handover Date & Time</TextBoxHeader>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                  renderInput={(params:any) => <TextBox {...params} />}
                  value={fields['Handover']}
                  onChange={(newValue) => {
                    handleChangeDate((newValue != null ? newValue.toString() : new Date()),"Handover");
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
              onChange={(e) => handleChange(e,"ServiceTiceketId") }
             
              sx={{ width: "99%" }}
              value={fields['ServiceTiceketId']}
            />
            <span style={{color: "red"}}>{errors["ServiceTiceketId"]}</span>
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
                  Service Ticket ID
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
                  <StyledTableRow key={row.TicketId}>
                    <StyledTableCell  sx={{borderLeft: "none", }}
                    >
                          {row.TicketId}
                      {/* {moment(row.CreatedOn).format("DD/MM/YYYY")} */}
                    </StyledTableCell>
                    <StyledTableCell  sx={{borderLeft: "1px solid rgba(0, 65, 102, 0.2);",}}
                    >
                        {row.AssignedTo}
                    </StyledTableCell>
                    <StyledTableCell  sx={{borderLeft: "1px solid rgba(0, 65, 102, 0.2);",}}
                    >
                        {row.serviceCall.Priority}
                    </StyledTableCell>
                    <StyledTableCell  sx={{borderLeft: "1px solid rgba(0, 65, 102, 0.2);",}}
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
        <Grid container spacing={2}>
          {/* <Grid item xs={6} md={3}>
            <TextBoxHeader>Remark</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              sx={{ width: "415%" }}
              onChange={(e) => handleChange(e,"Remark") }
              onFocus={(e) => handleChange(e,"Remark") }
            />
            <span style={{color: "red"}}>{errors["Remark"]}</span>
          </Grid> */}
         
        </Grid>

        <Grid item xs={6} md={3}>
            {/* <TextBoxHeader>Content</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              sx={{ width: "400%" }}
              onChange={(e) => handleChange(e,"Content") }
              onFocus={(e) => handleChange(e,"Content") }
            /> */}
          <span style={{color: "red"}}>{errors["Content"]}</span>
          </Grid>
     
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

export default CheckToolRequestTab1;

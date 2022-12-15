import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Select from "@mui/material/Select";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";
import Header from "../../../components/Header";
import "../../../Styles/Modal.css";
import "../../../Styles/ServiceCall.css";

import GeneralTab from "./CreateTicket/GeneralTab";
import ContentTab from "./CreateTicket/ContentTab";
import LinkedDocumentsTab from "./CreateTicket/LinkedDocumentsTab";
import AttachmentsTab from "./CreateTicket/AttachmentsTab";
import {useContext, useEffect, useState} from "react";
import GeneralTabTicket from "./CreateTicket/GeneralTab";
import {ServiceContext} from "../../../api/api";

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

const ModalTittle = styled("text")(({ theme }) => ({
  fontFamily: "Montserrat",
  fontSize: 24,
  fontWeight: 700,
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

const ViewTicketModal = (props: any) => {
console.log(props)
  const { open, setOpen ,dataUpdate} = props;
  const [age, setAge] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState("1");
  const [ticketList, setTicketList] = React.useState([...rows]);
  const [tabName, setTabName] = React.useState("General");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [date, setDate] = React.useState(new Date());
  const [fields, setfields] = useState<any>({TicketType:'',AssignedTo:''});
  const [errors,seterrors]=useState<any>({})
  const [CreatedOn, setCreatedOnDate] = React.useState("")
  const [planedStartDate, setDatePlanedStart] = React.useState("");
  const [estimatedDate, setDateEstimated] = React.useState("");
  const [plannedEndDate, setDatePlannedEnd] = React.useState("");
  const [actualStartDate, setDateActualStart] = React.useState("");
  const [actualEndDate, setDateActualEnd] = React.useState("");
  const [Estimate, setEstimate] = React.useState("")
  const [contact, setContact] = React.useState("")
  const Service =useContext(ServiceContext)
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    };
    fetch('http://localhost:3000/spare-parts/FindTicket/'+props.dataUpdate,requestOptions)
        .then(response=>{
          return response.json()
        })
        .then(serviceCalls=> {
              console.log(serviceCalls[0])
              //  fields["ServiceCallId"] = props.props.props.serviceCallData.fields.ServiceCallId;
              // fields["CustomerId"] = props.props.props.serviceCallData.fields.CustomerID;
              // fields["CustomeName"] = props.props.props.serviceCallData.fields.CustomerName;
              // fields["ContactPerson"] = props.props.props.serviceCallData.fields.ContactPerson;
              // fields["TelephoneNo"] = props.props.props.serviceCallData.fields.TelephoneNo;
              // fields["CustomerAddressId"] = props.props.props.serviceCallData.fields.AddressId;
              fields["TicketId"] = serviceCalls[0].TicketId;
              fields["Subject"] = serviceCalls[0].Subject;
              fields["TicketType"] = serviceCalls[0].TicketType;
              fields["CustomerId"] = serviceCalls[0].serviceCall.customerEntity.CustomerId
              fields["CustomeName"] = serviceCalls[0].serviceCall.customerEntity.CustomeName;
              fields["ContactPerson"] = serviceCalls[0].serviceCall.customerEntity.ContactPerson;
              fields["TelephoneNo"] = serviceCalls[0].serviceCall.customerEntity.TelephoneNo;
              fields["CustomerAddressId"] = serviceCalls[0].serviceCall.customerEntity.CustomerAddressId;
              fields["AssignedTo"] = serviceCalls[0].AssignedTo;
              fields["AssignedBy"] = serviceCalls[0].AssignedBY;
            }
        );


  } )

  const getTab = (index: string): string => {
    switch (index) {
      case "1":
        return "General";
      case "2":
        return "Ticket";
      case "3":
        return "LinkedDocuments";
      case "4":
        return "Attachments";
      default:
        return "General";
    }
  };

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
    setTabName(getTab(newValue));
  };
  // const handleDateTimeChange = (dateTime) => {
  //   console.log(dateTime);
  // };

  const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  // Change the page displaying page to user clicked
  const handleChangePage = (
      event: React.MouseEvent<HTMLButtonElement> | null,
      newPage: number
  ) => {
    setPage(newPage);
  };

  // Change the number of rows per page when user changes
  const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const addNewTicket = () => {
    setTicketList([
      ...ticketList,
      createData(
          new Date(),
          "10:23:14 AM",
          "Engineer E",
          "Priority P",
          new Date(),
          "Recurrence R",
          "Content C",
          "More M"
      ),
    ]);
  };

  function handleChangeField(e:any,f:any) {

    fields[f] = e.target.value;
    setfields( fields )
    console.log(fields[f])
  //  handleValidation()
  }

  function select(f:any) {
    let field=fields
    if(!fields[f])
      field[f] = "0";
    handleValidation()
  }



  function handleValidation() {
    //console.log(fields)
   // console.log(typeof fields["TicketId"])
    // console.log(fields["MRF"])
    // let errors: any = {};
    let formIsValid = true;
    // console.log( typeof fields["Status"])
    //  console.log( fields["Status"])

    //TicketId
    if (typeof fields["TicketId"] === "string") {
      if (fields["TicketId"] === "") {
        errors["TicketId"] = "Please Enter Ticket Id ";
        seterrors(errors)
      } else {
        errors["TicketId"] = ""
        setfields(fields)
        seterrors(errors)
      }
    }
    //TicketType
    if(typeof fields["TicketType"] !== "undefined"){
      if (fields["TicketType"]==="0") {
        errors["TicketType"] = "Please Enter Ticket Type";
        seterrors(errors)
      }
      else{
        errors["TicketType"] = ""
        setfields( fields )
        seterrors(errors)
      }
    }
    //Subject
    if(typeof fields["Subject"] !== "undefined"){
      if (fields["Subject"]==="0") {
        errors["Subject"] = "Please Enter Subject";
        seterrors(errors)
      }
      else{
        errors["Subject"] = ""
        setfields( fields )
        seterrors(errors)
      }
    }
  //Assigned To
    if(typeof fields["AssignedTo"] !== "undefined"){
      if (fields["AssignedTo"]==="0") {
        errors["AssignedTo"] = "Please Enter Assign To";
        seterrors(errors)
      }
      else{
        errors["AssignedTo"] = ""
        setfields( fields )
        seterrors(errors)
      }
    }
    //Assigned By
    if(typeof fields["AssignedBy"] !== "undefined"){
      if (fields["AssignedBy"]==="0") {
        errors["AssignedBy"] = "Please Enter Assigned By";
        seterrors(errors)
      }
      else{
        errors["AssignedBy"] = ""
        setfields( fields )
        seterrors(errors)
      }
    }
  }

  function post(){
    handleClose()
   // console.log(fields.fields)
    console.log(fields)
    const requestOptions ={
      method:'PUT',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
            TicketId: fields["TicketId"],
            TicketType: fields["TicketType"],
            Subject: fields["Subject"],
            AssignedTo: fields["AssignedTo"],
            AssignedBY: fields["AssignedBy"],

          }
      )
    };
    fetch('http://localhost:3000/spare-parts/ticket/'+fields["TicketId"],requestOptions)
  }


  return (
      <Modal
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          PaperProps={{ sx: { maxWidth: "65%", height: "90%" } }}
          // maxWidth={"md"}
          // disableBackdropClick
          // disableEscapeKeyDown
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          <ModalTittle>
            View Ticket
            {/* / <TabName>{tabName}</TabName> */}
          </ModalTittle>
          <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
          >
            {/* <CloseIcon /> */}
            <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M16.064 8.81567C16.064 8.71255 15.9797 8.62817 15.8765 8.62817L14.3297 8.63521L12 11.4125L9.67263 8.63755L8.12341 8.63052C8.02029 8.63052 7.93591 8.71255 7.93591 8.81802C7.93591 8.86255 7.95232 8.90474 7.98044 8.93989L11.0297 12.5727L7.98044 16.2032C7.95212 16.2375 7.93641 16.2805 7.93591 16.3251C7.93591 16.4282 8.02029 16.5126 8.12341 16.5126L9.67263 16.5055L12 13.7282L14.3273 16.5032L15.8742 16.5102C15.9773 16.5102 16.0617 16.4282 16.0617 16.3227C16.0617 16.2782 16.0453 16.236 16.0172 16.2008L12.9726 12.5704L16.0219 8.93755C16.05 8.90474 16.064 8.86021 16.064 8.81567Z"
                  fill="black"
              />
              <path
                  d="M12 2.02344C6.20156 2.02344 1.5 6.725 1.5 12.5234C1.5 18.3219 6.20156 23.0234 12 23.0234C17.7984 23.0234 22.5 18.3219 22.5 12.5234C22.5 6.725 17.7984 2.02344 12 2.02344ZM12 21.2422C7.18594 21.2422 3.28125 17.3375 3.28125 12.5234C3.28125 7.70938 7.18594 3.80469 12 3.80469C16.8141 3.80469 20.7188 7.70938 20.7188 12.5234C20.7188 17.3375 16.8141 21.2422 12 21.2422Z"
                  fill="black"
              />
            </svg>
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ flexGrow: 1 }}>
            <Header />
            <Grid container>
              <Grid item xs={6} md={4}>
                <TextBoxHeader>Service Ticket ID</TextBoxHeader>
                <TextBox
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Text (default)"
                    value={ fields["TicketId"]}
                    onChange={(e) => handleChangeField(e,"TicketId") }
                    onFocus={(e) => handleChangeField(e,"TicketId") }
                />
                <span style={{color: "red"}}>{errors["TicketId"]}</span>
              </Grid>
              <Grid item xs={6} md={4}>
                <TextBoxHeader>Service Ticket Type</TextBoxHeader>
                <SelectBox
                    labelId="demo-simple-select-label"
                    id="demo-simple-select1"
                    defaultValue=""
                    value={fields["TicketType"]}
                    onChange={(e) => handleChangeField(e,"TicketType") }
                    onFocus={ ()=>select("TicketType") }
                >
                  <MenuItem value={"Type 1"}>Type 1</MenuItem>
                  <MenuItem value={"Type 2"}>Type 2</MenuItem>
                  <MenuItem value={"Type 3"}>Type 3</MenuItem>
                </SelectBox>
                <span style={{color: "red"}}>{errors["TicketType"]}</span>
              </Grid>
              <Grid item xs={6} md={4}>
                <TextBoxHeader>Subject</TextBoxHeader>
                <TextBox
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Text (default)"
                    value={ fields["Subject"]}
                    onChange={(e) => handleChangeField(e,"Subject") }
                    onFocus={(e) => handleChangeField(e,"Subject") }
                />
                <span style={{color: "red"}}>{errors["Subject"]}</span>
              </Grid>
            </Grid>
            <Divider
                orientation="horizontal"
                variant="middle"
                flexItem
                sx={{ marginTop: "30px" }}
            />

            <Grid container>
              <Grid item xs={6} md={4}>
                <TextBoxHeader>Customer ID</TextBoxHeader>
                <TextBox
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Text (default)"
                    value={fields["CustomerId"]}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <TextBoxHeader>Customer Name</TextBoxHeader>
                <TextBox
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Text (default)"
                    value={fields["CustomeName"]}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <TextBoxHeader>Contact Person</TextBoxHeader>
                <TextBox
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Text (default)"
                    value={fields["ContactPerson"]}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <TextBoxHeader>Telephone Number</TextBoxHeader>
                <TextBox
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Text (default)"
                    value={fields["TelephoneNo"]}
                />
              </Grid>
            </Grid>

            <Divider
                orientation="horizontal"
                variant="middle"
                flexItem
                sx={{ marginTop: "30px", marginBottom: "10px" }}
            />
            <Grid container>
              <Grid xs={12}>
                <FormControlLabel
                    control={<Checkbox />}
                    label="Personal Ticket"
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <TextBoxHeader>Assigned To</TextBoxHeader>
                <SelectBox
                    labelId="demo-simple-select-label"
                    id="demo-simple-select1"
                    sx={{ width: "99%" }}
                    defaultValue=""
                    value={fields["AssignedTo"]}
                    onChange={(e) => handleChangeField(e,"AssignedTo") }
                >
                  <MenuItem value={"Gayan"}>Gayan</MenuItem>
                  <MenuItem value={"Dilini"}>Dilini</MenuItem>
                  <MenuItem value={"Poornima"}>Poornima</MenuItem>
                  <MenuItem value={"Rukshan"}>Rukshan</MenuItem>
                  <MenuItem value={"Pawani"}>Pawani</MenuItem>
                  <MenuItem value={"Rasika"}>Rasika</MenuItem>
                </SelectBox>
                {/*<SelectInput*/}
                {/*    labelId="demo-simple-select-labelqa"*/}
                {/*    id="demo-simple-select32"*/}
                {/*    value={age}*/}
                {/*    defaultValue=""*/}
                {/*    onChange={(e) => handleChangeField(e,"AssignedTo") }*/}
                {/*>*/}
                {/*  <MenuItem value={10}>Ten</MenuItem>*/}
                {/*  <MenuItem value={20}>Twenty</MenuItem>*/}
                {/*  <MenuItem value={30}>Thirty</MenuItem>*/}
                {/*</SelectInput>*/}
                <span style={{color: "red"}}>{errors["AssignedTo"]}</span>
              </Grid>
              <Grid item xs={6} md={4}>
                <TextBoxHeader>Assigned By</TextBoxHeader>
                <TextBox
                    id="outlined-basic4"
                    variant="outlined"
                    value={fields["AssignedBy"]}
                    placeholder="Text (default)"
                    onFocus={(e) => handleChangeField(e,"AssignedBy")}
                    onChange={(e) => handleChangeField(e,"AssignedBy") }
                />
                <span style={{color: "red"}}>{errors["AssignedBy"]}</span>
              </Grid>
            </Grid>
            <br />
            {/*<TabContext>*/}
            {/*  <TabPanel value="1">*/}
            {/*    <GeneralTabTicket/>*/}
            {/*  </TabPanel>*/}
            {/*  <TabPanel value="2">*/}
            {/*    <ContentTab />*/}
            {/*  </TabPanel>*/}
            {/*  <TabPanel value="3">*/}
            {/*    <LinkedDocumentsTab/>*/}
            {/*  </TabPanel>*/}
            {/*  <TabPanel value="4">*/}
            {/*    <AttachmentsTab />*/}
            {/*  </TabPanel>*/}
            {/*</TabContext>*/}
          </Box>
          <TabContext value={value}>
            <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                }}
            >
              <TabList
                  variant="scrollable"
                  scrollButtons
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  sx={{ marginLeft: "-40px" }}
              >
                <Tab label="General" value="1" />
                <Tab label="Content" value="2" />
                <Tab label="Linked Documents" value="3" />
                <Tab label="Attachments" value="4" />
              </TabList>
            </Box>
          </TabContext>
          <Box>
            <TabContext value={value}>
              <TabPanel value="1">
                {/*<GeneralTab setCreatedOnDate={setCreatedOnDate} setDateEstimated={setDateEstimated} setDatePlannedEnd={setDatePlannedEnd} setDatePlanedStart={setDatePlanedStart} setDateActualStart={setDateActualStart} setDateActualEnd={setDateActualEnd} setEstimate={setEstimate} setContact={setContact}/>*/}
              </TabPanel>
              <TabPanel value="2">
                <ContentTab />
              </TabPanel>
              <TabPanel value="3">
                <LinkedDocumentsTab />
              </TabPanel>
              <TabPanel value="4">
                <AttachmentsTab />
              </TabPanel>
            </TabContext>
          </Box>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Box sx={{ flexGrow: 1, py: 1 }}>
            <Grid container spacing={12}>
              <Grid item xs={6} md={9.8}></Grid>
              {/*<Grid item xs={2} md={1}>*/}
              {/*  <ModalButton*/}
              {/*      variant="contained"*/}
              {/*      className="cancelButton"*/}
              {/*      onClick={handleClose}*/}
              {/*  >*/}
              {/*    Cancel*/}
              {/*  </ModalButton>*/}
              {/*</Grid>*/}

              {/*<Grid item xs={2} md={1}>*/}
              {/*  <ModalButton*/}
              {/*      variant="contained"*/}
              {/*      className="ModalCommonButton"*/}
              {/*      onClick={post}*/}
              {/*  >*/}
              {/*    Update*/}
              {/*  </ModalButton>*/}
              {/*</Grid>*/}
            </Grid>
          </Box>
        </DialogActions>
     </Modal>
  );
};

export default ViewTicketModal;

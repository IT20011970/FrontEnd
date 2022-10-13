import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Header from "../../../components/Header";
import "../../../Styles/Modal.css";

import { useEffect, useState } from "react";
import { Alert, DialogContentText } from "@mui/material";
import AdmistrationTab1 from "../../TabScreens/Adminstration/Administrationtab1"
import AdministrationTab2 from "./AdministrationTab2"
import AdministrationTab1 from "./AdministrationTab1"

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

const TabName = styled("text")(({ theme }) => ({
  fontFamily: "Montserrat",
  fontSize: 24,
  fontWeight: 500,
  color: "#0091d5",
}));

const AdministrationModel = (props: any) => {
   console.log(props.arry)
  const { open, setOpen } = props;
  // const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setMainTabValue("1");
    setNext("false")
  };
  const [mainTabValue, setMainTabValue] = React.useState("1");
  const [secondTabValue, setSecondTabValue] = React.useState("1");
  const [tabName, setTabName] = React.useState("General");

  const [ItemCode, setItemCode] = React.useState("");
  const [ChangeMRF, setChangeMRF] = React.useState("");
  const [ChangeSerialNumber, setIChangeSerialNumber] = React.useState("");
  const [ItemDescription, setItemDescription] = React.useState("");
  const [ItemGroup, setItemGroup] = React.useState("");
  const [CustomerID, setCustomerID] = React.useState("");
  const [CustomerName, setCustomerName] = React.useState("");
  const [ContactPerson, setContactPerson] = React.useState("");
  const [TelephoneNo, setTelephoneNo] = React.useState("");
  const [ChangeStatus, setChangeStatus] = React.useState("");
  const [ChangeServiceCallId, setChangeServiceCallId] = React.useState("");
  const [ChangePriority, setChangePriority] = React.useState("");
  const [Address, setAddress] = React.useState("");

  const [Subject, setSubject] = React.useState("");
  const [Origin, setOrigin] = React.useState("");
  const [ProblemType, setProblemType] = React.useState("");
  const [InquiryType, setInquiryType] = React.useState("");
  const [CreatedBy, setCreatedBy] = React.useState("")
  const [HandledBy, setHandledBy] = React.useState("")
  const [Queue, setQueue] = React.useState("")
  const [Secretary, setSecretary] = React.useState("")
  const [SalesAssistant, setSalesAssistant] = React.useState("")
  const [CreatedOn, setDateCreatedOn] = React.useState("")
  const [EstimatedDuration, setEstimatedDuration] = React.useState("")
  const [PlanedEndDate, setPlanedEndDate] = React.useState("")
  const [PlanedStartDate, setPlanedStartDate] = React.useState("")
  const [ActualStartDate, setActualStartDate] = React.useState("")
  const [ActualEndDate, setActualEndDate] = React.useState("")


  var [Next, setNext] = React.useState("")
  const [allError,setError]=React.useState(true)
  var [array2, setArray2] = useState([]);

  const  [Test, setTest] = React.useState("1");
  const  [Test1, setTest1] = React.useState("1");
  const [fields, setfieldsSpare] = useState<any>({fields:{}});


  const handleChange = (newValue: string) => {
    setMainTabValue(newValue);
    setNext("true")
  };
  
    
  // const handleClickToOpen = () => {
  //   setOpen(true);
  // };
  
  // const handleToClose = () => {
  //   setOpen(false);
  // };

  
    // const [open, setOpen] = React.useState(false);
    
    // const handleClickToOpen = () => {
    //   setOpen(true);
    // };
    
    // const handleToClose = () => {
    //   setOpen(false);
    // };
  
  
  

  function post(){
    
    console.log(fields.fields)
    console.log(fields)
    const requestOptions ={
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(
          {
            TicketId: parseInt(fields.fields.TicketID),
            sparePart: [
              {
                SPReqId: Math.floor(Math.random()*1000000),
                Remark: fields.fields.Remark,
                Content:fields.fields.Content,
                Secretary: "Gayan",
                // Secretary:fields.fields.Secretary,
                ItemDescription: fields.fields.ItemDescription,
                itemEntity:{
                  MrfSerialNumber: "aaa",
                  SerialNumber: "ssv",
                  ItemDescription: "css",
                  ItemGroup: "vss"
                }
              }
            ]
          }
      )
    };
    fetch('http://localhost:3000/spare-parts/create',requestOptions)
    alert("Spare parts request successfully created")
    
  }
  const sendDataToParent = (index: any) => {
    console.log(index);
  };
  const getTab = (index: string): string => {
    switch (index) {
      case "1":
        return "";
      
      default:
        return "";
    }
  };
  const handleSecondTabChange = (event: any, newValue: string) => {
    setSecondTabValue(newValue);
    setTabName(getTab(newValue));
  };
  console.log(ItemCode,ChangeMRF,CustomerName,ChangeSerialNumber,Address,ItemDescription,ItemGroup,CustomerID,ContactPerson,TelephoneNo,ChangeStatus,ChangeServiceCallId,ChangePriority)
  console.log(Subject, Origin,
  ProblemType,
  InquiryType,
  CreatedBy,
  HandledBy,
  Queue,
  Secretary,
  SalesAssistant,
      CreatedOn,
  EstimatedDuration,
  PlanedEndDate,
  PlanedStartDate,
  ActualStartDate,
  ActualEndDate)
  return (
    <>
      <Modal
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{ sx: { maxWidth: "75%", height: "80%" } }}
        // maxWidth={"md"}
        // disableBackdropClick
        // disableEscapeKeyDown
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          <ModalTittle>
            Create Spare Part Request
           
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
          {mainTabValue == "2" && (
            <TabContext value={secondTabValue}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                }}
              >
                <TabList
                  variant="scrollable"
                  scrollButtons
                  onChange={handleSecondTabChange}
                  aria-label="lab API tabs example"
                  sx={{ marginLeft: "-40px" }}
                >
                  <Tab label="Spare Part Request ID" value="1" />
                  
                </TabList>

                
              </Box>
            </TabContext>
          )}
        </DialogTitle>
        {mainTabValue == "1" && <Divider />}
        <DialogContent>
          <TabContext value={mainTabValue}>
            <TabPanel value="1" sx={{ p: 0 }}>
              <Header />
              <AdministrationTab1 setfieldsSpare={setfieldsSpare} setItemCode={setItemCode} setChangeServiceCallId={setChangeServiceCallId} setChangeMRF={setChangeMRF} setChangePriority={setChangePriority} setChangeStatus={setChangeStatus}setContactPerson={setContactPerson}setIChangeSerialNumber={setIChangeSerialNumber}setItemDescription={setItemDescription}setItemGroup={setItemGroup}setCustomerID={setCustomerID}setTelephoneNo={setTelephoneNo} setAddress={setAddress} setCustomerName={setCustomerName} />
            </TabPanel>
            <TabPanel value="2" sx={{ p: 0 }}>
              <Header />
              <AdministrationTab2 props={props.arry} tab={secondTabValue}  setSubject={setSubject} setOrigin={setOrigin} setProblemType={setProblemType} setInquiryType={setInquiryType} setCreatedBy={setCreatedBy} setHandledBy={setHandledBy} setQueue={setQueue} setSecretary={setSecretary} setSalesAssistant={setSalesAssistant} setDateCreatedOn={setDateCreatedOn} setEstimatedDuration={setEstimatedDuration} setPlanedEndDate={setPlanedEndDate} setPlanedStartDate={setPlanedStartDate} setActualStartDate={setActualStartDate} setActualEndDate={setActualEndDate} />
            </TabPanel>
          </TabContext>
        </DialogContent>
        <Divider />

        <DialogActions>
          <Box sx={{ flexGrow: 1, p: 1 }}>
            <Grid container spacing={10}>
              {mainTabValue == "1" && <Grid item xs={8} md={10}></Grid>}
              {mainTabValue == "2" && <Grid item xs={6} md={9}></Grid>}
              <Grid item xs={2} md={1}>
                <ModalButton
                    variant="contained"
                    className="cancelButton"
                    onClick={handleClose}
                >
                  Cancel
                </ModalButton>
              </Grid>
              {mainTabValue == "1" && (
                  <Grid item xs={2} md={1}>
                    <ModalButton
                        variant="contained"
                        className="ModalCommonButton"
                        onClick={() => handleChange("2")}
                    >
                      Next
                    </ModalButton>
                  </Grid>
              )}

              {mainTabValue == "2" && (
                  <>
                    <Grid item xs={2} md={1}>
                      <ModalButton
                          variant="contained"
                          className="cancelButton"
                          onClick={() => handleChange("1")}
                      >
                        Back
                      </ModalButton>
                    </Grid>
                    <Grid item xs={2} md={1}>

                      <ModalButton
                          variant="contained"
                          className="ModalCommonButton"
                          onClick={post}
                      >
                        Create
                    
                      </ModalButton>
                      
                         
                    </Grid>
                  </>
              )}
            </Grid>
          </Box>
        </DialogActions>
      </Modal>
    </>
  );
};

export default AdministrationModel;

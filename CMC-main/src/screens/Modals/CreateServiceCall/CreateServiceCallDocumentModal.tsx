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
import CreateServiceCallTab1 from "./CreateServiceCallTab1";
import CreateServiceCallTab2 from "./CreateServiceCallTab2";
import Header from "../../../components/Header";
import "../../../Styles/Modal.css";
import {useEffect, useState} from "react";
import DialogContentText from "@mui/material/DialogContentText"
import CreateNewTicketModal from "./CreateTicket"
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import ViewServiceCallDocumentTab2 from "./ViewServiceCallDocumentTab2";


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
const steps = ['Fill Form 1', 'Fill Form 2', 'Create Form','Create Ticket'];

const CreateServiceCallDocumentModal = (props: any) => {
  const { open, setOpen } = props;
  React.useEffect(() => {
   props.setOpen(false)
    console.log("aaa")
   // setselectTabValue(false)
  },[]);

  // const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setActiveStep(0)
    setMainTabValue("1");
    setNext("false");
    setSecondTabValue("1")
    setselectTabValue(1)
    createTicket(0)
  };
  const [mainTabValue, setMainTabValue] = React.useState("1");
  const [secondTabValue, setSecondTabValue] = React.useState("1");
  const [tabName, setTabName] = React.useState("General");
  //child 1

  //child 2
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
  const [selectTabValue, setselectTabValue] = React.useState(2);
  
  var [Next, setNext] = React.useState("")
  const [ticket, createTicket] = React.useState(0)
  const [allError,setError]=React.useState(true)
  var [array2, setArray2] = useState([]);

  const  [Test, setTest] = React.useState("1");
  const  [Test1, setTest1] = React.useState("1");
  const [fields, setfields] = useState<any>({fields:{}});
  const [openmsg, setOpenmsg] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});
  
  const handleClosemsg = () => {
    setOpenmsg(false);
  };

  const handleChange = async (newValue: string) => {
    // if(ChangeMRF&&ChangeSerialNumber&&ItemDescription&&ItemGroup&&CustomerID&&CustomerName&&ContactPerson&&TelephoneNo&&ChangeStatus&&ChangePriority&&Address)
       setMainTabValue(newValue);
       setNext("true")
  };
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
        isLastStep() && !allStepsCompleted()
            ? // It's the last step, but not all steps have been completed,
              // find the first step that has been completed
            steps.findIndex((step, i) => !(i in completed))
            : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  function post(){
    console.log(fields.fields)
    const requestOptions ={
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        CustomerId: parseInt(fields.fields.CustomerID),
        CustomeName:fields.fields.CustomerName,
        ContactPerson:fields.fields.ContactPerson,
        TelephoneNo: fields.fields.TelephoneNo,
        CustomerAddressId:fields.fields.AddressId,
          serviceCalls: [
        {
          ServiceCallId:parseInt(fields.fields.ServiceCallId),
          Status:"Pending",
          Priority:fields.fields.Priority,
          Subject: Subject,
          Origin: Origin,
          ProblemType: ProblemType,
          InquiryType: InquiryType,
          CreatedBy: CreatedBy,
          HandledBy: HandledBy,
          Queue: Queue,
          Secretary: Secretary,
          SalesAssistant: SalesAssistant,
          CreatedOn: CreatedOn,
          PlanedStartDateTime: PlanedStartDate,
          EstimatedDutation: EstimatedDuration,
          PlanedEndDateTime: PlanedEndDate,
          ActualStartDate: ActualStartDate,
          ActualEndDate: ActualEndDate,
          itemEntity: {
            ItemCode:fields.fields.ItemCode,
            MrfSerialNumber: fields.fields.MRF,
            SerialNumber: fields.fields.SerialNumber,
            ItemDescription:fields.fields.ItemDescription ,
            ItemGroup:fields.fields.ItemGroup
          }
        }
      ]})
    };
    console.log(requestOptions)
    fetch('http://localhost:3000/service-calls/',requestOptions)
    setselectTabValue(2)
    setOpenmsg(true)
    setOpenModal(true)
    handleNext()
  }
  const sendDataToParent = (index: any) => {
    //console.log(index);
  };
  const getTab = (index: string): string => {
    switch (index) {
      case "1":
        return "General";
      case "2":
        return "Ticket";
      case "3":
        return "Solutions";
      case "4":
        return "Remarks";
      case "5":
        return "Scheduling";
      case "6":
        return "Expenses";
      case "7":
        return "Resolution";
      case "8":
        return "History";
      case "9":
        return "Related Documents";
      default:
        return "General";
    }
  };
  const handleSecondTabChange = (event: any, newValue: string) => {
    setSecondTabValue(newValue);
    setTabName(getTab(newValue));
  };
  // console.log(fields.fields.MRF)
  // console.log(field["ItemCode"])
  // console.log(fields["ItemCode"])
  // console.log(ItemCode,ChangeMRF,CustomerName,ChangeSerialNumber,Address,ItemDescription,ItemGroup,CustomerID,ContactPerson,TelephoneNo,ChangeStatus,ChangeServiceCallId,ChangePriority)
  // console.log(Subject, Origin,
  // ProblemType,
  // InquiryType,
  // CreatedBy,
  // HandledBy,
  // Queue,
  // Secretary,
  // SalesAssistant,
  //     CreatedOn,
  // EstimatedDuration,
  // PlanedEndDate,
  // PlanedStartDate,
  // ActualStartDate,
  // ActualEndDate)
  //console.log(allError)
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
            View Service Call{" "}
            {mainTabValue == "2" && (
                <>
                  <TabName>{tabName}</TabName>
                </>
            )}

            <div>
              {
                allStepsCompleted() ? (
                    <React.Fragment>
                      <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                      </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                      {/*<Typography sx={{ mt: 2, mb: 1, py: 1 }}>*/}
                      {/*  Step {activeStep + 1}*/}
                      {/*</Typography>*/}
                      {/*<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>*/}
                      {/*  <Button*/}
                      {/*      color="inherit"*/}
                      {/*      disabled={activeStep === 0}*/}
                      {/*      onClick={handleBack}*/}
                      {/*      sx={{ mr: 1 }}*/}
                      {/*  >*/}
                      {/*    Back*/}
                      {/*  </Button>*/}
                      {/*  <Box sx={{ flex: '1 1 auto' }} />*/}
                      {/*  <Button onClick={handleNext} sx={{ mr: 1 }}>*/}
                      {/*    Next*/}
                      {/*  </Button>*/}
                      {/*  {activeStep !== steps.length &&*/}
                      {/*  (completed[activeStep] ? (*/}
                      {/*      <Typography variant="caption" sx={{ display: 'inline-block' }}>*/}
                      {/*        Step {activeStep + 1} already completed*/}
                      {/*      </Typography>*/}
                      {/*  ) : (*/}
                      {/*      <Button onClick={handleComplete}>*/}
                      {/*        {completedSteps() === totalSteps() - 1*/}
                      {/*            ? 'Finish'*/}
                      {/*            : 'Complete Step'}*/}
                      {/*      </Button>*/}
                      {/*  ))}*/}
                      {/*</Box>*/}
                    </React.Fragment>
                )}
            </div>
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
          {mainTabValue == "1" && (
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
                        <Tab  label="General" value="1" />
                        <Tab label="Tickets" value="2" />
                        <Tab label="Spare parts" value="3" />

                </TabList>
              </Box>
            </TabContext>
          )}
        </DialogTitle>
        <DialogContent>
          <TabContext value={mainTabValue}>
            <TabPanel value="1" sx={{ p: 0 }}>
              <Header />
            <ViewServiceCallDocumentTab2 props={props} tab={secondTabValue}/>
            </TabPanel>
            <TabPanel value="2" sx={{ p: 0 }}>
              <Header />
              {/*<CreateServiceCallTab2 createTicket={createTicket} serviceCallData={fields} tab={secondTabValue}  setSubject={setSubject} setOrigin={setOrigin} setProblemType={setProblemType} setInquiryType={setInquiryType} setCreatedBy={setCreatedBy} setHandledBy={setHandledBy} setQueue={setQueue} setSecretary={setSecretary} setSalesAssistant={setSalesAssistant} setDateCreatedOn={setDateCreatedOn} setEstimatedDuration={setEstimatedDuration} setPlanedEndDate={setPlanedEndDate} setPlanedStartDate={setPlanedStartDate} setActualStartDate={setActualStartDate} setActualEndDate={setActualEndDate} />*/}
            </TabPanel>
          </TabContext>
        </DialogContent>
        <Divider />
        {/*msg*/}
        <Dialog
            open={openmsg}
            onClose={handleClosemsg}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Success !"}
            <hr/>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Service call is Successfully Created !
            </DialogContentText>
          </DialogContent>
          <hr/>
          <DialogActions>
            <Button onClick={handleClosemsg}>Ok</Button>
          </DialogActions>
        </Dialog>
        <DialogActions>
          <Box sx={{ flexGrow: 1, p: 1 }}>
            <Grid container spacing={10}>
              <Grid item xs={2} md={2}>
                <ModalButton
                    variant="contained"
                    className="cancelButton"
                    onClick={handleClose}
                >
                  Cancel
                </ModalButton>
              </Grid>
              <Grid item xs={2} md={2}>
                <ModalButton
                  variant="contained"
                  className="cancelButton"
                  onClick={handleClose}
                >
                  Cancel
                </ModalButton>
              </Grid>
              <Grid item xs={8} md={8}>
                <ModalButton
                    variant="contained"
                    className="ModalCommonButton"
                    onClick={(event) => {handleChange("2");}}
                    sx={{ width: "350px"}}
                >
                  Create Service Call Summary
                </ModalButton>
              </Grid>

            </Grid>
          </Box>
        </DialogActions>
        {/*<CreateNewTicketModal open={openModal} setOpen={setOpenModal} />*/}
      </Modal>
    </>
  );
};

export default CreateServiceCallDocumentModal;

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
import {useContext, useEffect, useState} from "react"
import GeneralTabTicket from "./CreateTicket/GeneralTab";
import {now} from "moment"
import {ServiceContext} from "../../../api/api"
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import {Schedule, ServiceCallData2, Solutions} from "../../../Types/Types";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";

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
  // "& .MuiSelect-select": {
  //   borderRadius: "4px",
  //   height: "40px",
  //   width: "auto",
  //   // padding: "10px",
  // },
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

const ViewScheduling = (props: any) => {
  // console.log(props.props.props.serviceCallData.fields.ServiceCallId)
  const { open, setOpen, tab } = props;
  const [age, setAge] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState("1");
  const [ticketList, setTicketList] = React.useState([...rows]);
  const [tabName, setTabName] = React.useState("General");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [date, setDate] = React.useState(new Date());
  const [fields, setfields] = useState<any>({});
  const [errors,seterrors]=useState<any>({})
  const Service =useContext(ServiceContext)
  const [data, setData] =React.useState<any[]>([]);

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

  React.useEffect(() => {
    getData()
  });

  function getData (){
    console.log(props.props.props.dataUpdate.ServiceCallId)
    if(Service !==undefined){
      Service.getSchedule(props.props.props.dataUpdate.ServiceCallId).then((result)=>{

        setData(result)
        console.log(data)
      })
    }
  }
    
    // const requestOptions ={
    //   method:'POST',
    //   headers:{'Content-Type':'application/json'},
    //   body:JSON.stringify({
    //     Id:"",
    //     Solution:fields["Solution"],
    //     CreatedOn:new Date(now()),
    //     Owner:fields["Owner"],
    //     Status:fields["Status"],
    //     HandledBy:fields["HandledBy"],
    //   })
    // };
    // fetch('http://localhost:3000/service-calls/solutions',requestOptions)

 

  return (
      <Modal
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          PaperProps={{ sx: { maxWidth: "65%", height: "50%" } }}
          // maxWidth={"md"}
          // disableBackdropClick
          // disableEscapeKeyDown
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          <ModalTittle>
           View Schedule
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
            <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
              <Table
                  sx={{ minWidth: 500, boxShadow: "none" }}
                  aria-label="custom pagination table"
              >
                <TableHead>
                  <TableRow>
                    <StyledTableCell
                        sx={{
                          borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                        }}
                    >
                      ServiceCallId
                    </StyledTableCell>
                    <StyledTableCell
                        sx={{
                          borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                        }}
                    >
                      Planed Start
                    </StyledTableCell>
                    <StyledTableCell
                        sx={{
                          borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                        }}
                    >
                      Planed End
                    </StyledTableCell>
                    <StyledTableCell
                        sx={{
                          borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                        }}
                    >
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row: any, i: number) => (
                      <StyledTableRow>
                        <StyledTableCell
                            sx={{
                              borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                            }}
                        >
                          {row.ServiceCallId}
                        </StyledTableCell>
                        <StyledTableCell
                            sx={{
                              borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                            }}
                        >
                          {row.NextStartDate}
                        </StyledTableCell>
                        <StyledTableCell
                            sx={{
                              borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                            }}
                        >
                          {row.NextEndDate}
                        </StyledTableCell>
                      </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Box sx={{ flexGrow: 1, py: 1 }}>
            <Grid container spacing={12}>
              <Grid item xs={6} md={9.8}></Grid>
              <Grid item xs={2} md={1}>
                <ModalButton
                    variant="contained"
                    className="cancelButton"
                    onClick={handleClose}
                >
                  Cancel
                </ModalButton>
              </Grid>
            </Grid>
          </Box>
        </DialogActions>
      </Modal>
  );
};
export default ViewScheduling;

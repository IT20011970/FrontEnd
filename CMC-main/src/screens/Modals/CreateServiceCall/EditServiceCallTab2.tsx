import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableHead from "@mui/material/TableHead";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Pagination from "@mui/material/Pagination";
import Grid from "@mui/material/Grid";
import { CreateServiceCallTicketData } from "../../../Types/Types";
import "../../../Styles/Modal.css";

import GeneralTab from "./Modal2-Tabs/GeneralTab";
import TicketsTab from "./Modal2-Tabs/TicketsTab";
import SolutionsTab from "./Modal2-Tabs/SolutionsTab";
import RemarksTab from "./Modal2-Tabs/RemarksTab";
import SchedulingTab from "./Modal2-Tabs/SchedulingTab";
import ExpensesTab from "./Modal2-Tabs/ExpensesTab";
import Divider from "@mui/material/Divider"
import GeneralTab2 from "./Modal2-Tabs/GeneralTab2"
import TicketsTab2 from "./Modal2-Tabs/TicketsTab2";
import SolutionsTab2 from "./Modal2-Tabs/SolutionsTab2";
import SchedulingTab2 from "./Modal2-Tabs/SchedulingTab2";
import Resolution from "./Modal2-Tabs/Resolution";
import RelatedDocuments from "./Modal2-Tabs/RelatedDocuments";
import History from "./Modal2-Tabs/History";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: "#383838",
    backgroundColor: "#fff",
    fontWeight: 600,
    fontSize: 14,
    fontFamily: "Montserrat",
    textAlign: "left",
    borderBottom: "2px solid rgba(0, 65, 102, 0.2);",
    lineHeight: "1",
    borderLeft: "1px solid rgba(0, 65, 102, 0.2)",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: 400,
    fontFamily: "Segoe UI",
    color: "#383838",
    borderLeft: "1px solid rgba(0, 65, 102, 0.2)",
    padding: "7px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "rgba(0, 32, 51, 0.05)",
  },
  "&:last-child td, &:last-child th": {
    borderBottom: 0,
  },
  td: {
    borderBottom: 0,
  },
}));

const ModalButton = styled(Button)(({ theme }) => ({
  width: "200px",
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

const EditServiceCallTab2 = (props: any) => {
  const { open, setOpen, tab } = props;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [value, setValue] = React.useState("1");
  const [ticketList, setTicketList] = React.useState([...rows]);
  const [tabName, setTabName] = React.useState("General");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [date, setDate] = React.useState(new Date());
  const [selectTabValue, setMainTabValue] = React.useState("1");
  // const getTab = (index: string): string => {
  //   switch (index) {
  //     case "1":
  //       return "General";
  //     case "2":
  //       return "Ticket";
  //     case "3":
  //       return "AddSolutions";
  //     case "4":
  //       return "Remarks";
  //     case "5":
  //       return "Scheduling";
  //     case "6":
  //       return "Expenses";
  //     case "7":
  //       return "Resolution";
  //     case "8":
  //       return "History";
  //     case "9":
  //       return "Related Documents";
  //     default:
  //       return "General";
  //   }
  // };

  // const handleChange = (event: any, newValue: any) => {
  //   setValue(newValue);
  //   setTabName(getTab(newValue));
  // };
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
  return (
    <Box>
        <TabContext value={tab}>
          <TabPanel value="1">
            <GeneralTab2 p={props} dataUpdate={props.dataUpdate.dataUpdate} />
          </TabPanel>
          <TabPanel value="2">
            {tab === "2" && (
            <TicketsTab2  props={props} />
                )}
          </TabPanel>
          <TabPanel value="3">
            <SolutionsTab2 props={props}/>
          </TabPanel>
          <TabPanel value="4">
            <RemarksTab props={props}/>
          </TabPanel>
          <TabPanel value="5">
            <SchedulingTab2  props={props} />
          </TabPanel>
          <TabPanel value="6">
            <ExpensesTab props={props}/>
          </TabPanel>
          <TabPanel value="7" ><Resolution  props={props}/></TabPanel>
          <TabPanel value="8"><History props={props}/></TabPanel>
          <TabPanel value="9"><RelatedDocuments props={props}/></TabPanel>
        </TabContext>
    </Box>
  );
};

export default EditServiceCallTab2;

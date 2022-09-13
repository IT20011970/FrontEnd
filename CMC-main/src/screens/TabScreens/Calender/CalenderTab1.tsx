import * as React from "react";
import { styled, useTheme, makeStyles } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableHead from "@mui/material/TableHead";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Pagination from "@mui/material/Pagination";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import event from "./event"





import {
  TablePaginationActionsProps,
  SparePartsRequestListData, ServiceCallData, ServiceCallData2,
} from "../../../Types/Types";
import "./../../../Styles/Tabs.css";

import CreateServiceCallModal from "../../Modals/CreateServiceCall/CreateServiceCallModal";
import {useEffect, useState} from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "8px",
  backgroundColor: "#FBFBFB",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
  },
  marginLeft: 0,
  border: "1px solid #D6E4EC",
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const Heading = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  border: "none",
  boxShadow: "none",
  fontFamily: "Montserrat",
  fontSize: 20,
  fontWeight: 600,
  color: "#383838",
  backgroundColor: "transparent",
}));

const RequestButton = styled(Button)(({ theme }) => ({
  width: "auto",
  height: "auto",
  marginTop: "3px",
  backgroundColor: "#0091D5",
  borderRadius: "2px",
  cursor: "pointer",
  fontFamily: "Montserrat",
  fontSize: "14px",
  float: "right",
  boxShadow: "none",
}));

const Container = styled(Paper)(({ theme }) => ({
  padding: 3,
  paddingTop: "20px",
  border: "none",
  boxShadow: "none",
  backgroundColor: "transparent",
}));

const ControlButton = styled(Button)(({ theme }) => ({
  color: "#383838",
  backgroundColor: "transparent",
  boxShadow: "none",
  textTransform: "capitalize",
  fontFamily: "Montserrat",

  "&:hover": {
    backgroundColor: "transparent",
  },
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

const TablePaginationActions = (props: TablePaginationActionsProps) => {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  // Get the page number user clicked
  const handlePageSelection = (page: number) => {
    onPageChange(null, page - 1);
  };

  return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <Pagination
            count={Math.ceil(count / rowsPerPage)}
            variant="outlined"
            shape="rounded"
            onChange={(event, page) => handlePageSelection(page)}
        />
      </Box>
  );
};

const createData = (
    itemCode: string,
    description: string,
    customer: string,
    status: string,
    createdDate: Date,
    priority: string,
    subject: string
) => {
  return {
    itemCode,
    description,
    customer,
    status,
    createdDate,
    priority,
    subject,
  };
};

const rows: any = [];
for (var i = 0; i < 50; i++) {
  rows.push(
      createData(
          "ITEM_SD",
          "Item Description ID",
          "Customer C",
          "Status S",
          new Date(),
          "Priority P",
          "Subject S"
      )
  );
}

 type Inut = {
   start: string
   title:string
}

const CalenderTab1 = () => {
  //Modal
  const [openModal, setOpenModal] = React.useState(false);

  const [searchInput, setSearchInput] = React.useState("");

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [students, setStudents] =useState<any[]>([]);

  const [formInput, setFormInput] = useState<any[]>([]);
  const [fields, setfields] = useState<any>([]);
  // const events = [{ title: "today's event", date:'2022-09-01' }];


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

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    };
    fetch('http://localhost:3000/service-calls/service/',requestOptions)
        .then(response=>{
          return response.json()
        })
        .then(serviceCalls=>{
          let status=[]
          console.log(serviceCalls)
          for(let serviceCall of serviceCalls){
            status.push({
              start: getDate(serviceCall.CreatedOn),
              title:serviceCall.ServiceCallId,
            },)
          }
           setFormInput(status)
          console.log(formInput)
          }
        );


  },[] )

  function getDate(dayString:any) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();

    if (month.length === 1) {
      month = "0" + month;
    }

    return dayString.replace("YEAR", year).replace("MONTH", month);
  }

  return (
      <>
        <Stack spacing={6} direction="row">
          <Grid container rowSpacing={1}>
            <Grid item xs={6}>
              <Heading>Personl Calender</Heading>
            </Grid>
            <Grid item xs={3} sx={{ pr: 3 }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search"
                    inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Grid>
            <Grid item xs={3}>
              <RequestButton
                  variant="contained"
                  onClick={() => setOpenModal(true)}
              >
                Create Service Call
              </RequestButton>
            </Grid>
          </Grid>
        </Stack>
        <Container>
          <div style={{color: "#383838", backgroundColor: "#fff",borderRadius:10}}>
              {formInput.map((row: Inut, i: number) => (
                      console.log(row)
              ))}
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin]}
                headerToolbar={{
                  left: "prev,next",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay"
                }}
                initialView='dayGridMonth'
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                events={formInput}
                // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                // select={this.handleDateSelect}
                // eventContent={renderEventContent} // custom render function
                // eventClick={this.handleEventClick}
                // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed

            />
          </div>
        </Container>
        <Container>
          <Stack
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              spacing={12}
          >
            <TablePagination
                rowsPerPageOptions={[10, 15, 20, { label: "All", value: -1 }]}
                colSpan={7}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                // onPageChanged={handlePageChanged}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
            />
          </Stack>
        </Container>

        <CreateServiceCallModal open={openModal} setOpen={setOpenModal} />
      </>
  );
};

export default CalenderTab1;

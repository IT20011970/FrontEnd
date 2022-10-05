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
import {
  TablePaginationActionsProps,
  SparePartsRequestListData, ServiceCallData, ServiceCallData2, Ticket,
} from "../../../Types/Types";
import "./../../../Styles/Tabs.css";

import CreateServiceCallModal from "../../Modals/CreateServiceCall/CreateServiceCallModal";
import {useEffect, useState} from "react";
import moment from "moment"

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

const ServiceTicketTab = () => {
  //Modal
  const [openModal, setOpenModal] = React.useState(false);

  const [searchInput, setSearchInput] = React.useState("");

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [students, setStudents] =useState<any[]>([]);

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

    fetch('http://localhost:3000/spare-parts',requestOptions)
        .then(response=>{ return response.json()})
        .then(data=>{
          //console.log(data[3].Groups[1].students)
         // console.log(data)
         setStudents(data)
        });
  } )

  return (
      <>
        <Stack spacing={6} direction="row" sx={{ padding: "0px" }}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Heading>Service Ticket</Heading>
            </Grid>
            <Grid item xs={3} >
              <Search sx={{ borderRadius: "4px" }}>
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
                Create Service Ticket
              </RequestButton>
            </Grid>
          </Grid>
        </Stack>
        <Container>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Ticket ID</StyledTableCell>
                  <StyledTableCell align="right">Item Code</StyledTableCell>
                  <StyledTableCell align="right">Item Description</StyledTableCell>
                  <StyledTableCell align="right">Assigned By</StyledTableCell>
                  <StyledTableCell align="right">Ticket Type</StyledTableCell>
                  <StyledTableCell align="right">Subject</StyledTableCell>
                  <StyledTableCell align="right">Status</StyledTableCell>
                  <StyledTableCell align="right">Customer ID</StyledTableCell>
                  <StyledTableCell align="right">Customer Name</StyledTableCell>
                  <StyledTableCell align="right">Contact Person</StyledTableCell>
                  <StyledTableCell align="right">Created On</StyledTableCell>
                  <StyledTableCell align="right">Planed Start Date</StyledTableCell>
                  <StyledTableCell align="right">Planed End Date</StyledTableCell>
                  <StyledTableCell align="right">Actual Start Date</StyledTableCell>
                  <StyledTableCell align="right">Actual End Date</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                        ? students.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        : students
                ).map(( row:Ticket, i: number) => (
                    <StyledTableRow key={row.TicketId}>
                      <StyledTableCell
                          sx={{
                            borderLeft: "none",
                          }}
                      >
                        {row.TicketId}
                      </StyledTableCell>
                      <StyledTableCell>
                        {row.serviceCall.itemEntity.ItemCode}
                      </StyledTableCell>
                      <StyledTableCell>
                      {row.serviceCall.itemEntity.ItemDescription}
                      </StyledTableCell>
                      <StyledTableCell>
                        {row.AssignedTo}
                      </StyledTableCell>
                      <StyledTableCell>
                      {row.TicketType}
                      </StyledTableCell>
                      <StyledTableCell>
                        {row.Subject}
                      </StyledTableCell>
                      <StyledTableCell>
                        {row.serviceCall.Status}
                      </StyledTableCell>
                      <StyledTableCell>
                        {row.serviceCall.customerEntity.CustomerId}
                      </StyledTableCell>
                      <StyledTableCell>
                        {row.serviceCall.customerEntity.CustomeName}
                      </StyledTableCell>
                      <StyledTableCell>
                        {row.serviceCall.customerEntity.ContactPerson}
                      </StyledTableCell>
                      <StyledTableCell>
                        {moment(row.serviceCall.CreatedOn).format("DD/MM/YYYY")}
                      </StyledTableCell>
                      <StyledTableCell>
                        {moment(row.serviceCall.PlanedStartDateTime).format("DD/MM/YYYY")}
                      </StyledTableCell>
                      <StyledTableCell>
                        {moment(row.serviceCall.PlanedEndDateTime).format("DD/MM/YYYY")}
                      </StyledTableCell>
                      <StyledTableCell>
                        {moment(row.serviceCall.ActualStartDate).format("DD/MM/YYYY")}
                      </StyledTableCell>
                      <StyledTableCell>
                        {moment(row.serviceCall.ActualEndDate).format("DD/MM/YYYY")}
                      </StyledTableCell>
                    </StyledTableRow>
                ))}
                {/* {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}
              </TableBody>
            </Table>
          </TableContainer>
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

export default ServiceTicketTab;

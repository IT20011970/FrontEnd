import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableHead from "@mui/material/TableHead";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { ExpensesData } from "../../../../Types/Types";
import "../../../../Styles/Modal.css";
import "../../../../Styles/ServiceCall.css";

const ModalButton = styled(Button)(({ theme }) => ({
  width: "85px",
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

const createData = (
  date: Date,
  serviceCallId: string,
  createdBy: string,
  expensesType: string,
  amount: string,
  noOfTickets: string,
  remarks: string,
  more: string
) => {
  return {
    date,
    serviceCallId,
    createdBy,
    expensesType,
    amount,
    noOfTickets,
    remarks,
    more,
  };
};

const rows: any = [];
for (var i = 0; i < 5; i++) {
  rows.push(
    createData(
      new Date(),
      "2124666",
      "Created By Name ",
      "Meal Allowance",
      "2301.00",
      "11",
      "Sample Text",
      ""
    )
  );
}

const ExpensesTab = (props: any) => {
  const [expensesDataList, setExpensesDataList] = React.useState([...rows]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const addNewTicket = () => {
    setExpensesDataList([
      ...expensesDataList,
      createData(
        new Date(),
        "2124666",
        "Created By Name ",
        "Meal Allowance",
        "2301",
        "11",
        "Sample Text",
        ""
      ),
    ]);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table
          sx={{ minWidth: 500, boxShadow: "none" }}
          aria-label="custom pagination table"
        >
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
                Service Call ID
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                }}
              >
                Created By
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                }}
              >
                Expenses Type
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                }}
              >
                Amount
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                }}
              >
                Recurrence
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                }}
              >
                Content
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                }}
              >
                More
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? expensesDataList.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : rows
            ).map((row: ExpensesData, i: number) => (
              <StyledTableRow key={Math.random()}>
                <StyledTableCell
                  sx={{
                    borderLeft: "none",
                  }}
                >
                  {row.date.toString().substring(0, 24)}
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  {row.serviceCallId}
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  {row.createdBy}
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  {row.expensesType}
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  {row.amount}
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  {row.noOfTickets + Math.round(i * Math.random() * 100)}
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  {row.remarks + Math.round(i * Math.random() * 100)}
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    className="controlButton"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginLeft: "10px" }}
                  >
                    <path d="M10.5 13.125C11.9497 13.125 13.125 11.9497 13.125 10.5C13.125 9.05025 11.9497 7.875 10.5 7.875C9.05025 7.875 7.875 9.05025 7.875 10.5C7.875 11.9497 9.05025 13.125 10.5 13.125Z" />
                    <path d="M20.3046 10.2769C19.5327 8.28033 18.1928 6.55372 16.4503 5.31043C14.7078 4.06715 12.6392 3.36169 10.5002 3.28125C8.36117 3.36169 6.29259 4.06715 4.55012 5.31043C2.80766 6.55372 1.46769 8.28033 0.695834 10.2769C0.643706 10.4211 0.643706 10.5789 0.695834 10.7231C1.46769 12.7197 2.80766 14.4463 4.55012 15.6896C6.29259 16.9329 8.36117 17.6383 10.5002 17.7188C12.6392 17.6383 14.7078 16.9329 16.4503 15.6896C18.1928 14.4463 19.5327 12.7197 20.3046 10.7231C20.3567 10.5789 20.3567 10.4211 20.3046 10.2769ZM10.5002 14.7656C9.65655 14.7656 8.83183 14.5155 8.13036 14.0467C7.42888 13.578 6.88214 12.9118 6.55929 12.1324C6.23643 11.3529 6.15196 10.4953 6.31655 9.66782C6.48114 8.84037 6.8874 8.08031 7.48396 7.48375C8.08051 6.88719 8.84058 6.48093 9.66803 6.31634C10.4955 6.15175 11.3532 6.23622 12.1326 6.55908C12.912 6.88193 13.5782 7.42867 14.0469 8.13015C14.5157 8.83162 14.7658 9.65634 14.7658 10.5C14.7641 11.6308 14.3141 12.7148 13.5145 13.5143C12.715 14.3139 11.631 14.7639 10.5002 14.7656Z" />
                  </svg>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ flexGrow: 1, py: 1 }}>
        <Grid container spacing={10}>
          <Grid item xs={8} md={10}></Grid>
          <Grid item xs={4} md={2}>
            <ModalButton
              variant="contained"
              className="ModalCommonButton"
              onClick={addNewTicket}
              sx={{ width: "200px", mt: 2 }}
            >
              Add Expense
            </ModalButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ExpensesTab;

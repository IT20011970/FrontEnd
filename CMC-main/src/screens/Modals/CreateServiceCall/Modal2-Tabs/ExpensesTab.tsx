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
import {CreateServiceCallTicketData, ExpencesType} from "../../../../Types/Types";
import "../../../../Styles/Modal.css";
import "../../../../Styles/ServiceCall.css";

import CreateNewTicketModal from "../CreateTicket";
import Expences from "../CreateServiceCallExpences";
import {useContext} from "react";
import {ServiceContext} from "../../../../api/api";

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

const ExpencesTab = (props: any) => {
  console.log("eeee"+props.props.serviceCallData.fields.ServiceCallId+"sssss")
  //Modal
  const [openModal, setOpenModal] = React.useState(false);

  const [ticketList, setTicketList] = React.useState([...rows]);
  const [data, setData] =React.useState<any[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const Service =useContext(ServiceContext)
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

  React.useEffect(() => {
    getData()
  });

  function getData (){
    if(Service !==undefined){
      Service.getExpences(props.props.serviceCallData.fields.ServiceCallId).then((result)=>{
        if(result[0].message!==null) {
          console.log(result[0])
          setData(result)
        }
         //console.log(result)
      })
    }
  }

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
                   ID
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
                    Created Date
                </StyledTableCell>
                <StyledTableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                    }}
                >
                    End Date
                </StyledTableCell>
                <StyledTableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                    }}
                >
                  Content
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                      ? data.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                      )
                      : data
              ).map((row: ExpencesType, i: number) => (
                  <StyledTableRow key={Math.random()}>
                    <StyledTableCell
                        sx={{
                          borderLeft: "none",
                        }}
                    >
                      {row.Id}
                    </StyledTableCell>
                    <StyledTableCell
                        sx={{
                          borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                        }}
                    >
                      {row.CreatedBy}
                    </StyledTableCell>
                    <StyledTableCell
                        sx={{
                          borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                        }}
                    >
                      {row.CreatedDate}
                    </StyledTableCell>
                    <StyledTableCell
                        sx={{
                          borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                        }}
                    >
                      {row.DateExpire}
                    </StyledTableCell>
                    <StyledTableCell
                        sx={{
                          borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                        }}
                    >
                      {row.Remark}
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
                  onClick={() => setOpenModal(true)}
                  sx={{ width: "250px", mt: 2 }}
              >
                Create New Expences
              </ModalButton>
            </Grid>
          </Grid>
        </Box>

        <Expences props={props} open={openModal} setOpen={setOpenModal} />
      </Box>
  );
};

export default ExpencesTab;

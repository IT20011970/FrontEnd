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
import {CreateServiceCallTicketData, ServiceCallData2, Solutions} from "../../../../Types/Types"
import "../../../../Styles/Modal.css";
import "../../../../Styles/ServiceCall.css";
import CreateServiceCallTab2 from "../CreateServiceCallTab2"
import CreateNewTicketModal from "../CreateTicket"
import AddSolutions from "../AddSolutions"
import {useContext, useRef} from "react"
import {ServiceContext} from "../../../../api/api"
import {string} from "prop-types"
import UpdateSolutions from "../UpdateSolutions";

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

const SolutionsTab2 = (props: any) => {
  const [ticketList, setTicketList] = React.useState([...rows]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [openModal, setOpenModal] = React.useState(false);
  const [openEditModal, setEditOpenModal] = React.useState(false);
  const Service =useContext(ServiceContext)
  const employee =useRef<ServiceCallData2[]>([])
  const [data, setData] =React.useState<Solutions[]>([]);
  const [dataUpdate, setDataUpdate] = React.useState({});

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
      Service.getSolutions(props.props.serviceCallData.fields.ServiceCallId).then((result)=>{
        setData(result)
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
                Id
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                }}
              >
                Solution
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                }}
              >
                CreatedOn
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                }}
              >
                Owner
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                }}
              >
                Status
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                }}
              >
                HandledBy
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
            {data.map((row: Solutions, i: number) => (
                <StyledTableRow key={Math.random()}>
                <StyledTableCell
                  sx={{
                    borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  {row.Id}
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  {row.Solution}
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  {row.CreatedOn}
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  {row.Owner}
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  {row.Status}
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  {row.HandledBy}
                </StyledTableCell>
                  <StyledTableCell
                      sx={{
                        borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                      }}
                  >
                    <Button  onFocus={() => {
                      console.log("aa")
                      setDataUpdate(row)
                      setEditOpenModal(true);
                    }} >
                      <svg
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          className="controlButton"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15.36 14.98H0.64C0.286 14.98 0 15.266 0 15.62V16.34C0 16.428 0.072 16.5 0.16 16.5H15.84C15.928 16.5 16 16.428 16 16.34V15.62C16 15.266 15.714 14.98 15.36 14.98ZM2.914 13.3C2.954 13.3 2.994 13.296 3.034 13.29L6.398 12.7C6.438 12.692 6.476 12.674 6.504 12.644L14.982 4.166C15.0005 4.1475 15.0153 4.12552 15.0253 4.10133C15.0353 4.07713 15.0405 4.05119 15.0405 4.025C15.0405 3.99881 15.0353 3.97287 15.0253 3.94867C15.0153 3.92448 15.0005 3.9025 14.982 3.884L11.658 0.558C11.62 0.52 11.57 0.5 11.516 0.5C11.462 0.5 11.412 0.52 11.374 0.558L2.896 9.036C2.866 9.066 2.848 9.102 2.84 9.142L2.25 12.506C2.23054 12.6131 2.2375 12.7234 2.27025 12.8273C2.30301 12.9311 2.36059 13.0254 2.438 13.102C2.57 13.23 2.736 13.3 2.914 13.3Z" />
                      </svg>
                    </Button>
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
              // onClick={addNewTicket}
              onClick={() => {
                setOpenModal(true);
              }}
              sx={{ width: "300px", mt: 2 }}
            >
              Add Recommended Solution
            </ModalButton>
          </Grid>
        </Grid>
      </Box>
      <AddSolutions  props={props} open={openModal} setOpen={setOpenModal} />
      {openEditModal === true && (
      <UpdateSolutions  props={props} dataUpdate={dataUpdate} openEditModal={openEditModal} setEditOpenModal={setEditOpenModal} />
          )}
      </Box>
  );
};

export default SolutionsTab2;

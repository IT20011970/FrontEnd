import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "../../../Styles/Modal.css";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import Table from "@mui/material/Table"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableBody from "@mui/material/TableBody"
import { ArrayTab, CreateServiceCallTicketData, ExpensesData, ServiceCallData2, SparePartInventoryData} from "../../../Types/Types"
import TableContainer from "@mui/material/TableContainer"
import TableCell, {tableCellClasses} from "@mui/material/TableCell"


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
  borderRadius: "8px",
  // minWidth: "250px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "4px",
    height: "40px",
    width: "auto",
    // padding: "10px",
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
//   // "& .MuiSelect-select": {
//   //   borderRadius: "4px",
//   //   height: "40px",
//   //   width: "auto",
//   //   // padding: "10px",
//   // },
}));

const SelectInput = styled(Select)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  boxShadow: "none",
  fontFamily: "Montserrat",
  fontSize: 14,
  fontWeight: 400,
  color: "#383838",
  borderRadius: "4px",
  width: "95%",
  height: "40px",
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

// const ModalTittle = styled("text")(({ theme }) => ({
//   fontFamily: "Montserrat",
//   fontSize: 24,
//   fontWeight: 700,
// }));

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

const CreateSparePartsTab1 = (props: any) => {

  const { open, setOpen } = props;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [age, setAge] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [ticketList, setTicketList] = React.useState([...rows]);
  const [d, setData] =React.useState([]);
  const [data1, setData1] =React.useState<ArrayTab[]>([]);
  
  console.log(data1)
  React.useEffect(() => {
    setData1(props.props)
  });
  
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

  

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  const handleChangeItemCode = (event: any) => {
    props.setItemCode(event.target.value)
  };
  const handleChangeMRF = (event: any) => {
    props.setChangeMRF(event.target.value)
  };
  const handleChangeSerialNumber = (event: any) => {
    props.setIChangeSerialNumber(event.target.value)
  };
  const handleChangeItemDescription = (event: any) => {
    props.setItemDescription(event.target.value)
  };
  const handleChangeItemGroup = (event: any) => {
    props.setItemGroup(event.target.value)
  };
  const handleChangeCustomerID = (event: any) => {
    props.setCustomerID(event.target.value)
  };
  const handleChangeContactPerson = (event: any) => {
    props.setContactPerson(event.target.value)
  };
  const handlChangeAddress = (event: any) => {
    props.setAddress(event.target.value)
  };
  const handleChangeTelephoneNo = (event: any) => {
    props.setTelephoneNo(event.target.value)
  };
  const handleChangeStatus = (event: any) => {
    props.setChangeStatus(event.target.value);
  };
  const handleChangeServiceCallId = (event: any) => {
    props.setChangeServiceCallId(event.target.value)
  };
  const handleChangePriority = (event: any) => {
    props.setChangePriority(event.target.value)
  };
  const handleChangeCustomerName = (event: any) => {
    props.setCustomerName(event.target.value)
  };

 


//   const stidRegex = RegExp(
//     /^[0-9]{1,5}$/
//   );

//   const formValid = formErrors =>{
//     let valid = true;

//     Object.values(formErrors).forEach(val => {
//         val.length > 0 && (valid = false)
//     });
//     return valid;
// };

//   handleInputChange = (e) => {
//     const { name, value } = e.target;

//     let formErrors = this.state.formErrors;

//     switch(name){
//         case "stid":
//             formErrors.email = stidRegex.test(value) ? ""
//             : "invalid email address";
//             break;
//             default:
//               break;
//     }

//     this.setState({formErrors, [name]:value}, ()=>console.log(this.state));

//     this.setState({
//         ...this.state,
//         [name]: value
//     })
//   }

  return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          Spare Part Request ID
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
                        Spare Part ID
                      </StyledTableCell>
                      <StyledTableCell
                          sx={{
                            borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                          }}
                      >
                        Spare Part Description
                      </StyledTableCell>
                      <StyledTableCell
                          sx={{
                            borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                          }}
                      >
                        Remarks
                      </StyledTableCell>
                      <StyledTableCell
                          sx={{
                            borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                          }}
                      >
                        Available Quantity
                      </StyledTableCell>
                      <StyledTableCell
                          sx={{
                            borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                          }}
                      >
                        Request Quantity
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
                    {data1.map((row: ArrayTab, i: number) => (
                        <StyledTableRow key={Math.random()}>
                          <StyledTableCell
                              sx={{
                                borderLeft: "none",
                              }}
                          >
                            {row.spid}
                          </StyledTableCell>
                          <StyledTableCell
                              sx={{
                                borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                              }}
                          >
                            {row.description}
                          </StyledTableCell>
                          <StyledTableCell
                              sx={{
                                borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                              }}
                          >
                            {row.remark}
                          </StyledTableCell>
                          <StyledTableCell
                              sx={{
                                borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                              }}
                          >
                            {row.quantity}
                          </StyledTableCell>
                          <StyledTableCell
                              sx={{
                                borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                              }}
                          >
                            <TextBox
                                id="outlined-basic"
                                variant="outlined"
                                placeholder="Text (default)"
                                sx={{ width: "99%",backgroundColor: 'white' }}
                            />
                          </StyledTableCell>
                          <StyledTableCell
                              sx={{
                                borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                              }}
                          >
                          
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
                    sx={{ width: "300px", mt: 2 }}
                >
                  Add Spare Parts
                </ModalButton>
              </Grid>
            </Grid>
          </Box>
          <Divider
              orientation="horizontal"
              variant="middle"
              flexItem
              sx={{ marginTop: "30px" }}
          />


          <h2>Add Additional Spare Parts</h2> 

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
                    Spare Part Description
                  </StyledTableCell>
                  <StyledTableCell
                      sx={{
                        borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                      }}
                  >
                    Remarks
                  </StyledTableCell>
                  <StyledTableCell
                      sx={{
                        borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                      }}
                  >
                    Attachment
                  </StyledTableCell>
                  <StyledTableCell
                      sx={{
                        borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                      }}
                  >
                    Request Quantity
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
                {(rowsPerPage > 0
                        ? ticketList.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        : rows
                ).map((row: SparePartInventoryData, i: number) => (
                    <StyledTableRow key={Math.random()}>
                         <StyledTableCell
                          sx={{
                            borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                          }}
                      >
                        <TextBox
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Text (default)"
                            sx={{ width: "99%",backgroundColor: 'white' }}
                        />
                      </StyledTableCell>
                      <StyledTableCell
                          sx={{
                            borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                          }}
                      >
                        <TextBox
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Text (default)"
                            sx={{ width: "99%",backgroundColor: 'white' }}
                        />
                      </StyledTableCell>
                      <StyledTableCell
                          sx={{
                            borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                          }}
                      >
                        <Grid container spacing={2}>
                          <Grid item xs={10}>
                        
                        <TextBox
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Text (default)"
                            sx={{ width: "99%",backgroundColor: 'white' }}
                        />
                          </Grid>
                          <Grid item xs={2} md={2}>
                        <svg
                            width="21"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ marginLeft: "10px" }}
                        >
                          <path
                              d="M17.9688 9.875H12.5C12.0027 9.875 11.5258 9.67746 11.1742 9.32583C10.8225 8.97419 10.625 8.49728 10.625 8V2.53125C10.625 2.48981 10.6085 2.45007 10.5792 2.42076C10.5499 2.39146 10.5102 2.375 10.4688 2.375H8.38867C8.31572 2.2399 8.23074 2.11164 8.13477 1.9918C7.68438 1.43281 7.01523 1.125 6.25 1.125C4.77812 1.125 3.75 2.28164 3.75 3.9375V9.5625C3.75 10.5391 4.54453 11.125 5.3125 11.125C5.51831 11.1272 5.72251 11.0884 5.91309 11.0106C6.10368 10.9329 6.27682 10.8179 6.42237 10.6724C6.56791 10.5268 6.68292 10.3537 6.76064 10.1631C6.83837 9.97251 6.87725 9.76831 6.875 9.5625V3.625C6.875 3.45924 6.80915 3.30027 6.69194 3.18306C6.57473 3.06585 6.41576 3 6.25 3C6.08424 3 5.92527 3.06585 5.80806 3.18306C5.69085 3.30027 5.625 3.45924 5.625 3.625V9.5625C5.62636 9.60391 5.6192 9.64515 5.60398 9.68368C5.58876 9.72221 5.56579 9.7572 5.53649 9.78649C5.5072 9.81579 5.47221 9.83876 5.43368 9.85398C5.39515 9.8692 5.35391 9.87636 5.3125 9.875C5.22539 9.875 5 9.81875 5 9.5625V3.9375C5 3.18203 5.32852 2.375 6.25 2.375C7.40977 2.375 7.5 3.55273 7.5 3.91328V9.3332C7.5 10.0148 7.28633 10.6312 6.89805 11.0699C6.50391 11.5156 5.95586 11.75 5.3125 11.75C4.66914 11.75 4.12109 11.5156 3.72695 11.0699C3.33867 10.6312 3.125 10.0148 3.125 9.3332V6.125C3.125 5.95924 3.05915 5.80027 2.94194 5.68306C2.82473 5.56585 2.66576 5.5 2.5 5.5C2.33424 5.5 2.17527 5.56585 2.05806 5.68306C1.94085 5.80027 1.875 5.95924 1.875 6.125V9.3332C1.875 11.3453 3.17148 12.8344 5 12.9867V17.375C5 18.038 5.26339 18.6739 5.73223 19.1428C6.20107 19.6116 6.83696 19.875 7.5 19.875H15.625C16.288 19.875 16.9239 19.6116 17.3928 19.1428C17.8616 18.6739 18.125 18.038 18.125 17.375V10.0312C18.125 9.98981 18.1085 9.95007 18.0792 9.92076C18.0499 9.89146 18.0102 9.875 17.9688 9.875Z"
                              fill="#0091D5"
                          />
                          <path
                              d="M12.5 8.62506H17.5707C17.5861 8.625 17.6011 8.62038 17.6139 8.61179C17.6267 8.6032 17.6367 8.59103 17.6426 8.57679C17.6485 8.56256 17.65 8.5469 17.647 8.53179C17.644 8.51668 17.6366 8.50279 17.6258 8.49186L12.0082 2.87428C11.9973 2.86342 11.9834 2.85603 11.9683 2.85305C11.9532 2.85006 11.9375 2.8516 11.9233 2.85749C11.909 2.86338 11.8969 2.87334 11.8883 2.88613C11.8797 2.89891 11.8751 2.91396 11.875 2.92936V8.00006C11.875 8.16582 11.9408 8.3248 12.0581 8.44201C12.1753 8.55922 12.3342 8.62506 12.5 8.62506Z"
                              fill="#0091D5"
                          />
                        </svg>
                          </Grid>
                        </Grid>
                      </StyledTableCell>
                      <StyledTableCell
                          sx={{
                            borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                          }}
                      >
                        <TextBox
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Text (default)"
                            sx={{ width: "99%",backgroundColor: 'white' }}
                        />
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
                    sx={{ width: "300px", mt: 2 }}
                >
                  Add Additional Spare Parts
                </ModalButton>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <br></br>
      </>
  );
};

export default CreateSparePartsTab1;

import * as React from "react";
import { styled, useTheme, makeStyles } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Alert, DialogContentText, TextField } from "@mui/material";
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
    ManageUserDetails,
    TablePaginationActionsProps,
    UserRoleTypes,
} from "./../../../Types/Types";
import "./../../../Styles/Tabs.css";
import CreateServiceCallModal from "../../Modals/CreateServiceCall/CreateServiceCallModal"
import AdministrationModel from "../../Modals/Administration/AdministrationModel"
//import { useState } from "preact/hooks";
import ViewUserRoleSpecific from "../../Modals/Administration/ViewUserRoleSpecific";
import { useState } from "react";

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
    // padding: "2px",
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

// const rows: any = [];



// for (var i = 0; i < 50; i++) {
//     rows.push(
//         createData(
//             "ITEM_SD",
//             "Item Description ID",
//             "Customer C",
//             "Status S",
//             new Date(),
//             "Priority P",
//             "Subject S"
//         )
//     );
// }

const AdministrationManageUsers = (props: any) => {
    const [searchInput, setSearchInput] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);
    const [openView, setOpenView] = React.useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [open, setOpen] = React.useState(false);

    const [userId, setUserId] = React.useState(0);
    const [userName, setUserName] = React.useState('');
    const [userEmail, setUserEmail] = React.useState('');
    const [userMobile, setUserMobile] = React.useState('');
    const [userNIC, setUserNIC] = React.useState('');
    const [userRole, setUserRole] = React.useState('');
    const [manageUserDetails, setManageUserDetails] = React.useState('');
    const [loginID, setLoginID] = React.useState('');

    const [rows, setRows] = React.useState([]);
    const [openmsg, setOpenmsg] = React.useState(false);
    const [openmsgupdated, setOpenmsgUpdated] = React.useState(false);

    const [fields, setfields] = useState<any>({});
    const [errors,seterrors]= useState<any>({})
    

    React.useEffect(() => {
        getData();
    }, []);


    const getData = async() => {

        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };

        fetch('http://localhost:3000/manage-user-details-controller/get',requestOptions)
            .then(response=>{ return response.json()})
            .then(data=>{
            console.log(data)
            setRows(data)
            });

    }

    function select() {
        let field=fields
        if(!fields["Status"])
        field["Status"] = "0";
        // setfields({Status:"0"})
        handleValidation()
    }

    function handleValidation(){

        let formIsValid = true;

        //TelephoneNo
        if(typeof fields["TelephoneNo"] === "string"){
            
        if (fields["TelephoneNo"]==="") {
            errors["TelephoneNo"] = "Please Enter Telephone No";
            seterrors(errors)
        }
        else if (fields["TelephoneNo"].match(/^[0-9]{10}$/)) {
            errors["TelephoneNo"] = "";
            seterrors(errors)
        }
        else{
            errors["TelephoneNo"] = "Invalid Telephone No"
            seterrors(errors)
            setfields( fields )
            props.setfields({fields})
            seterrors(errors)
        }
        }

    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleClosemsg = () => {
        setOpenmsg(false);
    };
    
    const handleCloseUpdatedmsg = () => {
        setOpenmsgUpdated(false);
    };

    const handleClickOpen = (data: any) => {
        setManageUserDetails(data);
        setUserId(data.user.id);
        setUserName(data.UserName);
        setUserEmail(data.Email);
        setUserMobile(data.user.ContactNumber);
        setUserNIC(data.user.NIC);
        setUserRole(data.user.userType.Description);
        setLoginID(data.Id);

        setOpen(true);
        console.log(manageUserDetails)
    };

    // update user Details
    const updateData = async () => {
        setOpen(false);
    
        if ( userEmail == '' ){
            alert('Email Address Cannot Be Empty!');
        } else if (userMobile == '' ) {
            alert('Contact Number Cannot Be Empty!');
        } else if (userEmail == "" || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userEmail)) {
            alert('Email Address Is Invalid! Please Enter a Valid Email Address!');
        } else if (userMobile == "" || !/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i.test(userMobile)) {
            alert('Contact Number Is Invalid! Please Enter a Valid Contact Number!');
        } else {
            const requestOptions = {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                    NIC: userNIC,
                    ContactNumber: userMobile,
                    loginId: loginID,
                    Email:userEmail
                    })
                };
            
                fetch(`http://localhost:3000/manage-user-details-controller/update/${userId}`, requestOptions)
                    .then(response=>{ return response.json()})
                    .then(data=>{
                    console.log('success');
                    
                    });
                    setOpenmsgUpdated(true);
            
            }
        };
    
    function setOpenModalfunction(){
        setOpenModal(true)
    }
    function setOpenViewfunction(){
        setOpenView(true)
    }
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

    return (
        <>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle sx={{ textAlign: "center" }}>Update Your Details </DialogTitle>
                <DialogTitle sx={{ textAlign: "center" }}>You can update here only your Email and Contact Number.</DialogTitle>
                <DialogContent >
                <DialogContentText>
                    <DialogTitle >User ID:</DialogTitle>
                    <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Text (default)"
                    name=""
                    sx={{ width: "99%" }}
                    value={userId}
                    //onChange={(e) => {setOriginType(e.target.value)}}
                    />
                    <DialogTitle >User Name:</DialogTitle>
                    <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Text (default)"
                    name=""
                    sx={{ width: "99%" }}
                    value={userName}
                    //onChange={(e) => {setOriginDesc(e.target.value)}}
                    />
                    <DialogTitle >Email Address:</DialogTitle>
                    <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Text (default)"
                    name=""
                    sx={{ width: "99%" }}
                    value={userEmail}
                    onChange={(e) => {setUserEmail(e.target.value)}}
                    />
                    <DialogTitle >Contact Number:</DialogTitle>
                    <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Text (default)"
                    name=""
                    sx={{ width: "99%" }}
                    //value={fields["TelephoneNo"]}
                    value={userMobile}
                    onChange={(e) => {setUserMobile(e.target.value)}}
                    >
                    <span style={{color: "red"}}>{errors["TelephoneNo"]}</span>
                    </TextField>
                    <DialogTitle >NIC:</DialogTitle>
                    <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Text (default)"
                    name=""
                    sx={{ width: "99%" }}
                    value={userNIC}
                    //onChange={(e) => {setUserNIC(e.target.value)}}
                    />
                    <DialogTitle >User Role:</DialogTitle>
                    <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Text (default)"
                    name=""
                    sx={{ width: "99%" }}
                    value={userRole}
                    //onChange={(e) => {setOriginDesc(e.target.value)}}
                    />
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={updateData}>Update</Button>
                </DialogActions>
            </Dialog>

            <Stack spacing={6} direction="row">
                <Grid container rowSpacing={1}>
                    <Grid item xs={6}>
                        <Heading>Manage Users</Heading>

                    </Grid>
                    <Grid item xs={3} sx={{ pr: 3 }}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                onChange={(e) => setSearchInput(e.target.value)}
                                placeholder="Search…"
                                inputProps={{ "aria-label": "search" }}
                            />
                        </Search>
                    </Grid>
                    
                </Grid>
            </Stack>
            <Container>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                        <TableHead>
                            <TableRow >
                                <StyledTableCell sx={{ align: "center" }}>User ID</StyledTableCell>
                                <StyledTableCell sx={{ textAlign: "center" }}>User Name</StyledTableCell>
                                <StyledTableCell sx={{ textAlign: "center" }}>Email</StyledTableCell>
                                <StyledTableCell sx={{ textAlign: "center" }}>Mobile</StyledTableCell>
                                <StyledTableCell sx={{ textAlign: "center" }}>NIC</StyledTableCell>
                                <StyledTableCell sx={{ textAlign: "center" }}>User Role</StyledTableCell>
                                <StyledTableCell sx={{ textAlign: "center" }}>Actions</StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                    ? rows.slice(
                                        page * rowsPerPage,
                                        page * rowsPerPage + rowsPerPage
                                    )
                                    : rows
                            ).map((row: ManageUserDetails, i: number) => (
                                <StyledTableRow key={row.Id}>
                                    <StyledTableCell
                                        sx={{
                                            borderLeft: "none",
                                            textAlign: "center"
                                        }}
                                    >
                                        {row.user.id }
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {row.UserName }
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {row.Email}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                    {row.user.ContactNumber}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                    {row.user.NIC}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                    {row.user.userType.Description}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <Stack
                                            direction="row"
                                            justifyContent="center"
                                            alignItems="flex-start"
                                            spacing={0}
                                        >
                                        <ControlButton disableRipple onClick={() => handleClickOpen(row)}>
                                            <svg
                                                width="16"
                                                height="25"
                                                viewBox="0 0 16 17"
                                                className="controlButton"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path d="M15.36 14.98H0.64C0.286 14.98 0 15.266 0 15.62V16.34C0 16.428 0.072 16.5 0.16 16.5H15.84C15.928 16.5 16 16.428 16 16.34V15.62C16 15.266 15.714 14.98 15.36 14.98ZM2.914 13.3C2.954 13.3 2.994 13.296 3.034 13.29L6.398 12.7C6.438 12.692 6.476 12.674 6.504 12.644L14.982 4.166C15.0005 4.1475 15.0153 4.12552 15.0253 4.10133C15.0353 4.07713 15.0405 4.05119 15.0405 4.025C15.0405 3.99881 15.0353 3.97287 15.0253 3.94867C15.0153 3.92448 15.0005 3.9025 14.982 3.884L11.658 0.558C11.62 0.52 11.57 0.5 11.516 0.5C11.462 0.5 11.412 0.52 11.374 0.558L2.896 9.036C2.866 9.066 2.848 9.102 2.84 9.142L2.25 12.506C2.23054 12.6131 2.2375 12.7234 2.27025 12.8273C2.30301 12.9311 2.36059 13.0254 2.438 13.102C2.57 13.23 2.736 13.3 2.914 13.3Z" />
                                            </svg>
                                        </ControlButton>
                                        </Stack>
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

            {/*Updated Notification Message*/}
            <Dialog
                    open={openmsgupdated}
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
                    User Details Updated Successfully !
                    </DialogContentText>
                </DialogContent>
                <hr/>
                <DialogActions>
                     <Button onClick={handleCloseUpdatedmsg}>Ok</Button>
                </DialogActions>
                </Dialog>

            <AdministrationModel open={openModal} setOpen={setOpenModal} />
            
        </>
    );
};

export default AdministrationManageUsers;

                    

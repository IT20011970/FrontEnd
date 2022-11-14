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
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
    TablePaginationActionsProps,
    SparePartsRequestListData, ServiceCallData, ServiceCallData2,
} from "../../../Types/Types";
import "./../../../Styles/Tabs.css";

import CreateServiceCallModal from "../../Modals/CreateServiceCall/CreateServiceCallModal";
import {useEffect, useState} from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AppBar from "@mui/material/AppBar";
import Dashboard from "../../Dashboard";
import ServiceCall from "../../ServiceCall";
import SpareParts from "../../SpareParts";
import ResourceAllocation from "../../ResourceAllocation";
import CreateSparePartslModal from "../../Modals/CreateSpareParts/CreateSparePartslModal";
import CreateToolRequestModal from "../../Modals/CreateToolRequest/CreateToolRequestModal";


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

const a11yProps = (index: any) => {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}

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

const ResourceAllocationTab2 = () => {
    const [value, setValue] = React.useState(2);
    const drawerWidth = 240;
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    //Modal
    const [openModal, setOpenModal] = React.useState(false)
    const [openModal2, setOpenModal2] = React.useState(false);

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

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
        console.log(newValue);

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

        fetch('http://localhost:3000/service-calls/service',requestOptions)
            .then(response=>{ return response.json()})
            .then(data=>{
                //console.log(data[3].Groups[1].students)
                // console.log(data)
                setStudents(data)
            });
    } )

    return (<>
                <Container>
                <Stack spacing={6} direction="row">
                <Grid container rowSpacing={2}>
                    <Grid item xs={6}>
                        <Heading></Heading>
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
                            Create Vehicle Request
                        </RequestButton>
                    </Grid>
                </Grid>
            </Stack><br></br>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Vehicle ID</StyledTableCell>
                                    <StyledTableCell align="right">
                                        Plate No
                                    </StyledTableCell>
                                    <StyledTableCell align="right">Vehicle Description</StyledTableCell>
                                    <StyledTableCell align="right">Vehicle Type</StyledTableCell>
                                    <StyledTableCell align="right">Vehicle Capacity</StyledTableCell>
                                    <StyledTableCell align="right">More</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {(rowsPerPage > 0
                                        ? students.slice(
                                            page * rowsPerPage,
                                            page * rowsPerPage + rowsPerPage
                                        )
                                        : students
                                ).map(( row:ServiceCallData2, i: number) => (
                                    <StyledTableRow key={row.ServiceCallId}>
                                        <StyledTableCell
                                            sx={{
                                                borderLeft: "none",
                                            }}
                                        >
                                            {row.ServiceCallId}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row.itemEntity.ItemDescription}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row.customerEntity.CustomeName}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {row.Status}
                                        </StyledTableCell>
                                        
                                        <StyledTableCell>
                                            {row.Priority}
                                        </StyledTableCell>
                                       
                                        <StyledTableCell>
                                            <Stack
                                                direction="row"
                                                justifyContent="center"
                                                alignItems="flex-start"
                                                spacing={0}
                                            >
                                                <ControlButton disableRipple>
                                                    <svg
                                                        width="21"
                                                        height="21"
                                                        viewBox="0 0 21 21"
                                                        className="controlButton"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M10.5 13.125C11.9497 13.125 13.125 11.9497 13.125 10.5C13.125 9.05025 11.9497 7.875 10.5 7.875C9.05025 7.875 7.875 9.05025 7.875 10.5C7.875 11.9497 9.05025 13.125 10.5 13.125Z" />
                                                        <path d="M20.3046 10.2769C19.5327 8.28033 18.1928 6.55372 16.4503 5.31043C14.7078 4.06715 12.6392 3.36169 10.5002 3.28125C8.36117 3.36169 6.29259 4.06715 4.55012 5.31043C2.80766 6.55372 1.46769 8.28033 0.695834 10.2769C0.643706 10.4211 0.643706 10.5789 0.695834 10.7231C1.46769 12.7197 2.80766 14.4463 4.55012 15.6896C6.29259 16.9329 8.36117 17.6383 10.5002 17.7188C12.6392 17.6383 14.7078 16.9329 16.4503 15.6896C18.1928 14.4463 19.5327 12.7197 20.3046 10.7231C20.3567 10.5789 20.3567 10.4211 20.3046 10.2769ZM10.5002 14.7656C9.65655 14.7656 8.83183 14.5155 8.13036 14.0467C7.42888 13.578 6.88214 12.9118 6.55929 12.1324C6.23643 11.3529 6.15196 10.4953 6.31655 9.66782C6.48114 8.84037 6.8874 8.08031 7.48396 7.48375C8.08051 6.88719 8.84058 6.48093 9.66803 6.31634C10.4955 6.15175 11.3532 6.23622 12.1326 6.55908C12.912 6.88193 13.5782 7.42867 14.0469 8.13015C14.5157 8.83162 14.7658 9.65634 14.7658 10.5C14.7641 11.6308 14.3141 12.7148 13.5145 13.5143C12.715 14.3139 11.631 14.7639 10.5002 14.7656Z" />
                                                        
                                                    </svg>
                                                    </ControlButton>
                                                    <ControlButton>
                                                    <svg
                                                        width="25"
                                                        height="25"
                                                        viewBox="0 0 22 22"
                                                        className="controlButton"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                         <path d="M0 17C0 18.7 1.3 20 3 20H17C18.7 20 20 18.7 20 17V9H0V17ZM17 2H15V1C15 0.4 14.6 0 14 0C13.4 0 13 0.4 13 1V2H7V1C7 0.4 6.6 0 6 0C5.4 0 5 0.4 5 1V2H3C1.3 2 0 3.3 0 5V7H20V5C20 3.3 18.7 2 17 2Z" />
                                                    </svg>
                                                </ControlButton>
                                                <ControlButton disableRipple>
                                                <svg
                                                        width="25"
                                                        height="25"
                                                        viewBox="0 0 22 22"
                                                        className="controlButton"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M15.74 5.33L11.3 0.330001C11.2065 0.226408 11.0924 0.14353 10.9649 0.0866961C10.8375 0.0298621 10.6995 0.000330515 10.56 6.85395e-07H2.56C2.22775 -0.00396241 1.89797 0.0575607 1.5895 0.181057C1.28103 0.304553 0.999904 0.487604 0.762182 0.719755C0.524459 0.951906 0.334794 1.22861 0.204018 1.53407C0.0732421 1.83952 0.00391638 2.16775 0 2.5V17.5C0.00391638 17.8323 0.0732421 18.1605 0.204018 18.4659C0.334794 18.7714 0.524459 19.0481 0.762182 19.2802C0.999904 19.5124 1.28103 19.6954 1.5895 19.8189C1.89797 19.9424 2.22775 20.004 2.56 20H13.44C13.7723 20.004 14.102 19.9424 14.4105 19.8189C14.719 19.6954 15.0001 19.5124 15.2378 19.2802C15.4755 19.0481 15.6652 18.7714 15.796 18.4659C15.9268 18.1605 15.9961 17.8323 16 17.5V6C15.9994 5.75216 15.9067 5.5134 15.74 5.33ZM5 10H8C8.26522 10 8.51957 10.1054 8.70711 10.2929C8.89464 10.4804 9 10.7348 9 11C9 11.2652 8.89464 11.5196 8.70711 11.7071C8.51957 11.8946 8.26522 12 8 12H5C4.73478 12 4.48043 11.8946 4.29289 11.7071C4.10536 11.5196 4 11.2652 4 11C4 10.7348 4.10536 10.4804 4.29289 10.2929C4.48043 10.1054 4.73478 10 5 10ZM11 16H5C4.73478 16 4.48043 15.8946 4.29289 15.7071C4.10536 15.5196 4 15.2652 4 15C4 14.7348 4.10536 14.4804 4.29289 14.2929C4.48043 14.1054 4.73478 14 5 14H11C11.2652 14 11.5196 14.1054 11.7071 14.2929C11.8946 14.4804 12 14.7348 12 15C12 15.2652 11.8946 15.5196 11.7071 15.7071C11.5196 15.8946 11.2652 16 11 16ZM10.71 6C10.5038 5.9797 10.3139 5.87924 10.1811 5.72025C10.0483 5.56126 9.98327 5.35648 10 5.15V2L13.74 6H10.71Z" />
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

                <Switch>
                    <Route exact path="/ResourceAllocation">
                        {/*<ResourceAllocation value={value} />*/}
                    </Route>
                </Switch>

                <CreateToolRequestModal open={openModal} setOpen={setOpenModal} />
                
            </>
    );
};

export default ResourceAllocationTab2;

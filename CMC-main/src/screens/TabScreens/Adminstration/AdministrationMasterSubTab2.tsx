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
    UserRoleTypes,
} from "./../../../Types/Types";
import "./../../../Styles/Tabs.css";
import CreateServiceCallModal from "../../Modals/CreateServiceCall/CreateServiceCallModal"
import AdministrationModel from "../../Modals/Administration/AdministrationModel"
import { useState } from "preact/hooks";
import ViewUserRoleSpecific from "../../Modals/Administration/ViewUserRoleSpecific";

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

const AdministrationMasterSubTab2 = () => {
    const [searchInput, setSearchInput] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);
    const [openView, setOpenView] = React.useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [rows, setRows] = React.useState([]);

React.useEffect(() => {
    getData();
}, []);


const getData = async() => {

    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    };

    fetch('http://localhost:3000/origin-type-controller/get',requestOptions)
        .then(response=>{ return response.json()})
        .then(data=>{
           console.log(data)
           setRows(data)
        });

}

    
    
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
            <Stack spacing={6} direction="row">
                <Grid container rowSpacing={1}>
                    
                </Grid>
            </Stack>
            <Container>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                        <TableHead>
                            <TableRow >
                                <StyledTableCell sx={{ align: "center" }}>Problem Type</StyledTableCell>
                                <StyledTableCell sx={{ textAlign: "center" }}>Problem Type Description</StyledTableCell>
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
                            ).map((row: UserRoleTypes, i: number) => (
                                <StyledTableRow key={row.Id}>
                                    {/* <StyledTableCell
                                        sx={{
                                            borderLeft: "none",
                                            textAlign: "center"
                                        }}
                                    >
                                        {row.Id }
                                    </StyledTableCell> */}
                                    <StyledTableCell>
                                        {row.Description }
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {row.RoleDescription }
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
            <AdministrationModel open={openModal} setOpen={setOpenModal} />
            
        </>
    );
};

export default AdministrationMasterSubTab2;
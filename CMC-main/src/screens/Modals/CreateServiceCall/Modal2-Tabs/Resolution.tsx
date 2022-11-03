import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../../../../Styles/Modal.css";
import "../../../../Styles/ServiceCall.css";
import Grid from "@mui/material/Grid"
import {styled} from "@mui/material/styles"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableBody from "@mui/material/TableBody"
import {CreateServiceCallTicketData} from "../../../../Types/Types"
import TableContainer from "@mui/material/TableContainer"
import TableCell, {tableCellClasses} from "@mui/material/TableCell"

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
const rows: any = [];
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
const Resolution = (props: any) => {
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [ticketList, setTicketList] = React.useState([...rows]);
    const [page, setPage] = React.useState(0);
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <TextField
                id="outlined-multiline-static"
                // label="Multiline"
                multiline
                rows={6}
                sx={{ width: "100%" }}
                placeholder="Textarea (default)"
                // defaultValue="Default Value"
            />
            <Box sx={{ flexGrow: 1, py: 1 }}>
                <Grid container spacing={10}>
                    <Grid item xs={8} md={10}></Grid>
                    <Grid item xs={4} md={2}>
                        <ModalButton
                            variant="contained"
                            className="ModalCommonButton"
                            sx={{ width: "250px", mt: 2 }}
                        >
                            Save
                        </ModalButton>
                    </Grid>
                </Grid>
            </Box>
            <br/>
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
                                Date
                            </StyledTableCell>
                            <StyledTableCell
                                sx={{
                                    borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                                }}
                            >
                                Resoultion
                            </StyledTableCell>
                            <StyledTableCell
                                sx={{
                                    borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                                }}
                            >
                                Action
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
                        ).map((row: CreateServiceCallTicketData, i: number) => (
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
                                    {row.date.toString().substring(0, 24)}
                                </StyledTableCell>
                                <StyledTableCell
                                    sx={{
                                        borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                                    }}
                                >
                                    {row.priority}
                                </StyledTableCell>
                                <StyledTableCell
                                    sx={{
                                        borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                                    }}
                                >
                                    {row.priority}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default Resolution;

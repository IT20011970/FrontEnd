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
import {CreateServiceCallTicketData, Ticket} from "../../../../Types/Types"
import "../../../../Styles/Modal.css";
import "../../../../Styles/ServiceCall.css";

import CreateNewTicketModal from "../CreateTicket";
import {useEffect, useState} from "react"
import moment from "moment"

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

const History = (props: any) => {
    //Modal
    const [openModal, setOpenModal] = React.useState(false);

    const [ticketList, setTicketList] = React.useState([...rows]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [students, setStudents] =useState<any[]>([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };

        fetch('http://localhost:3000/spare-parts/History',requestOptions)
            .then(response=>{ return response.json()})
            .then(data=>{
                //console.log(data[3].Groups[1].students)
                // console.log(data)
                if(data[0]!=null)
                setStudents(data)
            });
    } ,[])

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
                                Date
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
                                Priority
                            </StyledTableCell>
                            <StyledTableCell
                                sx={{
                                    borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                                }}
                            >
                                Planned Start
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                                ? students.slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                : students
                        ).map((row: Ticket, i: number) => (
                            <StyledTableRow key={Math.random()}>
                                <StyledTableCell
                                    sx={{
                                        borderLeft: "none",
                                    }}
                                >
                                    {moment(row.CreatedOn).format("DD/MM/YYYY")}
                                </StyledTableCell>
                                <StyledTableCell
                                    sx={{
                                        borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                                    }}
                                >
                                    {row.AssignedTo}
                                </StyledTableCell>
                                <StyledTableCell
                                    sx={{
                                        borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                                    }}
                                >
                                    {row.serviceCall.Priority}
                                </StyledTableCell>
                                <StyledTableCell
                                    sx={{
                                        borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                                    }}
                                >
                                    {row.PlannedStartDate}
                                </StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
        </Box>
    );
};

export default History;

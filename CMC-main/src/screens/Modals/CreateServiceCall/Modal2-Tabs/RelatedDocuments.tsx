import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../../../../Styles/Modal.css";
import "../../../../Styles/ServiceCall.css";
import Grid from "@mui/material/Grid"
import {styled} from "@mui/material/styles"
import Button from "@mui/material/Button"
import {File, ResolutionType, ServiceCallData2, Solutions, Ticket} from "../../../../Types/Types"
import {now} from "moment"
import {useContext, useState} from "react";
import {ServiceContext} from "../../../../api/api";
import Paper from "@mui/material/Paper";
import Link from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import moment from "moment/moment";
import TableContainer from "@mui/material/TableContainer";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import fileDownload from 'js-file-download'
import axios from 'axios'
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
const RelatedDocuments = (props: any) => {
    const [file, setFile] = React.useState("");
    const Service =useContext(ServiceContext)
    const [data, setData] =React.useState<any[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    function onChange (e:any) {
        console.log(e.target.files[0])
         setFile(e.target.files[0])
    }
    function post(){
        let formData = new FormData()
        formData.append("file", file)

        fetch('http://localhost:3000/file', {
            method: "POST",
            headers:{'ServiceCall': props.props.serviceCallData.fields.ServiceCallId},
            body: formData
        })
        }
    React.useEffect(() => {
        getData()
    },[]);

    function getData (){
        if(Service !==undefined){
            Service.getFile(props.props.serviceCallData.fields.ServiceCallId).then((result)=>{
                // console.log(result)
                if(result[0].message!==null) {
                    console.log(result[0])
                   setData(result)
                }
            })
        }
    }
    function path(data:any){
        window.location.href='C:/Users/Gayan/Documents/GitHub/img1.png'
    }
   // async function download(){
   //      console.log("aaa")
   //          const requestOptions = {
   //              method: 'GET',
   //          };
   //         fetch('http://localhost:3000/15', requestOptions).then((res) => {
   //             console.log(res.body)
   //         // fileDownload(res,"a")
   //     })
   //     console.log(data)
   //           // data.then((res) => {
   //           //     fileDownload(res.data,"a")
   //           // })
   //  }
    function handleDownload (url:any, filename:any)  {
        axios.get(url, {
            responseType: 'blob',
        })
            .then((res) => {
                fileDownload(res.data, filename)
            })
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ flexGrow: 1, py: 1 }}>
                <Grid container spacing={10}>
                    <Grid item xs={4} md={8} >Select File</Grid>
                    <Grid item xs={4} md={2} >
                        <input
                            accept="/*"
                            style={{ display: 'none' }}
                            id="raised-button-file"
                            multiple
                            onChange={onChange}
                            type="file"
                        />
                        <label htmlFor="raised-button-file">
                                <Button   sx={{
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
                                    backgroundColor: "#0091D5",
                                }} component="span"  >
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
                                            fill="white"
                                        />
                                        <path
                                            d="M12.5 8.62506H17.5707C17.5861 8.625 17.6011 8.62038 17.6139 8.61179C17.6267 8.6032 17.6367 8.59103 17.6426 8.57679C17.6485 8.56256 17.65 8.5469 17.647 8.53179C17.644 8.51668 17.6366 8.50279 17.6258 8.49186L12.0082 2.87428C11.9973 2.86342 11.9834 2.85603 11.9683 2.85305C11.9532 2.85006 11.9375 2.8516 11.9233 2.85749C11.909 2.86338 11.8969 2.87334 11.8883 2.88613C11.8797 2.89891 11.8751 2.91396 11.875 2.92936V8.00006C11.875 8.16582 11.9408 8.3248 12.0581 8.44201C12.1753 8.55922 12.3342 8.62506 12.5 8.62506Z"
                                            fill="white"
                                        />
                                    </svg>
                                </Button>
                        </label>
                    </Grid>
                    <Grid item xs={4} md={2}>
                        <ModalButton variant="contained"
                                     className="ModalCommonButton" onClick={post}>
                            Send
                        </ModalButton>
                    </Grid>
               </Grid>
            </Box>
            <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
                <Table sx={{ width: "100%" }} aria-label="custom pagination table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell
                                sx={{
                                    borderLeft: "none",
                                }}
                            >
                                Path
                            </StyledTableCell>
                            <StyledTableCell
                                sx={{
                                    borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                                }}
                            >
                                Name
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
                                ? data.slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                : data
                        ).map((row: File, i: number) => (
                            <StyledTableRow >
                                <StyledTableCell
                                    sx={{
                                        borderLeft: "none",
                                    }}
                                >
                                    {row.Path}
                                </StyledTableCell>
                                <StyledTableCell
                                    sx={{
                                        borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                                    }}
                                >
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
                                            fill="black"
                                        />
                                        <path
                                            d="M12.5 8.62506H17.5707C17.5861 8.625 17.6011 8.62038 17.6139 8.61179C17.6267 8.6032 17.6367 8.59103 17.6426 8.57679C17.6485 8.56256 17.65 8.5469 17.647 8.53179C17.644 8.51668 17.6366 8.50279 17.6258 8.49186L12.0082 2.87428C11.9973 2.86342 11.9834 2.85603 11.9683 2.85305C11.9532 2.85006 11.9375 2.8516 11.9233 2.85749C11.909 2.86338 11.8969 2.87334 11.8883 2.88613C11.8797 2.89891 11.8751 2.91396 11.875 2.92936V8.00006C11.875 8.16582 11.9408 8.3248 12.0581 8.44201C12.1753 8.55922 12.3342 8.62506 12.5 8.62506Z"
                                            fill="black"
                                        />
                                    </svg>{row.Name}
                                </StyledTableCell>

                                <StyledTableCell
                                    sx={{
                                        borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                                    }}
                                > <a href={'C:/Users/Gayan/Documents/GitHub/img1.png'} download={'a.png'}>d</a>
                                    <ControlButton disableRipple >

                                        {/*<a href={row.Path} download>Click to download</a>*/}

                                        <svg
                                            width="16"
                                            height="17"
                                            viewBox="0 0 16 17"
                                            className="controlButton"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M15.36 14.98H0.64C0.286 14.98 0 15.266 0 15.62V16.34C0 16.428 0.072 16.5 0.16 16.5H15.84C15.928 16.5 16 16.428 16 16.34V15.62C16 15.266 15.714 14.98 15.36 14.98ZM2.914 13.3C2.954 13.3 2.994 13.296 3.034 13.29L6.398 12.7C6.438 12.692 6.476 12.674 6.504 12.644L14.982 4.166C15.0005 4.1475 15.0153 4.12552 15.0253 4.10133C15.0353 4.07713 15.0405 4.05119 15.0405 4.025C15.0405 3.99881 15.0353 3.97287 15.0253 3.94867C15.0153 3.92448 15.0005 3.9025 14.982 3.884L11.658 0.558C11.62 0.52 11.57 0.5 11.516 0.5C11.462 0.5 11.412 0.52 11.374 0.558L2.896 9.036C2.866 9.066 2.848 9.102 2.84 9.142L2.25 12.506C2.23054 12.6131 2.2375 12.7234 2.27025 12.8273C2.30301 12.9311 2.36059 13.0254 2.438 13.102C2.57 13.23 2.736 13.3 2.914 13.3Z" />
                                        </svg>
                                    </ControlButton>
                                </StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
                {/*<button onClick={e => this.handleDownload('https://your-website.com/your-image.jpg', 'test-download.jpg') >Download Image</button>*/}
            </TableContainer>
        </Box>
    );
};

export default RelatedDocuments;

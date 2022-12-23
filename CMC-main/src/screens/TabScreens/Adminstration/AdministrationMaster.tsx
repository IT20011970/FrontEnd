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
import SwipeableViews from "react-swipeable-views";
import Header from "../../../components/Header";
import SparePartsTab2 from "../SpareParts/SparePartsTab2";
import AdministrationMasterSubTab1 from "./AdministrationMasterSubTab1";
import AdministrationMasterSubTab2 from "./AdministrationMasterSubTab2";
import AdministrationMasterModel from "../../Modals/Administration/AdministrationMasterModel/AdministrationMasterModel";
import AdministrationMasterSubTab3 from "./AdministrationMasterSubTab3";
import AdministrationMasterSubTab4 from "./AdministrationMasterSubTab4";
import AdministrationMasterSubTab5 from "./AdministrationMasterSubTab5";
import AdministrationMasterSubTab6 from "./AdministrationMasterSubTab6";
import AdministrationMasterSubTab7 from "./AdministrationMasterSubTab7";
import { TabContext, TabList } from "@mui/lab";


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



const TabPanel = (props: any) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box>{children}</Box>}
        </div>
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

const AdministrationMaster = () => {
    const [value, setValue] = React.useState(0);
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

    const handleChangeIndex = (index: any) => {
        setValue(index);
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

    

    return (
        <>
            <Stack spacing={6} direction="row">
                <Grid container rowSpacing={2}>
                    <Grid item xs={6}>
                        <Heading>Manage Masters</Heading>
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
                    <Grid item xs={3}>
                        <RequestButton
                            variant="contained"
                            onClick={() => setOpenModal(true)}
                        >
                            Create Masters
                        </RequestButton>
                    </Grid>
                </Grid>
            </Stack>
            <br/>

            <Stack spacing={1} direction="row">
                <Grid container xs= {12} sm={12} md={12} rowSpacing={1} sx={{color: "#383838", backgroundColor: "#fff"}}>
                    <Grid item xs={12} >
                        <Switch>
                            <Route exact path="/Administration">
                            <Box>
                                <Tabs
                                    TabIndicatorProps={{
                                        style: {
                                            backgroundColor: "#0091D5",
                                            height: "6px",
                                        },
                                    }}
                                    value={value}
                                    onChange={handleChange}
                                    textColor="inherit"
                                    variant="fullWidth"
                                    
                                >
                                        <Tab label="Origins" {...a11yProps(0)} />
                                        <Tab label="Problem Types" {...a11yProps(1)} />
                                        <Tab label="Handled By" {...a11yProps(2)} />
                                        <Tab label="Cluster Head" {...a11yProps(3)} />
                                        <Tab label="Secretary" {...a11yProps(4)} />
                                        <Tab label="Sales Assistant" {...a11yProps(5)} />
                                        <Tab label="Engineers" {...a11yProps(6)} />
                                    </Tabs>
                            </Box>
                            </Route>
                        </Switch>
                    </Grid>
                </Grid>
            </Stack>

            <Container>
                <>
                    <Box>
                        <SwipeableViews
                            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                             index={value}
                             onChangeIndex={handleChangeIndex}
                        >
                            <TabPanel value={value}  index={0}>
                                <AdministrationMasterSubTab1 />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <AdministrationMasterSubTab2/>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <AdministrationMasterSubTab3/>
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                <AdministrationMasterSubTab4/>
                            </TabPanel>
                            <TabPanel value={value} index={4}>
                                <AdministrationMasterSubTab5/>
                            </TabPanel>
                            <TabPanel value={value} index={5}>
                                <AdministrationMasterSubTab6/>
                            </TabPanel>
                            <TabPanel value={value} index={6}>
                                <AdministrationMasterSubTab7/>
                            </TabPanel>
                            
                        </SwipeableViews>
                    </Box>
                </>
            </Container>


            <AdministrationMasterModel open={openModal} setOpen={setOpenModal} />
        </>
    );
};


export default AdministrationMaster;

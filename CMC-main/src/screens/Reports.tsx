import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Header from "./../components/Header";
import ServiceCallTab1 from "./TabScreens/ServiceCall/ServiceCallTab1";
import ServiceCallTab2 from "./TabScreens/ServiceCall/ServiceCallTab2";
import "./../Styles/Styles.css";
import ReportsTab1 from "./TabScreens/Reports/ReportsTab1";
import ReportsTab2 from "./TabScreens/Reports/ReportsTab2"

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

const Reports = (props: any) => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChangeIndex = (index: any) => {
        setValue(index);
    };

    return (
        <>
            <Header />
            <Box>
                <SwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={props.value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={props.value} index={0}>
                        <Header />
                        <ReportsTab1 />
                    </TabPanel>
                    <TabPanel value={props.value} index={1}>
                        <Header />
                        <ReportsTab2 />
                    </TabPanel>
                </SwipeableViews>
            </Box>
        </>
    );
};

export default Reports;

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
import "./../Styles/Styles.css";
import Administrationtab1 from "./TabScreens/Adminstration/Administrationtab1"
import AdministrationMaster from "./TabScreens/Adminstration/AdministrationMaster";
import AdministrationManageUsers from "./TabScreens/Adminstration/AdministrationManageUsers";

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

const Administration = (props: any) => {
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
                        <Administrationtab1 />
                    </TabPanel>
                    <TabPanel value={props.value} index={1}>
                        <Header />
                        <AdministrationManageUsers />
                    </TabPanel>
                    <TabPanel value={props.value} index={2}>
                        <Header />
                        <AdministrationMaster />
                    </TabPanel>
                </SwipeableViews>
            </Box>
        </>
    );
};

export default Administration;

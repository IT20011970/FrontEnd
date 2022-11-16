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
import Header from "../components/Header";
import SparePartsTab1 from "./TabScreens/SpareParts/SparePartsTab1";
import SparePartsTab2 from "./TabScreens/SpareParts/SparePartsTab2";
import "./../Styles/Styles.css";

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

const SpareParts = (props: any) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: any) => {
    setValue(index);
  };

  console.log("value: " + props.value);

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
            <SparePartsTab1 />
          
          </TabPanel>
          <TabPanel value={props.value} index={1}>
            <Header />
            <SparePartsTab2 />
          
          </TabPanel>
        </SwipeableViews>
      </Box>
    </>
  );
};

export default SpareParts;

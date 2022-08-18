import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Paper from "@mui/material/Paper";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

import "./../Styles/RightNav.css";

const drawerWidth = 220;

const ItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: "30px",
}));

const HeadingText = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  marginBottom: "5px",
  textAlign: "center",
  fontFamily: "Montserrat",
  fontSize: 20,
  fontWeight: 600,
  color: "#EA6A47",
  boxShadow: "none",
}));

const SubHeadingText = styled("text")(({ theme }) => ({
  fontFamily: "Montserrat",
  fontSize: 16,
  fontWeight: 700,
}));

const OnGoing = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  maxWidth: 170,
  backgroundColor: "#fff",
  marginBottom: "5px",
  marginLeft: "30px",
  borderLeft: "4px solid #0091D5",
  textAlign: "left",
  fontFamily: "Montserrat",
  fontSize: 16,
  fontWeight: 400,
  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
}));

const Completed = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  maxWidth: 170,
  backgroundColor: "#fff",
  marginBottom: "5px",
  marginLeft: "30px",
  borderLeft: "4px solid #23C320",
  textAlign: "left",
  fontFamily: "Montserrat",
  fontSize: 16,
  fontWeight: 400,
  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
}));

const Employee = styled(ListItem)(({ theme }) => ({
  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
  marginLeft: "30px",
  marginBottom: "5px",
  maxWidth: 170,
  borderRadius: "4px",
}));

const EmployeeText = styled("text")(({ theme }) => ({
  textAlign: "left",
  fontFamily: "Montserrat",
  fontSize: 16,
  fontWeight: 400,
}));

const ProfileImg = styled(Avatar)(({ theme }) => ({
  width: "25px",
  height: "25px",
  marginRight: "10px",
}));

const RightNav = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        className="RightNav"
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
          width: drawerWidth,
          zIndex: 0,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Toolbar />
        <HeadingText>02/02/2022</HeadingText>
        <Divider variant="middle" />
        <List>
          <ListItem>
            <ItemIcon>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7" cy="7" r="7" fill="#0091D5" />
              </svg>
            </ItemIcon>
            <SubHeadingText>On Going Tasks</SubHeadingText>
          </ListItem>

          <OnGoing>Task Name</OnGoing>
          <OnGoing>Task Name</OnGoing>
          <OnGoing>Task Name</OnGoing>
          <OnGoing>Task Name</OnGoing>
        </List>
        <Divider variant="middle" />
        <List>
          <ListItem>
            <ItemIcon>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7" cy="7" r="6" stroke="#23C420" stroke-width="2" />
              </svg>
            </ItemIcon>
            <SubHeadingText>On Going Tasks</SubHeadingText>
          </ListItem>
          <Completed>Task Name</Completed>
          <Completed>Task Name</Completed>
          <Completed>Task Name</Completed>
          <Completed>Task Name</Completed>
        </List>
        <Divider variant="middle" />
        <HeadingText>Employees</HeadingText>
        <Divider variant="middle" />

        <List>
          <ListItem disablePadding>
            <ListItem>
              <ItemIcon>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="7" cy="7" r="7" fill="#23C420" />
                </svg>
              </ItemIcon>
              <SubHeadingText>On Tasks</SubHeadingText>
            </ListItem>
          </ListItem>
          <Employee>
            <ProfileImg src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format" />
            <EmployeeText>Sam Smith</EmployeeText>
          </Employee>
          <Employee>
            <ProfileImg src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format" />
            <EmployeeText>Sam Smith</EmployeeText>
          </Employee>
          <Employee>
            <ProfileImg src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format" />
            <EmployeeText>Sam Smith</EmployeeText>
          </Employee>
          <Employee>
            <ProfileImg src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format" />
            <EmployeeText>Sam Smith</EmployeeText>
          </Employee>
        </List>

        <List>
          <ListItem disablePadding>
            <ListItem>
              <ItemIcon>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="7"
                    cy="7"
                    r="5.5"
                    stroke="#F96B1B"
                    stroke-width="3"
                  />
                </svg>
              </ItemIcon>
              <SubHeadingText>Away From Tasks</SubHeadingText>
            </ListItem>
          </ListItem>
          <Employee>
            <ProfileImg src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format" />
            <EmployeeText>Sam Smith</EmployeeText>
          </Employee>
          <Employee>
            <ProfileImg src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format" />
            <EmployeeText>Sam Smith</EmployeeText>
          </Employee>
          <Employee>
            <ProfileImg src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format" />
            <EmployeeText>Sam Smith</EmployeeText>
          </Employee>
          <Employee>
            <ProfileImg src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format" />
            <EmployeeText>Sam Smith</EmployeeText>
          </Employee>
        </List>

        <List>
          <ListItem disablePadding>
            <ListItem>
              <ItemIcon>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="7"
                    cy="7"
                    r="5.5"
                    stroke="#B51818"
                    stroke-width="3"
                  />
                </svg>
              </ItemIcon>
              <SubHeadingText>On Leave</SubHeadingText>
            </ListItem>
          </ListItem>
          <Employee>
            <ProfileImg src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format" />
            <EmployeeText>Sam Smith</EmployeeText>
          </Employee>
          <Employee>
            <ProfileImg src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format" />
            <EmployeeText>Sam Smith</EmployeeText>
          </Employee>
          <Employee>
            <ProfileImg src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format" />
            <EmployeeText>Sam Smith</EmployeeText>
          </Employee>
          <Employee>
            <ProfileImg src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format" />
            <EmployeeText>Sam Smith</EmployeeText>
          </Employee>
        </List>
      </Drawer>
    </Box>
  );
};

export default RightNav;

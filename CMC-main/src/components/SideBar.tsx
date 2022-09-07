import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Theme, CSSObject } from "@mui/material/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Dashboard from "./../screens/Dashboard";
import ServiceCall from "./../screens/ServiceCall";
import SpareParts from "./../screens/SpareParts";
// import "./../Styles/SideBar.css";
// import "./../Styles/TopNav.css";
// import "./../Styles/Styles.css";
import TabPanel from "./../screens/ServiceCall";
import ResourceAllocation from "../screens/ResourceAllocation";
import ServiceTicket from "../screens/ServiceTicket";
import Calender from "../screens/Calender";

const useStyles = makeStyles({
  topNavIcon: {
    color: "#383838 !important",
    fontSize: "1.5rem !important",
    "&:hover": {
      color: "#0091d5 !important",
    },
  },
  sideBarIcon: {
    marginLeft: "5px",
    fill: "#383838 !important",
  },
  sideBarLogoBtn: {
    marginLeft: "8px !important",
    backgroundColor: "none !important",
    borderRadius: "0 !important",
  },
  sideBarLogo: {
    marginLeft: "8px !important",
    backgroundColor: "none !important",
    borderRadius: "0 !important",
  },
  sideBarChevron: {
    width: "35px !important",
    height: "35px !important",
    backgroundColor: "#80bad5 !important",
    color: "white !important",
    fontSize: "2rem !important",
    "&:hover": {
      backgroundColor: "#0091d5 !important",
    },
  },
  sideBarLinkText: {
    "& .css-10hburv-MuiTypography-root": {
      fontFamily: "Montserrat",
      fontSize: "15px !important",
      fontWeight: 600,
      color: "#383838 !important",
      textDecoration: "none !important",
    },
  },
  sideBarListItem: {
    "&:hover": {
      backgroundColor: "rgb(26, 89, 151, 0.1) !important",
      fill: "#43d500 !important",
      borderLeft: "6px solid #0091d5 !important",
      "& $sideBarIcon": {
        fill: "#0091d5 !important",
      },
      "& $sideBarLinkText": {
        color: "#0091d5 !important",
      },
    },
  },
});

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  //   backgroundColor: "green",
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  maxHeight: "55px !important",
  minHeight: "55px !important",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  "&:focus, &:hover, &:visited, &:link, &:active": {
    textDecoration: "none",
  },
}));

const a11yProps = (index: any) => {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
};

const SideBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const [value, setValue] = React.useState(0);
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
    // console.log(newValue);
  };

  const handleChangeIndex = (index: any) => {
    setValue(index);
    // console.log(index);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      color="red"
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 4 new mails"
          className={classes.topNavIcon}
        >
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          className={classes.topNavIcon}
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          className={classes.topNavIcon}
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  //EndTopNav
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <AppBar
          sx={{
            ...(open && {
              width: `calc(100% - ${drawerWidth}px + 4em)`,
              marginLeft: `${drawerWidth}px`,
              transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
              }),
            }),
            backgroundColor: "#FFFFFF",
            boxShadow: "none",
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          }}
          position="fixed"
        >
          <StyledToolBar>
            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                className={classes.topNavIcon}
              >
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>

              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                className={classes.topNavIcon}
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>

              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                className={classes.topNavIcon}
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                className={classes.topNavIcon}
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </StyledToolBar>
          <Switch>
            <Route exact path="/"></Route>
            <Route exact path="/ServiceCall">
              <Box className="TabBox">
                <AppBar position="static">
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
                    <Tab label="Service Call" {...a11yProps(0)} />
                    <Tab label="Service call Documents" {...a11yProps(1)} />
                  </Tabs>
                </AppBar>
              </Box>
            </Route>
            <Route exact path="/ServiceTickets">
              {/* <p style={{ color: "red" }}>333eeeeeeeeeeeeeeee3</p> */}
            </Route>
            <Route exact path="/SpareParts">
              <Box className="TabBox">
                <AppBar position="static">
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
                    <Tab label="Inventory" {...a11yProps(0)} />
                    <Tab label="Spare Parts Request List" {...a11yProps(1)} />
                  </Tabs>
                </AppBar>
              </Box>
            </Route>
            <Route exact path="/ResourceAllocation">
              <Box className="TabBox">
                <AppBar position="static">
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
                    <Tab label="Resource Allocation" {...a11yProps(0)} />
                    <Tab label="Resource Allocation List" {...a11yProps(1)} />
                  </Tabs>
                </AppBar>
              </Box>
            </Route>
            <Route exact path="/Calendar">
              <Box className="TabBox">
                <AppBar position="static">
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
                    <Tab label="Personal Calendar" {...a11yProps(0)} />
                    <Tab label="Resource Calendar" {...a11yProps(1)} />
                  </Tabs>
                </AppBar>
              </Box>
            </Route>
          </Switch>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}

        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <ListItemIcon
              color="inherit"
              aria-label="open drawer"
              sx={{
                ...(open && { display: "none" }),
              }}
              className={classes.sideBarLogoBtn}
            >
              <svg
                width="80"
                height="10"
                viewBox="0 0 21 20"
                className={classes.sideBarLogo}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.188 12.192C5.04667 12.192 4.012 11.9467 3.084 11.456C2.16667 10.9547 1.44133 10.2667 0.908 9.392C0.385333 8.50667 0.124 7.50933 0.124 6.4C0.124 5.29067 0.385333 4.29867 0.908 3.424C1.44133 2.53867 2.16667 1.85067 3.084 1.36C4.012 0.858666 5.052 0.608 6.204 0.608C7.17467 0.608 8.04933 0.778666 8.828 1.12C9.61733 1.46133 10.2787 1.952 10.812 2.592L9.148 4.128C8.39067 3.25333 7.452 2.816 6.332 2.816C5.63867 2.816 5.02 2.97067 4.476 3.28C3.932 3.57867 3.50533 4 3.196 4.544C2.89733 5.088 2.748 5.70667 2.748 6.4C2.748 7.09333 2.89733 7.712 3.196 8.256C3.50533 8.8 3.932 9.22667 4.476 9.536C5.02 9.83467 5.63867 9.984 6.332 9.984C7.452 9.984 8.39067 9.54133 9.148 8.656L10.812 10.192C10.2787 10.8427 9.61733 11.3387 8.828 11.68C8.03867 12.0213 7.15867 12.192 6.188 12.192ZM22.7544 12L22.7384 5.28L19.4424 10.816H18.2744L14.9944 5.424V12H12.5624V0.799999H14.7064L18.8984 7.76L23.0264 0.799999H25.1544L25.1864 12H22.7544ZM33.2036 12.192C32.0623 12.192 31.0276 11.9467 30.0996 11.456C29.1823 10.9547 28.457 10.2667 27.9236 9.392C27.401 8.50667 27.1396 7.50933 27.1396 6.4C27.1396 5.29067 27.401 4.29867 27.9236 3.424C28.457 2.53867 29.1823 1.85067 30.0996 1.36C31.0276 0.858666 32.0676 0.608 33.2196 0.608C34.1903 0.608 35.065 0.778666 35.8436 1.12C36.633 1.46133 37.2943 1.952 37.8276 2.592L36.1636 4.128C35.4063 3.25333 34.4676 2.816 33.3476 2.816C32.6543 2.816 32.0356 2.97067 31.4916 3.28C30.9476 3.57867 30.521 4 30.2116 4.544C29.913 5.088 29.7636 5.70667 29.7636 6.4C29.7636 7.09333 29.913 7.712 30.2116 8.256C30.521 8.8 30.9476 9.22667 31.4916 9.536C32.0356 9.83467 32.6543 9.984 33.3476 9.984C34.4676 9.984 35.4063 9.54133 36.1636 8.656L37.8276 10.192C37.2943 10.8427 36.633 11.3387 35.8436 11.68C35.0543 12.0213 34.1743 12.192 33.2036 12.192ZM44.1093 0.799999H46.7013V9.888H52.3173V12H44.1093V0.799999ZM59.002 12.192C57.8393 12.192 56.7887 11.9413 55.85 11.44C54.922 10.9387 54.1913 10.2507 53.658 9.376C53.1353 8.49067 52.874 7.49867 52.874 6.4C52.874 5.30133 53.1353 4.31467 53.658 3.44C54.1913 2.55467 54.922 1.86133 55.85 1.36C56.7887 0.858666 57.8393 0.608 59.002 0.608C60.1647 0.608 61.21 0.858666 62.138 1.36C63.066 1.86133 63.7967 2.55467 64.33 3.44C64.8633 4.31467 65.13 5.30133 65.13 6.4C65.13 7.49867 64.8633 8.49067 64.33 9.376C63.7967 10.2507 63.066 10.9387 62.138 11.44C61.21 11.9413 60.1647 12.192 59.002 12.192ZM59.002 9.984C59.6633 9.984 60.2607 9.83467 60.794 9.536C61.3273 9.22667 61.7433 8.8 62.042 8.256C62.3513 7.712 62.506 7.09333 62.506 6.4C62.506 5.70667 62.3513 5.088 62.042 4.544C61.7433 4 61.3273 3.57867 60.794 3.28C60.2607 2.97067 59.6633 2.816 59.002 2.816C58.3407 2.816 57.7433 2.97067 57.21 3.28C56.6767 3.57867 56.2553 4 55.946 4.544C55.6473 5.088 55.498 5.70667 55.498 6.4C55.498 7.09333 55.6473 7.712 55.946 8.256C56.2553 8.8 56.6767 9.22667 57.21 9.536C57.7433 9.83467 58.3407 9.984 59.002 9.984ZM74.646 6.224H77.014V10.768C76.406 11.2267 75.702 11.5787 74.902 11.824C74.102 12.0693 73.2967 12.192 72.486 12.192C71.3233 12.192 70.278 11.9467 69.35 11.456C68.422 10.9547 67.6913 10.2667 67.158 9.392C66.6353 8.50667 66.374 7.50933 66.374 6.4C66.374 5.29067 66.6353 4.29867 67.158 3.424C67.6913 2.53867 68.4273 1.85067 69.366 1.36C70.3047 0.858666 71.3607 0.608 72.534 0.608C73.5153 0.608 74.406 0.773333 75.206 1.104C76.006 1.43467 76.678 1.91467 77.222 2.544L75.558 4.08C74.758 3.23733 73.7927 2.816 72.662 2.816C71.9473 2.816 71.3127 2.96533 70.758 3.264C70.2033 3.56267 69.7713 3.984 69.462 4.528C69.1527 5.072 68.998 5.696 68.998 6.4C68.998 7.09333 69.1527 7.712 69.462 8.256C69.7713 8.8 70.198 9.22667 70.742 9.536C71.2967 9.83467 71.926 9.984 72.63 9.984C73.3767 9.984 74.0487 9.824 74.646 9.504V6.224ZM84.8458 12.192C83.6831 12.192 82.6324 11.9413 81.6938 11.44C80.7658 10.9387 80.0351 10.2507 79.5018 9.376C78.9791 8.49067 78.7178 7.49867 78.7178 6.4C78.7178 5.30133 78.9791 4.31467 79.5018 3.44C80.0351 2.55467 80.7658 1.86133 81.6938 1.36C82.6324 0.858666 83.6831 0.608 84.8458 0.608C86.0084 0.608 87.0538 0.858666 87.9818 1.36C88.9098 1.86133 89.6404 2.55467 90.1738 3.44C90.7071 4.31467 90.9738 5.30133 90.9738 6.4C90.9738 7.49867 90.7071 8.49067 90.1738 9.376C89.6404 10.2507 88.9098 10.9387 87.9818 11.44C87.0538 11.9413 86.0084 12.192 84.8458 12.192ZM84.8458 9.984C85.5071 9.984 86.1044 9.83467 86.6378 9.536C87.1711 9.22667 87.5871 8.8 87.8858 8.256C88.1951 7.712 88.3498 7.09333 88.3498 6.4C88.3498 5.70667 88.1951 5.088 87.8858 4.544C87.5871 4 87.1711 3.57867 86.6378 3.28C86.1044 2.97067 85.5071 2.816 84.8458 2.816C84.1844 2.816 83.5871 2.97067 83.0538 3.28C82.5204 3.57867 82.0991 4 81.7898 4.544C81.4911 5.088 81.3418 5.70667 81.3418 6.4C81.3418 7.09333 81.4911 7.712 81.7898 8.256C82.0991 8.8 82.5204 9.22667 83.0538 9.536C83.5871 9.83467 84.1844 9.984 84.8458 9.984Z"
                  fill="#0091D5"
                />
              </svg>
            </ListItemIcon>

            <ListItemIcon
              sx={{
                ...(!open && { display: "none" }),
              }}
              className={classes.sideBarLogoBtn}
            >
              <svg
                width="370"
                height="25"
                viewBox="0 0 21 20"
                className={classes.sideBarLogo}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.532 18.288C7.82 18.288 6.268 17.92 4.876 17.184C3.5 16.432 2.412 15.4 1.612 14.088C0.828 12.76 0.436 11.264 0.436 9.6C0.436 7.936 0.828 6.448 1.612 5.136C2.412 3.808 3.5 2.776 4.876 2.04C6.268 1.288 7.828 0.912 9.556 0.912C11.012 0.912 12.324 1.168 13.492 1.68C14.676 2.192 15.668 2.928 16.468 3.888L13.972 6.192C12.836 4.88 11.428 4.224 9.748 4.224C8.708 4.224 7.78 4.456 6.964 4.92C6.148 5.368 5.508 6 5.044 6.816C4.596 7.632 4.372 8.56 4.372 9.6C4.372 10.64 4.596 11.568 5.044 12.384C5.508 13.2 6.148 13.84 6.964 14.304C7.78 14.752 8.708 14.976 9.748 14.976C11.428 14.976 12.836 14.312 13.972 12.984L16.468 15.288C15.668 16.264 14.676 17.008 13.492 17.52C12.308 18.032 10.988 18.288 9.532 18.288ZM34.3816 18L34.3576 7.92L29.4136 16.224H27.6616L22.7416 8.136V18H19.0936V1.2H22.3096L28.5976 11.64L34.7896 1.2H37.9816L38.0296 18H34.3816ZM50.0554 18.288C48.3434 18.288 46.7914 17.92 45.3994 17.184C44.0234 16.432 42.9354 15.4 42.1354 14.088C41.3514 12.76 40.9594 11.264 40.9594 9.6C40.9594 7.936 41.3514 6.448 42.1354 5.136C42.9354 3.808 44.0234 2.776 45.3994 2.04C46.7914 1.288 48.3514 0.912 50.0794 0.912C51.5354 0.912 52.8474 1.168 54.0154 1.68C55.1994 2.192 56.1914 2.928 56.9914 3.888L54.4954 6.192C53.3594 4.88 51.9514 4.224 50.2714 4.224C49.2314 4.224 48.3034 4.456 47.4874 4.92C46.6714 5.368 46.0314 6 45.5674 6.816C45.1194 7.632 44.8954 8.56 44.8954 9.6C44.8954 10.64 45.1194 11.568 45.5674 12.384C46.0314 13.2 46.6714 13.84 47.4874 14.304C48.3034 14.752 49.2314 14.976 50.2714 14.976C51.9514 14.976 53.3594 14.312 54.4954 12.984L56.9914 15.288C56.1914 16.264 55.1994 17.008 54.0154 17.52C52.8314 18.032 51.5114 18.288 50.0554 18.288ZM66.4139 1.2H70.3019V14.832H78.7259V18H66.4139V1.2ZM88.753 18.288C87.009 18.288 85.433 17.912 84.025 17.16C82.633 16.408 81.537 15.376 80.737 14.064C79.953 12.736 79.561 11.248 79.561 9.6C79.561 7.952 79.953 6.472 80.737 5.16C81.537 3.832 82.633 2.792 84.025 2.04C85.433 1.288 87.009 0.912 88.753 0.912C90.497 0.912 92.065 1.288 93.457 2.04C94.849 2.792 95.945 3.832 96.745 5.16C97.545 6.472 97.945 7.952 97.945 9.6C97.945 11.248 97.545 12.736 96.745 14.064C95.945 15.376 94.849 16.408 93.457 17.16C92.065 17.912 90.497 18.288 88.753 18.288ZM88.753 14.976C89.745 14.976 90.641 14.752 91.441 14.304C92.241 13.84 92.865 13.2 93.313 12.384C93.777 11.568 94.009 10.64 94.009 9.6C94.009 8.56 93.777 7.632 93.313 6.816C92.865 6 92.241 5.368 91.441 4.92C90.641 4.456 89.745 4.224 88.753 4.224C87.761 4.224 86.865 4.456 86.065 4.92C85.265 5.368 84.633 6 84.169 6.816C83.721 7.632 83.497 8.56 83.497 9.6C83.497 10.64 83.721 11.568 84.169 12.384C84.633 13.2 85.265 13.84 86.065 14.304C86.865 14.752 87.761 14.976 88.753 14.976ZM112.219 9.336H115.771V16.152C114.859 16.84 113.803 17.368 112.603 17.736C111.403 18.104 110.195 18.288 108.979 18.288C107.235 18.288 105.667 17.92 104.275 17.184C102.883 16.432 101.787 15.4 100.987 14.088C100.203 12.76 99.811 11.264 99.811 9.6C99.811 7.936 100.203 6.448 100.987 5.136C101.787 3.808 102.891 2.776 104.299 2.04C105.707 1.288 107.291 0.912 109.051 0.912C110.523 0.912 111.859 1.16 113.059 1.656C114.259 2.152 115.267 2.872 116.083 3.816L113.587 6.12C112.387 4.856 110.939 4.224 109.243 4.224C108.171 4.224 107.219 4.448 106.387 4.896C105.555 5.344 104.907 5.976 104.443 6.792C103.979 7.608 103.747 8.544 103.747 9.6C103.747 10.64 103.979 11.568 104.443 12.384C104.907 13.2 105.547 13.84 106.363 14.304C107.195 14.752 108.139 14.976 109.195 14.976C110.315 14.976 111.323 14.736 112.219 14.256V9.336ZM127.519 18.288C125.775 18.288 124.199 17.912 122.791 17.16C121.399 16.408 120.303 15.376 119.503 14.064C118.719 12.736 118.327 11.248 118.327 9.6C118.327 7.952 118.719 6.472 119.503 5.16C120.303 3.832 121.399 2.792 122.791 2.04C124.199 1.288 125.775 0.912 127.519 0.912C129.263 0.912 130.831 1.288 132.223 2.04C133.615 2.792 134.711 3.832 135.511 5.16C136.311 6.472 136.711 7.952 136.711 9.6C136.711 11.248 136.311 12.736 135.511 14.064C134.711 15.376 133.615 16.408 132.223 17.16C130.831 17.912 129.263 18.288 127.519 18.288ZM127.519 14.976C128.511 14.976 129.407 14.752 130.207 14.304C131.007 13.84 131.631 13.2 132.079 12.384C132.543 11.568 132.775 10.64 132.775 9.6C132.775 8.56 132.543 7.632 132.079 6.816C131.631 6 131.007 5.368 130.207 4.92C129.407 4.456 128.511 4.224 127.519 4.224C126.527 4.224 125.631 4.456 124.831 4.92C124.031 5.368 123.399 6 122.935 6.816C122.487 7.632 122.263 8.56 122.263 9.6C122.263 10.64 122.487 11.568 122.935 12.384C123.399 13.2 124.031 13.84 124.831 14.304C125.631 14.752 126.527 14.976 127.519 14.976Z"
                  fill="#0091D5"
                />
              </svg>
            </ListItemIcon>
          </DrawerHeader>

          <List>
            <StyledLink to="/">
              <ListItem
                button
                key={"Dashboard"}
                className={classes.sideBarListItem}
              >
                <ListItemIcon>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 18 18"
                    className={classes.sideBarIcon}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.0679 0.228001C4.70441 0.0756109 3.29536 0.0756109 1.93187 0.228001C1.05469 0.326039 0.345389 1.01679 0.241946 1.90123C0.0788564 3.29565 0.0788565 4.70432 0.241946 6.09874C0.345389 6.98317 1.05469 7.67393 1.93187 7.77197C3.29537 7.92436 4.70441 7.92436 6.0679 7.77197C6.94508 7.67393 7.65438 6.98317 7.75783 6.09874C7.92092 4.70432 7.92092 3.29565 7.75783 1.90123C7.65438 1.01679 6.94508 0.326039 6.0679 0.228001Z" />
                    <path d="M6.0679 10.228C4.70441 10.0756 3.29536 10.0756 1.93187 10.228C1.05469 10.326 0.345389 11.0168 0.241946 11.9012C0.0788564 13.2956 0.0788565 14.7043 0.241946 16.0987C0.345389 16.9832 1.05469 17.6739 1.93187 17.772C3.29537 17.9244 4.70441 17.9244 6.0679 17.772C6.94508 17.6739 7.65438 16.9832 7.75783 16.0987C7.92092 14.7043 7.92092 13.2956 7.75783 11.9012C7.65438 11.0168 6.94508 10.326 6.0679 10.228Z" />
                    <path d="M16.0679 0.228001C14.7044 0.0756109 13.2954 0.0756109 11.9319 0.228001C11.0547 0.326039 10.3454 1.01679 10.242 1.90123C10.0789 3.29565 10.0789 4.70432 10.242 6.09874C10.3454 6.98317 11.0547 7.67393 11.9319 7.77197C13.2954 7.92436 14.7044 7.92436 16.0679 7.77197C16.9451 7.67393 17.6544 6.98317 17.7578 6.09874C17.9209 4.70432 17.9209 3.29565 17.7578 1.90123C17.6544 1.01679 16.9451 0.326039 16.0679 0.228001Z" />
                    <path d="M16.0679 10.228C14.7044 10.0756 13.2954 10.0756 11.9319 10.228C11.0547 10.326 10.3454 11.0168 10.242 11.9012C10.0789 13.2956 10.0789 14.7043 10.242 16.0987C10.3454 16.9832 11.0547 17.6739 11.9319 17.772C13.2954 17.9244 14.7044 17.9244 16.0679 17.772C16.9451 17.6739 17.6544 16.9832 17.7578 16.0987C17.9209 14.7043 17.9209 13.2956 17.7578 11.9012C17.6544 11.0168 16.9451 10.326 16.0679 10.228Z" />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary={"Dashboard"}
                  className={classes.sideBarLinkText}
                />
              </ListItem>
            </StyledLink>

            <StyledLink to="/ServiceCall">
              <ListItem
                button
                key={"Service Call"}
                className={classes.sideBarListItem}
              >
                <ListItemIcon>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 21 20"
                    className={classes.sideBarIcon}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.5 4H14.5V2C14.5 0.9 13.6 0 12.5 0H8.5C7.4 0 6.5 0.9 6.5 2V4H2.5C1.4 4 0.5 4.9 0.5 6V18C0.5 19.1 1.4 20 2.5 20H18.5C19.6 20 20.5 19.1 20.5 18V6C20.5 4.9 19.6 4 18.5 4ZM8.5 2H12.5V4H8.5V2ZM13.5 13H11.5V15C11.5 15.55 11.05 16 10.5 16C9.95 16 9.5 15.55 9.5 15V13H7.5C6.95 13 6.5 12.55 6.5 12C6.5 11.45 6.95 11 7.5 11H9.5V9C9.5 8.45 9.95 8 10.5 8C11.05 8 11.5 8.45 11.5 9V11H13.5C14.05 11 14.5 11.45 14.5 12C14.5 12.55 14.05 13 13.5 13Z" />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary={"Service Call"}
                  sx={{ textDecoration: "none !important" }}
                  className={classes.sideBarLinkText}
                />
              </ListItem>
            </StyledLink>

            <StyledLink to="/ServiceTickets">
              <ListItem
                button
                key={"Service Tickets"}
                className={classes.sideBarListItem}
              >
                <ListItemIcon>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 22 22"
                    className={classes.sideBarIcon}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.5901 1.53001C14.1682 1.10835 13.5961 0.87149 12.9996 0.87149C12.4031 0.87149 11.831 1.10835 11.4091 1.53001L1.53011 11.41C1.32118 11.6189 1.15544 11.867 1.04237 12.14C0.929293 12.413 0.871094 12.7055 0.871094 13.001C0.871094 13.2965 0.929293 13.5891 1.04237 13.8621C1.15544 14.135 1.32118 14.3831 1.53011 14.592L2.70211 15.763C3.21211 16.274 3.92911 16.183 4.36211 15.925C4.60097 15.7832 4.88026 15.725 5.15588 15.7595C5.43151 15.7941 5.68777 15.9195 5.88419 16.1159C6.08062 16.3124 6.20601 16.5686 6.24059 16.8442C6.27516 17.1199 6.21694 17.3992 6.07511 17.638C5.81811 18.071 5.72611 18.788 6.23711 19.298L7.41011 20.47C7.61905 20.6789 7.86708 20.8447 8.14007 20.9578C8.41305 21.0708 8.70564 21.129 9.00111 21.129C9.29659 21.129 9.58917 21.0708 9.86216 20.9578C10.1351 20.8447 10.3832 20.6789 10.5921 20.47L20.4701 10.592C20.679 10.3831 20.8448 10.135 20.9579 9.86205C21.0709 9.58907 21.1291 9.29649 21.1291 9.00101C21.1291 8.70553 21.0709 8.41295 20.9579 8.13997C20.8448 7.86698 20.679 7.61894 20.4701 7.41001L19.2991 6.23801C18.7891 5.72801 18.0711 5.81801 17.6381 6.07601C17.3993 6.21784 17.12 6.27606 16.8443 6.24148C16.5687 6.20691 16.3125 6.08151 16.116 5.88509C15.9196 5.68866 15.7942 5.43241 15.7596 5.15678C15.7251 4.88115 15.7833 4.60186 15.9251 4.36301C16.1831 3.93001 16.2741 3.21301 15.7631 2.70301L14.5911 1.53001H14.5901Z" />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary={"Service Tickets"}
                  className={classes.sideBarLinkText}
                />
              </ListItem>
            </StyledLink>

            <StyledLink to="/SpareParts">
              <ListItem
                button
                key={"Spare Parts"}
                className={classes.sideBarListItem}
              >
                <ListItemIcon>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 22 22"
                    className={classes.sideBarIcon}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 0H2C1 0 0 0.9 0 2V5.01C0 5.73 0.43 6.35 1 6.7V18C1 19.1 2.1 20 3 20H17C17.9 20 19 19.1 19 18V6.7C19.57 6.35 20 5.73 20 5.01V2C20 0.9 19 0 18 0ZM13 12H7V10H13V12ZM18 5H2V2L18 1.98V5Z" />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary={"Spare Parts"}
                  className={classes.sideBarLinkText}
                />
              </ListItem>
            </StyledLink>

            <StyledLink to="/ResourceAllocation">
              <ListItem
                button
                key={"Resource Allocation"}
                className={classes.sideBarListItem}
              >
                <ListItemIcon>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 22 22"
                    className={classes.sideBarIcon}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.5505 5.38048V8.87779C17.1788 8.16644 15.6203 7.91459 14.0989 8.15839C12.5774 8.40219 11.1711 9.1291 10.082 10.2348C8.9928 11.3405 8.27674 12.768 8.03657 14.3126C7.79641 15.8571 8.04451 17.4392 8.74523 18.8317H3.31259C2.43403 18.8317 1.59147 18.4774 0.970235 17.8467C0.349004 17.2161 0 16.3607 0 15.4689V5.38048H18.5505ZM15.2379 0C16.1165 0 16.959 0.354294 17.5803 0.984941C18.2015 1.61559 18.5505 2.47093 18.5505 3.3628V4.03536H0V3.3628C0 2.47093 0.349004 1.61559 0.970235 0.984941C1.59147 0.354294 2.43403 0 3.31259 0H15.2379ZM12.0128 11.3555C12.1082 11.7007 12.1347 12.0618 12.0907 12.4175C12.0467 12.7733 11.9331 13.1165 11.7566 13.427C11.58 13.7376 11.3441 14.0091 11.0627 14.2258C10.7814 14.4425 10.4601 14.5999 10.118 14.6887L9.5058 14.8474C9.46159 15.3021 9.46603 15.7603 9.51905 16.2141L9.98281 16.3257C10.3341 16.41 10.6647 16.5664 10.9544 16.785C11.2441 17.0037 11.4867 17.2802 11.6673 17.5975C11.848 17.9148 11.9629 18.2662 12.005 18.6301C12.047 18.9941 12.0154 19.3629 11.9121 19.7141L11.7438 20.2817C12.0856 20.5561 12.4553 20.7902 12.8502 20.9785L13.2808 20.5158C13.5287 20.2493 13.8277 20.037 14.1593 19.892C14.4909 19.7471 14.8483 19.6724 15.2093 19.6727C15.5704 19.6729 15.9276 19.7481 16.259 19.8935C16.5905 20.0389 16.8891 20.2516 17.1367 20.5184L17.5832 21C17.9701 20.8184 18.3358 20.5938 18.6724 20.3301L18.4657 19.5822C18.3701 19.237 18.3434 18.8757 18.3873 18.5198C18.4312 18.164 18.5448 17.8206 18.7213 17.5099C18.8979 17.1992 19.1338 16.9275 19.4153 16.7107C19.6968 16.494 20.0182 16.3365 20.3605 16.2477L20.97 16.0903C21.014 15.6352 21.0096 15.1765 20.9568 14.7223L20.4956 14.612C20.1442 14.5277 19.8134 14.3714 19.5236 14.1526C19.2339 13.9338 18.9912 13.6572 18.8105 13.3398C18.6299 13.0223 18.515 12.6708 18.473 12.3066C18.431 11.9425 18.4628 11.5735 18.5664 11.2223L18.7333 10.656C18.3919 10.3813 18.0207 10.1471 17.6269 9.95792L17.1963 10.4206C16.9485 10.6872 16.6496 10.8996 16.318 11.0447C15.9865 11.1898 15.6292 11.2645 15.2681 11.2644C14.907 11.2643 14.5498 11.1893 14.2183 11.0439C13.8868 10.8986 13.5881 10.686 13.3405 10.4193L12.8939 9.93774C12.5075 10.1187 12.1422 10.343 11.8047 10.6063L12.0128 11.3555ZM15.2379 16.814C14.8865 16.814 14.5495 16.6723 14.301 16.42C14.0525 16.1678 13.9129 15.8256 13.9129 15.4689C13.9129 15.1121 14.0525 14.77 14.301 14.5177C14.5495 14.2655 14.8865 14.1238 15.2379 14.1238C15.5893 14.1238 15.9264 14.2655 16.1748 14.5177C16.4233 14.77 16.5629 15.1121 16.5629 15.4689C16.5629 15.8256 16.4233 16.1678 16.1748 16.42C15.9264 16.6723 15.5893 16.814 15.2379 16.814Z" />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary={"Resource Allocation"}
                  className={classes.sideBarLinkText}
                />
              </ListItem>
            </StyledLink>

            <StyledLink to="/Attendance">
              <ListItem
                button
                key={"Attendance"}
                className={classes.sideBarListItem}
              >
                <ListItemIcon>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 22 22"
                    className={classes.sideBarIcon}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 2H11.82C11.4 0.84 10.3 0 9 0C7.7 0 6.6 0.84 6.18 2H2C0.9 2 0 2.9 0 4V18C0 19.1 0.9 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM9 2C9.55 2 10 2.45 10 3C10 3.55 9.55 4 9 4C8.45 4 8 3.55 8 3C8 2.45 8.45 2 9 2ZM9 6C10.66 6 12 7.34 12 9C12 10.66 10.66 12 9 12C7.34 12 6 10.66 6 9C6 7.34 7.34 6 9 6ZM15 18H3V16.6C3 14.6 7 13.5 9 13.5C11 13.5 15 14.6 15 16.6V18Z" />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary={"Attendance"}
                  className={classes.sideBarLinkText}
                />
              </ListItem>
            </StyledLink>

            <StyledLink to="/Calendar">
              <ListItem
                button
                key={"Calendar"}
                className={classes.sideBarListItem}
              >
                <ListItemIcon>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 22 22"
                    className={classes.sideBarIcon}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 17C0 18.7 1.3 20 3 20H17C18.7 20 20 18.7 20 17V9H0V17ZM17 2H15V1C15 0.4 14.6 0 14 0C13.4 0 13 0.4 13 1V2H7V1C7 0.4 6.6 0 6 0C5.4 0 5 0.4 5 1V2H3C1.3 2 0 3.3 0 5V7H20V5C20 3.3 18.7 2 17 2Z" />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary={"Calendar"}
                  className={classes.sideBarLinkText}
                />
              </ListItem>
            </StyledLink>

            <StyledLink to="/Reports">
              <ListItem
                button
                key={"Reports"}
                className={classes.sideBarListItem}
              >
                <ListItemIcon>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 22 22"
                    className={classes.sideBarIcon}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.625 19.5H1.375C1.05339 19.5 0.775066 19.3856 0.54004 19.1567C0.305013 18.9279 0.1875 18.6465 0.1875 18.3125V1.70605C0.1875 1.37207 0.305013 1.09066 0.54004 0.861816C0.775066 0.632975 1.05339 0.518555 1.375 0.518555H9.68752V7.0498C9.68752 7.21061 9.74628 7.34977 9.86379 7.46729C9.9813 7.5848 10.1205 7.64355 10.2813 7.64355H16.8125V18.3125C16.8125 18.6465 16.6981 18.9279 16.4693 19.1567C16.2404 19.3856 15.959 19.5 15.625 19.5ZM13.8438 15.9375H13.25V11.7812C13.25 11.6204 13.1913 11.4813 13.0738 11.3638C12.9562 11.2463 12.8171 11.1875 12.6563 11.1875H11.4688C11.308 11.1875 11.1688 11.2463 11.0513 11.3638C10.9338 11.4813 10.875 11.6204 10.875 11.7812V15.9375H9.68752V9.40625C9.68752 9.24544 9.62876 9.10628 9.51125 8.98877C9.39374 8.87126 9.25458 8.8125 9.09377 8.8125H7.90627C7.74546 8.8125 7.6063 8.87126 7.48879 8.98877C7.37127 9.10628 7.31252 9.24544 7.31252 9.40625V15.9375H6.12501V12.9688C6.12501 12.8079 6.06626 12.6688 5.94874 12.5513C5.83123 12.4338 5.69207 12.375 5.53126 12.375H4.34376C4.18295 12.375 4.04379 12.4338 3.92628 12.5513C3.80876 12.6688 3.75001 12.8079 3.75001 12.9688V15.9375H3.15626C2.99545 15.9375 2.85629 15.9963 2.73878 16.1138C2.62126 16.2313 2.56251 16.3704 2.56251 16.5312C2.56251 16.6921 2.62126 16.8312 2.73878 16.9487C2.85629 17.0662 2.99545 17.125 3.15626 17.125H13.8438C14.017 17.125 14.1592 17.0662 14.2705 16.9487C14.3819 16.8312 14.4375 16.6921 14.4375 16.5312C14.4375 16.3704 14.3788 16.2313 14.2613 16.1138C14.1437 15.9963 14.0046 15.9375 13.8438 15.9375ZM10.875 0.5C11.1966 0.5 11.4688 0.611328 11.6914 0.833984L16.46 5.60254C16.695 5.83756 16.8125 6.12207 16.8125 6.45605H10.875V0.5Z" />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary={"Reports"}
                  className={classes.sideBarLinkText}
                />
              </ListItem>
            </StyledLink>

            <StyledLink to="/Masters">
              <ListItem
                button
                key={"Masters"}
                className={classes.sideBarListItem}
              >
                <ListItemIcon>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 22 22"
                    className={classes.sideBarIcon}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.74 5.33L11.3 0.330001C11.2065 0.226408 11.0924 0.14353 10.9649 0.0866961C10.8375 0.0298621 10.6995 0.000330515 10.56 6.85395e-07H2.56C2.22775 -0.00396241 1.89797 0.0575607 1.5895 0.181057C1.28103 0.304553 0.999904 0.487604 0.762182 0.719755C0.524459 0.951906 0.334794 1.22861 0.204018 1.53407C0.0732421 1.83952 0.00391638 2.16775 0 2.5V17.5C0.00391638 17.8323 0.0732421 18.1605 0.204018 18.4659C0.334794 18.7714 0.524459 19.0481 0.762182 19.2802C0.999904 19.5124 1.28103 19.6954 1.5895 19.8189C1.89797 19.9424 2.22775 20.004 2.56 20H13.44C13.7723 20.004 14.102 19.9424 14.4105 19.8189C14.719 19.6954 15.0001 19.5124 15.2378 19.2802C15.4755 19.0481 15.6652 18.7714 15.796 18.4659C15.9268 18.1605 15.9961 17.8323 16 17.5V6C15.9994 5.75216 15.9067 5.5134 15.74 5.33ZM5 10H8C8.26522 10 8.51957 10.1054 8.70711 10.2929C8.89464 10.4804 9 10.7348 9 11C9 11.2652 8.89464 11.5196 8.70711 11.7071C8.51957 11.8946 8.26522 12 8 12H5C4.73478 12 4.48043 11.8946 4.29289 11.7071C4.10536 11.5196 4 11.2652 4 11C4 10.7348 4.10536 10.4804 4.29289 10.2929C4.48043 10.1054 4.73478 10 5 10ZM11 16H5C4.73478 16 4.48043 15.8946 4.29289 15.7071C4.10536 15.5196 4 15.2652 4 15C4 14.7348 4.10536 14.4804 4.29289 14.2929C4.48043 14.1054 4.73478 14 5 14H11C11.2652 14 11.5196 14.1054 11.7071 14.2929C11.8946 14.4804 12 14.7348 12 15C12 15.2652 11.8946 15.5196 11.7071 15.7071C11.5196 15.8946 11.2652 16 11 16ZM10.71 6C10.5038 5.9797 10.3139 5.87924 10.1811 5.72025C10.0483 5.56126 9.98327 5.35648 10 5.15V2L13.74 6H10.71Z" />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary={"Masters"}
                  className={classes.sideBarLinkText}
                />
              </ListItem>
            </StyledLink>

            <StyledLink to="/Administration">
              <ListItem
                button
                key={"Administration"}
                className={classes.sideBarListItem}
              >
                <ListItemIcon>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 22 22"
                    className={classes.sideBarIcon}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 11C17.34 11 17.67 11.04 18 11.09V6.27L10.5 3L3 6.27V11.18C3 15.72 6.2 19.97 10.5 21C11.05 20.87 11.58 20.68 12.1 20.45C11.41 19.47 11 18.28 11 17C11 13.69 13.69 11 17 11Z" />
                    <path d="M17 13C14.79 13 13 14.79 13 17C13 19.21 14.79 21 17 21C19.21 21 21 19.21 21 17C21 14.79 19.21 13 17 13ZM17 14.38C17.62 14.38 18.12 14.89 18.12 15.5C18.12 16.11 17.61 16.62 17 16.62C16.39 16.62 15.88 16.11 15.88 15.5C15.88 14.89 16.38 14.38 17 14.38ZM17 19.75C16.07 19.75 15.26 19.29 14.76 18.58C14.81 17.86 16.27 17.5 17 17.5C17.73 17.5 19.19 17.86 19.24 18.58C18.74 19.29 17.93 19.75 17 19.75Z" />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary={"Administration"}
                  className={classes.sideBarLinkText}
                />
              </ListItem>
            </StyledLink>
          </List>
          {/* <Divider /> */}
          <br />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            sx={{
              marginLeft: open ? "40% !important" : "25% !important",
            }}
            className={classes.sideBarChevron}
          >
            {open && <ChevronLeftIcon />}
            {!open && <ChevronRightIcon />}
          </IconButton>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 4, backgroundColor: "#ebebeb" }}
        >
          <DrawerHeader />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/ServiceCall">
              <ServiceCall value={value} />
            </Route>
            <Route exact path="/ServiceTickets">
              <ServiceTicket  value={value}/>
            </Route>
            <Route exact path="/SpareParts">
              <SpareParts value={value} />
            </Route>
            <Route exact path="/ResourceAllocation">
              <ResourceAllocation value={value} />
            </Route>
            <Route exact path="/Calendar">
              <Calender value={value} />
            </Route>
          </Switch>
        </Box>
      </Box>
    </Router>
  );
};

export default SideBar;

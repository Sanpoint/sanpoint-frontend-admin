import React, { useState, Fragment } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import AllInboxRoundedIcon from "@mui/icons-material/AllInboxRounded";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import LaptopRoundedIcon from "@mui/icons-material/LaptopRounded";
import SellRoundedIcon from "@mui/icons-material/SellRounded";
import AddAlertRoundedIcon from "@mui/icons-material/AddAlertRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import ClassIcon from "@mui/icons-material/Class";
import { Link } from "react-router-dom";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
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
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
      <MenuItem onClick={handleMenuClose}>Sign Out</MenuItem>
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
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
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
          color="inherit"
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
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Fragment key="left">
        <Drawer
          anchor="left"
          open={open}
          onClose={() => setOpen(false)}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <Box sx={{ width: 250 }} role="presentation">
            <List>
              <ListItem key={1}>
              <ListItemButton>
                  <Link to="/" style={{ textDecoration: "none" , color: "#808080" , display :"flex"}}>
                <ListItemIcon>
                  <DashboardRoundedIcon />
                </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem key={2}>
                <ListItemButton>
                  <Link to="/classroom" style={{ textDecoration: "none" , color: "#808080" , display :"flex"}}>
                <ListItemIcon>
                  <ClassIcon />
                </ListItemIcon>
                  <ListItemText primary="Classroom" />
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem key={3}>
                <ListItemButton>
                  <Link to="/packages" style={{ textDecoration: "none" , color: "#808080" , display :"flex"}}>
                <ListItemIcon>
                  <AllInboxRoundedIcon />
                </ListItemIcon>
                  <ListItemText primary="Packages" />
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem key={4}>
                <ListItemButton>
                  <Link to="/studentmanagement" style={{ textDecoration: "none" , color: "#808080" , display :"flex"}}>
                <ListItemIcon>
                  <PeopleOutlineRoundedIcon />
                </ListItemIcon>
                  <ListItemText primary="Student management" />
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem key={5}>
                <ListItemButton>
                  <Link to="/paymentmanagement" style={{ textDecoration: "none" , color: "#808080" , display :"flex"}}>
                <ListItemIcon>
                  <CurrencyRupeeRoundedIcon />
                </ListItemIcon>
                  <ListItemText primary="Payment Management" />
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem key={7}>
                <ListItemButton>
                  <Link to="/liveclasses" style={{ textDecoration: "none" , color: "#808080" , display :"flex"}}>
                <ListItemIcon>
                  <LaptopRoundedIcon />
                </ListItemIcon>
                  <ListItemText primary="Live Classes" />
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem key={8}>
                <ListItemButton>
                  <Link to="/couponmanagement" style={{ textDecoration: "none" , color: "#808080" , display :"flex"}}>
                <ListItemIcon>
                  <SellRoundedIcon />
                </ListItemIcon>
                  <ListItemText primary="Coupon Management" />
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem key={9}>
                <ListItemButton>
                  <Link to="/newsalerts" style={{ textDecoration: "none" , color: "#808080" , display :"flex"}}>
                <ListItemIcon>
                  <AddAlertRoundedIcon />
                </ListItemIcon>
                  <ListItemText primary="News Alerts" />
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem key={10}>
                <ListItemButton>
                  <Link to="/settings" style={{ textDecoration: "none" , color: "#808080" , display :"flex"}}>
                <ListItemIcon>
                  <SettingsRoundedIcon />
                </ListItemIcon>
                  <ListItemText primary="Global Settings" />
                  </Link>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Sanpoint
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
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
              color="inherit"
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
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      
    </Box>
  );
}

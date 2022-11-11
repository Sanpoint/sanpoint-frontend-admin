import React, { useState, Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
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
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Fragment key="right">
        <Drawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <Box sx={{ width: 250 }} role="presentation">
            <List>
              <ListItem key={1}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <ListItemButton>
                    <ListItemText sx={{ color: "white" }} primary="Home" />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem key={2}>
                <ListItemIcon>
                  <CreateIcon />
                </ListItemIcon>
                <Link to="/create" style={{ textDecoration: "none" }}>
                  <ListItemButton>
                    <ListItemText primary="Generator" sx={{ color: "white" }} />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem key={3}>
                <ListItemIcon>
                  <ArticleIcon />
                </ListItemIcon>
                <Link to="/configs" style={{ textDecoration: "none" }}>
                  <ListItemButton>
                    <ListItemText
                      primary="Configs Blog"
                      sx={{ color: "white" }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="p" sx={{ flexGrow: 2 }}>
            Share your configs
          </Typography>
          <Button color="inherit">
            <Typography>Login</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
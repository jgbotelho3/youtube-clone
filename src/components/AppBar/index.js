import React from "react";
import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AppsIcon from "@material-ui/icons/Apps";
import { useStyles } from "./style";

function Menu() {
  const classes = useStyles();
  return (
    <AppBar color="inherit" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuIcon}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <img src="/images/preto.png" alt="Logo versão preta" className={classes.logo} />
        <div className={classes.grow} />

        <IconButton
          className={classes.resources}
          color="inherit"
          aria-label="Create"
        >
          <VideoCallIcon />
        </IconButton>

        <IconButton
          className={classes.resources}
          color="inherit"
          aria-label="Youtube Apps"
        >
          <AppsIcon />
        </IconButton>

        <IconButton
          className={classes.resources}
          color="inherit"
          aria-label="Settings"
        >
          <MoreVertIcon />
        </IconButton>
        <Button
          startIcon={<AccountCircle />}
          variant="outlined"
          color="secondary"
        >
          Fazer Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Menu;

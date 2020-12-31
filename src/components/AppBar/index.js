import React from "react";
import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AppsIcon from "@material-ui/icons/Apps";
import { useStyles } from "./style";

const Menu = () => {
  const classes = useStyles();
  const theme = useTheme();
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
        <img src={theme.palette.type === 'dark' ? '/images/branco.png' : '/images/preto.png'} alt="Logo" className={classes.logo} />
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

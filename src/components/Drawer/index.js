import React from "react";
import {
  Drawer,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Button,
  ListSubheader,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { features, theBestOfYoutube } from "../../mock";
import { useStyles } from "./style";

function SideBar() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {features.map((feature) => (
            <>
              <ListItem classes={{ root: classes.listItem }} button key={feature.title}>
                <ListItemIcon>{feature.icon}</ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={feature.title}
                />
              </ListItem>
              {feature.divider && <Divider classes={{ root: classes.divider }} />}
            </>
          ))}
        </List>
        <Box p={7} mt={-5}>
          <Typography variant="body2">
            Sign in to like videos, comment and subscribe.
          </Typography>
          <Box mt={2}>
            <Button
              color="secondary"
              variant="outlined"
              startIcon={<AccountCircle />}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Divider />
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              className={classes.subheader}
            >
              The best of Youtube
            </ListSubheader>
          }
        >
          {theBestOfYoutube.map((item, index) => (
            <ListItem classes={{ root: classes.listItem }} button key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={item.title}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
}

export default SideBar;

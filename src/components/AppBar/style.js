import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuIcon: {
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },
  logo: {
    height: 30
  },
  resources: {
    paddingRight: theme.spacing(2),
  },
  toggle:{
    marginRight: theme.spacing(4),
    cursor: 'pointer'
  }
}));

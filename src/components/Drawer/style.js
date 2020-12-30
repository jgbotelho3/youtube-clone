import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;


export const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
        borderRight: 'none'
      },
      drawerContainer: {
        overflow: 'auto',
      },
      listItem: {
          paddingTop: 4,
          paddingBottom: 4
      },
      listItemText: {
          fontSize: 14
      },
      divider: {
          marginTop: 10,
          marginBottom: 10
      },
      subheader:{
          textTransform: 'uppercase'
      }
}));


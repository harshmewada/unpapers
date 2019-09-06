import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Stars from "@material-ui/icons/Stars";
import Contact from "@material-ui/icons/People";
import Info from "@material-ui/icons/Info";

import Favorite from "@material-ui/icons/Favorite";
import Bug from "@material-ui/icons/BugReport";
import Adb from "@material-ui/icons/Adb";
import Work from "@material-ui/icons/Work";
import bug from "../Images/bug.png";
import work from "../Images/work.png";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360
  },

  icons: {
    color: "#FC6E32"
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Navlist() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <Stars className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="Rate" className={classes.text}>
            Rate
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Contact className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="Contact Developer" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Favorite className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <Info className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Bug className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="Report Bugs" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <Adb className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="V 1.0" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Work className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="Work with Us" />
        </ListItem>
      </List>
    </div>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import help from "../Images/help.png";
import about from "../Images/about.png";
import support from "../Images/support.png";
import rate from "../Images/rate.png";
import contact from "../Images/contact.png";
import android from "../Images/android.png";

import bug from "../Images/bug.png";
import work from "../Images/work.png";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360
  },
  text: {}
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
            <img src={rate} />
          </ListItemIcon>
          <ListItemText primary="Rate" className={classes.text}>
            Rate
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img src={contact} />
          </ListItemIcon>
          <ListItemText primary="Contact Developer" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img src={support} />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <img src={about} />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img src={bug} />
          </ListItemIcon>
          <ListItemText primary="Report Bugs" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <img src={android} />
          </ListItemIcon>
          <ListItemText primary="V 1.0" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img src={work} />
          </ListItemIcon>
          <ListItemText primary="Work with Us" />
        </ListItem>
      </List>
    </div>
  );
}

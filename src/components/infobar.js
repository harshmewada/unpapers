import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Camera from "@material-ui/icons/CameraEnhanceRounded";
import Download from "@material-ui/icons/CloudDownloadSharp";
import Wallpaper from "@material-ui/icons/Wallpaper";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import NavigationIcon from "@material-ui/icons/Navigation";

const useStyles = makeStyles(theme => ({
  info: {
    position: "absolute",
    top: "88%",
    left: "75%"
  },
  icon: {
    color: "#fff"
  },
  photographer: {
    backgroundColor: "#000",
    marginTop: "-10px",
    "&:focus": { backgroundColor: "#000" }
  },
  listitem: {
    marginRight: "-5vw"
  }
}));

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    background: "rgba(46, 46, 46, 0.01)",
    boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.7)",
    backdropFilter: "blur(50px)",
    color: "#fff"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {},
  photographer: {
    backgroundColor: "#000",
    marginTop: "-10px",
    fontStyle: "none",
    "&:focus": { backgroundColor: "#000" }
  }
}))(MenuItem);

export const Infobar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.info}>
      <Fab
        color="default"
        aria-label="add"
        className={classes.fab}
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Wallpaper />
      </Fab>
      <div>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <StyledMenuItem className={classes.photographer}>
            <ListItemIcon className={classes.listitem}>
              <Camera className={classes.icon} />
            </ListItemIcon>
            <ListItemText>
              Photo By <a>Mars</a> on <a>Unsplash</a>
            </ListItemText>
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemIcon className={classes.listitem}>
              <Wallpaper className={classes.icon} />
            </ListItemIcon>
            <ListItemText>Set As Wallpaper</ListItemText>
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemIcon className={classes.listitem}>
              <Download className={classes.icon} />
            </ListItemIcon>
            <ListItemText>Download Wallpaper</ListItemText>
          </StyledMenuItem>
        </StyledMenu>
      </div>
    </div>
  );
};

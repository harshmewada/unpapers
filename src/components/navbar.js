import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import menu from "../Images/menu.svg";

import Navlist from "./navlist";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(0)
  },
  title: {
    flexGrow: 1,
    fontFamily: "Poppins",
    fontSize: "9vw",
    color: "#7C7D81",
    fontWeight: "700",
    marginLeft: theme.spacing(1)
  },
  appbar: {
    backgroundColor: "inherit",
    color: "black"
  },
  main: {
    marginTop: "2.5vh"
  },
  list: {
    width: 300,
    height: "100vh"
    // backgroundImage: `url(${navbg})`
  },
  fullList: {
    width: "auto"
  },
  navtitle: {
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "9vw",
    color: "#000",
    fontWeight: "700",
    paddingTop: 150,
    paddingBottom: 20
  },
  menuicon: {
    height: "2vh"
  },
  image: {
    position: "absolute",
    width: 150,
    left: 200,
    top: -75
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });
  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };
  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onKeyDown={toggleDrawer(side, false)}
    >
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={10}>
          <Typography
            className={classes.navtitle}
            onClick={e => console.log(e)}
          >
            Dark Papers
          </Typography>

          <Divider />
          <List>
            <Navlist />
          </List>
        </Grid>
      </Grid>
    </div>
  );

  return (
    <div className={classes.main}>
      <Grid container direction="column" justify="center">
        <Grid item xs={12}>
          <AppBar position="static" elevation={0} className={classes.appbar}>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Dark Papers
              </Typography>
              <div>
                <Button
                  className={classes.menuButton}
                  onClick={toggleDrawer("right", true)}
                >
                  <img src={menu} className={classes.menuicon} alt="Menu" />
                </Button>
                <SwipeableDrawer
                  className={classes.swipable}
                  anchor="right"
                  open={state.right}
                  onClose={toggleDrawer("right", false)}
                  onOpen={toggleDrawer("right", true)}
                >
                  {sideList("right")}
                </SwipeableDrawer>
              </div>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </div>
  );
};
export default Navbar;

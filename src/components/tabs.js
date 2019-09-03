import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Recents from "./recents";
import Popular from "./popular";
import bg2 from "../Images/bg2.png";
import { height } from "@material-ui/system";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${bg2})`

    // backgroundColor: theme.palette.background.paper
  },
  tablabel: {
    textTransform: "none",
    fontFamily: "Roboto",
    fontSize: "5vw",
    fontWeight: "550",
    width: "43%",
    margin: 5,
    borderBottomColor: "#FC6E32"
  },
  tabbar: {
    backgroundColor: "white"
    // width: "80%",
    // display: "flex",
    // justifyContent: "center"
  },
  tab: {
    textAlign: "center"
  }
}));

export default function Tabdiv() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.tabbar} elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          className={classes.tab}
        >
          <Tab label="Popular" className={classes.tablabel} {...a11yProps(0)} />
          <Tab label="Recents" className={classes.tablabel} {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Recents />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Popular />
      </TabPanel>
    </div>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core";
import { Infobar } from "./infobar";
const useStyles = makeStyles(theme => ({
  full: {
    minHeight: "100vh"
  }
}));
const Download = () => {
  const classes = useStyles();
  return (
    <div
      className={classes.full}
      style={{
        backgroundImage: `url(${"https://source.unsplash.com/random"})`
      }}
    >
      <Infobar />
    </div>
  );
};
export default Download;

import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Image from "../Images/lines.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  title: {
    fontColor: "blue",
    fontSize: "18vw",
    fontFamily: "Poppins",
    fontWeight: "580",
    lineHeight: "8vh",
    fontStyle: "normal"
  },
  main: {
    textAlign: "center",
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center"
  },
  button: {
    textTransform: "none",
    fontSize: "5vw",
    fontFamily: "Quicksand",
    fontWeight: 1000,
    padding: "1vh 10vw ",
    backgroundColor: "#52e2d9",
    borderRadius: "50px"
  },
  btnlink: {
    color: "#fff",
    "&:visited": { color: "none" }
  },
  titlewrapper: {
    marginTop: "10vh"
  },
  desc: {
    fontFamily: "Roboto",
    fontSize: "4vw",
    fontWeight: 400
  },
  descwrapper: {
    marginTop: "50vh"
  },
  btnwrapper: {
    margin: "5vh auto 5vh auto"
  }
}));
const Intro = () => {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.main}>
        <Grid
          container
          direction="column"
          spacing={0}
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={12} className={classes.titlewrapper}>
            <Typography variant="h3" className={classes.title}>
              Dark Papers
            </Typography>
          </Grid>
          <Grid item xs={10} className={classes.descwrapper}>
            <Typography className={classes.desc}>
              Download World’s Best Dark Wallpapers Selected For Your Device
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.btnwrapper}>
            <Button
              elevation={0}
              variant="contained"
              size="large"
              className={classes.button}
            >
              <Link to="/wallpapers" className={classes.btnlink}>
                Let's Start
              </Link>
            </Button>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
};
export default Intro;

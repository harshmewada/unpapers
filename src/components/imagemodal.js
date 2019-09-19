import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import Cancel from "@material-ui/icons/CancelTwoTone";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(3px)",
    border: "none"
  },
  paper: {
    height: "93%",
    width: "80%",
    background: "#303030"
  },
  image: {
    width: "100%",
    height: "80%"
  },
  loader: {
    display: "flex",
    width: "100%",
    height: "80%",
    alignItems: "center",
    justifyContent: "center"
  },
  usrdiv: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 15
  },
  by: {
    fontFamily: "Poppins",
    color: "#A2A2A2",
    fontSize: 15
  },
  usrname: {
    fontFamily: "Poppins",
    fontWeight: 700,
    color: "white",
    fontSize: 20,
    marginLeft: 5
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    boxShadow: "0 0px 1px 2px rgba(33, 203, 243, .3)",
    borderRadius: "50px",

    paddingLeft: 20,
    paddingRight: 20,
    color: "white",
    fontFamily: "Poppins",
    fontWeight: 800
  },
  cancel: {
    display: "flex",
    position: "absolute",
    top: "5vh",
    left: "7vh",
    fontSize: 20
  }
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  const [load, setLoad] = React.useState("none");
  const [open] = React.useState(props.type);
  const [Image] = React.useState(
    props.image.raw + "&w=1080&h=1920&dpi=2&fit=crop"
  );

  // const Image = props.image.raw + "&w=1080&h=1920&dpi=2&fit=crop";
  const usr = props.user.name;
  const dload = props.links.download;

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={props.close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
        style={{ border: "none" }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Cancel className={classes.cancel} onClick={props.close} />

            <img
              src={Image}
              className={classes.image}
              alt={""}
              onLoad={() => setLoad("flex")}
              style={{ display: `${load}` }}
            />
            {load === "none" ? (
              <div className={classes.loader}>
                <CircularProgress />
              </div>
            ) : null}

            <div className={classes.usrdiv}>
              <span className={classes.by}>Image By </span>
              <span className={classes.usrname}>{usr}</span>
              <div style={{ display: "block", margin: 10 }}>
                <span className={classes.by}>on </span>
                <span className={classes.usrname}>
                  <a href="https://unsplash.com">Unsplash</a>
                </span>
              </div>
              <div className={classes.btnContainer}>
                <a href={`${dload}`}>
                  <Button className={classes.btn}>Download</Button>
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

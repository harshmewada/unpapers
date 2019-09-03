import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Card, CardActionArea, CardMedia } from "@material-ui/core";
import SingleImage from "./singleImage";
import Unsplash, { toJson } from "unsplash-js";
import { async } from "q";
const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: "10px",
    boxShadow: " 0px 0px 5px rgba(0, 0, 0, 0.25)"
  },
  media: {
    minHeight: 300
  }
}));

const Recents = () => {
  const classes = useStyles();
  const [state, setstate] = useState([]);
  const [photoarray, setphotoarray] = useState([]);
  const Unsplash = require("unsplash-js").default;
  const myfun = e => {
    return e;
  };
  const unsplash = new Unsplash({
    applicationId:
      "106a139f9735777ee5e220038c1dfd52ca3f91db8491cf5094660dfc2592e4a7",
    secret: "9d5527e0b234642afa71a0bca96afaa14bf14bd000fabc693e31a29cfcb9d7ea"
  });

  async function imgurl() {
    const file = await unsplash.photos.listPhotos(2, 100, "latest");
    let result = await file;
    const array = await result.json();
    // console.log(array);
    setstate(array);
  }
  // imgurl();

  var fruits = [];
  const photo = state.forEach(function(i, val) {
    const file = i;
    const ima = i.urls;

    fruits.push(ima);
  });

  return (
    <div className={classes.main}>
      <Grid container direction="row" spacing={2}>
        {fruits.map(file => (
          <Grid item xs={6}>
            <SingleImage image={file} key={file} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default Recents;

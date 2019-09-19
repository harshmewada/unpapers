import React, { useState } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: "5px",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
  },
  media: {
    minHeight: 300
  }
}));
const SingleImage = props => {
  const classes = useStyles();
  // console.log(props.image, "props");
  const hi = props.image.small + "&w=500 &dpi=2&fit=crop";
  // console.log(props, "image");
  return (
    <Grid item xs={6}>
      <Card className={classes.card} onClick={() => props.modal(true, props)}>
        {props.image ? (
          <CardActionArea>
            {/* {console.log(props.image)} */}
            <CardMedia image={hi} className={classes.media}></CardMedia>
          </CardActionArea>
        ) : (
          "loading"
        )}
      </Card>
    </Grid>
  );
};
export default SingleImage;

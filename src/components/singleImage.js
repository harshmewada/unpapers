import React from "react";
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
    boxShadow: " 0px 0px 4vw rgba(0, 0, 0, 0.25)"
  },
  media: {
    minHeight: 300
  }
}));
const SingleImage = props => {
  const classes = useStyles();
  // console.log(props.image, "props");
  const hi = props.image;

  return (
    <Grid item xs={6}>
      <Card className={classes.card}>
        {props.image ? (
          <CardActionArea>
            {/* {console.log(props.image)} */}
            <CardMedia image={hi.small} className={classes.media}></CardMedia>
          </CardActionArea>
        ) : (
          "loading"
        )}
      </Card>
    </Grid>
  );
};
export default SingleImage;

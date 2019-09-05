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
    boxShadow: " 0px 0px 10px rgba(0, 0, 0, 0.25)"
  },
  media: {
    minHeight: 300
  }
}));
const SingleImage = props => {
  const classes = useStyles();

  return (
    <Grid item xs={6}>
      <Card className={classes.card}>
        <CardActionArea>
          {/* {console.log(props.image)} */}
          <CardMedia
            image={props.image.small}
            className={classes.media}
          ></CardMedia>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
export default SingleImage;

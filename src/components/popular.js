import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import SingleImage from "./singleImage";
import Unsplash, { toJson } from "unsplash-js";

import LinearProgress from "@material-ui/core/LinearProgress";

import { InfiniteScroll } from "react-simple-infinite-scroll";

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: "10px",
    boxShadow: " 0px 0px 5px rgba(0, 0, 0, 0.25)"
  },
  media: {
    minHeight: 300
  },
  top: {
    width: "100%",
    marginTop: `2vh`,
    marginBottom: `2vh`,
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1)
  },
  fab: {
    margin: theme.spacing(1),
    textTransform: "none",
    fontFamily: "Poppins",
    boxShadow: "none"
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Recents = () => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [query, setQuery] = React.useState(0);

  const [array, setArray] = useState({ images: [] });
  const [pages, setPages] = useState(1);
  const [imagenum, setImagenum] = useState(100);

  console.log(pages);

  const unsplash = new Unsplash({
    applicationId:
      "106a139f9735777ee5e220038c1dfd52ca3f91db8491cf5094660dfc2592e4a7",
    secret: "9d5527e0b234642afa71a0bca96afaa14bf14bd000fabc693e31a29cfcb9d7ea"
  });
  async function imgget() {
    const file = unsplash.photos.listPhotos(pages, imagenum, "popular");
    file
      .then(toJson)
      .then(res => setArray({ images: array.images.concat(res) }))
      .then(console.log("Imgget runnig"))
      .then(res => setQuery(res));
  }

  useEffect(() => {
    imgget();
  }, [pages]);

  useEffect(() => {
    setLoading(gogo => !gogo);
  }, [array.images]);

  function handleClickLoading() {
    setPages(pages + 1);
    setLoading(prevLoading => !prevLoading);
    console.log("loading");
  }

  return (
    <div className={classes.main}>
      <InfiniteScroll
        throttle={100}
        threshold={300}
        isLoading={loading}
        hasMore={!query}
        onLoadMore={handleClickLoading}
      >
        <Grid container direction="row" spacing={2}>
          {array.images.length > 0
            ? array.images.map(file => (
                <SingleImage image={file.urls} key={file.id} />
              ))
            : null}
          {loading && (
            <LinearProgress className={classes.top} variant="query" />
          )}
        </Grid>
      </InfiniteScroll>
    </div>
  );
};
export default Recents;

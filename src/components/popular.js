import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import SingleImage from "./singleImage";
import Unsplash, { toJson } from "unsplash-js";
import SimpleModal from "./imagemodal";

import CircularProgress from "@material-ui/core/CircularProgress";

import { InfiniteScroll } from "react-simple-infinite-scroll";

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: "10px",
    boxShadow: " 0px 0px 5px rgba(0, 0, 0, 0.25)"
  },
  media: {
    minHeight: 300
  },
  progress: {
    display: "flex",
    margin: "4vh auto"
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

const Popular = props => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [query, setQuery] = React.useState(0);
  const [open, setOpen] = useState(false);
  const [array, setArray] = useState({ images: [] });
  const [modalImage, setModalImage] = useState(null);
  const [pages, setPages] = useState(1);
  const [imagenum] = useState(50);

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
  const handlemodal = (file, data) => {
    setModalImage(data);
    setOpen(!open);
  };

  return (
    <div className={classes.main}>
      {open ? (
        <SimpleModal type={true} close={() => setOpen(!open)} {...modalImage} />
      ) : null}
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
                <SingleImage
                  image={file.urls}
                  key={file.id}
                  id={file.id}
                  {...file}
                  modal={(file, data) => handlemodal(file, data)}
                />
              ))
            : null}
          {loading && (
            <div className={classes.progress}>
              <CircularProgress />
            </div>
          )}
        </Grid>
      </InfiniteScroll>
    </div>
  );
};
export default Popular;

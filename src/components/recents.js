import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import SingleImage from "./singleImage";
import Unsplash, { toJson } from "unsplash-js";
import { useInfiniteScroll } from "./inifinitescroll";
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
  const [array, setArray] = useState([]);
  const [pages, setPages] = useState(1);
  const [imagenum, setImagenum] = useState(10);
  // const [listItems, setListItems] = useState(
  //   Array.from(Array(30).keys(), n => n + 1)
  // ); array
  // console.log(listItems);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
  console.log(pages);

  const unsplash = new Unsplash({
    applicationId:
      "106a139f9735777ee5e220038c1dfd52ca3f91db8491cf5094660dfc2592e4a7",
    secret: "9d5527e0b234642afa71a0bca96afaa14bf14bd000fabc693e31a29cfcb9d7ea"
  });
  async function imgget() {
    const file = await unsplash.photos.listPhotos(pages, imagenum, "latest");
    let result = await file;
    const data = await result.json();
    // console.log(array);
    return setArray(data);
  }

  useEffect(() => {
    imgget();
  }, []);
  // async function imgget() {
  //   const file = await unsplash.photos.listPhotos(1,2, "latest");
  //   let result = await file;
  //   const array = await result.json();
  //   // console.log(array);
  //   setstate(array);
  // }
  // imgget();

  var fruits = [];
  var Empty = [];
  var Final = [];
  const photo = array.forEach(function(i, val) {
    const file = i;
    const ima = i.urls;
    const id = i.d;
    Empty.push(file);

    Final = Empty;
  });

  function fetchMoreListItems() {
    setTimeout(() => {
      setPages(pages + 1);
      imgget();
      setIsFetching(false);
    }, 0);
  }

  return (
    <div className={classes.main}>
      <Grid container direction="row" spacing={2}>
        {Final.map(file => (
          <SingleImage image={file.urls} key={file.id} />
        ))}
      </Grid>
    </div>
  );
};
export default Recents;

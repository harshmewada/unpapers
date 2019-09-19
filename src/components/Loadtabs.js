import React from "react";
import Recents from "./recents";
import Popular from "./popular";

const LoadTabs = props => {
  return <div>{props.data === 0 ? <Popular /> : <Recents />}</div>;
};
export default LoadTabs;

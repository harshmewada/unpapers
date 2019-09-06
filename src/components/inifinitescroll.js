import { useState, useEffect } from "react";

export const useInfiniteScroll = callback => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback(() => {
      console.log("called back");
    });
  }, [isFetching]);

  function handleScroll() {
    if (
      document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.scrollHeight ||
      isFetching
    )
      return setTimeout(setIsFetching(true), 2000);
  }

  return [isFetching, setIsFetching];
};
window.onscroll = function scrollar() {
  var scrollHeight, totalHeight;
  scrollHeight = document.body.scrollHeight;
  totalHeight = window.scrollY + window.innerHeight;

  if (totalHeight >= scrollHeight) {
    console.log("at the bottom");
  }
};

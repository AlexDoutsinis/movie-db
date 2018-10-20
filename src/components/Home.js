import React, { Fragment } from "react";
import Hero from "./Hero";
import Search from "./Search";
import Movies from "./Movies";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Search />
      <Movies />
    </Fragment>
  );
};

export default Home;

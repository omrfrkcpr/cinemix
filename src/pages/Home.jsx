import React from "react";

const Home = () => {
  return (
    <>
      <Banner />
      <MovieRow title="upcoming" url={endpoints.upcoming} />
      <MovieRow title="trending" url={endpoints.trending} />
      <MovieRow title="top rated" url={endpoints.topRated} />
      <MovieRow title="comedy" url={endpoints.comedy} />
      <MovieRow title="popular" url={endpoints.popular} />
    </>
  );
};

export default Home;

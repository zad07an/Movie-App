import React, { memo } from "react";
import Container from "../components/ui/Container";
import Loader from "../components/ui/Loader";
import movies from "../hoc/movies";
import Button from "../components/ui/Button";

const Movies: React.FC = movies(
  memo(({ memoizedMovies, moviesLength, loading, error, handleLoadMore }) => {
    if (loading) {
      return (
        <section className="loading">
          <Loader />
        </section>
      );
    }
    if (error) {
      return (
        <section className="error">
          <h2 className=" text-2xl text-gray font-semibold">Sorry, something went wrong.</h2>
        </section>
      );
    }
    return (
      <Container>
        <div className=" w-full grid grid-cols-primary-grid-cols gap-3">
          {loading ? (
            <section className="loading">
              <Loader />
            </section>
          ) : (
            memoizedMovies
          )}
        </div>
        {loading ? (
          <Loader />
        ) : moviesLength ? (
          <div className=" mt-10">
            <Button onClick={handleLoadMore}>Load More</Button>
          </div>
        ) : null}
      </Container>
    );
  })
);

export default Movies;

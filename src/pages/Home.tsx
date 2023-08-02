import React, { memo } from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import Container from "../components/ui/Container";
import home from "../hoc/home";
import Loader from "../components/ui/Loader";
import Button from "../components/ui/Button";

const Home: React.FC = home(
  memo(({ memoizedMovies, moviesLength, loading, error }) => {
    // if (loading) {
    //   return (
    //     <section className="loading">
    //       <Loader />
    //     </section>
    //   );
    // }
    if (error) {
      return (
        <section className="error">
          <h2 className=" text-2xl text-gray font-semibold">Sorry, something went wrong.</h2>
        </section>
      );
    }
    return (
      <Container>
        <div className=" w-full min-h-[60vh] flex items-center justify-center lg:grid lg:grid-cols-2 lg:gap-5 relative lg:rounded-none rounded-3xl overflow-hidden">
          <div className=" w-full min-h-[60vh] bg-black bg-opacity-70 lg:bg-transparent flex items-start justify-center flex-col gap-2 z-[999] p-10">
            <span className=" text-xl sm:text-2xl md:text-3xl text-primary-crimson font-semibold">
              Watch top movies with <br />{" "}
            </span>
            <h1 className=" text-4xl lg:text-7xl md:text-6xl sm:text-5xl font-black bg-gradient-to-bl from-primary-crimson font-[Montserrat] to-primary-blueviolet bg-clip-text text-transparent">
              The Movie Era
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, aliquam asperiores quia
              expedita veritatis quas minima esse fugit iste blanditiis!
            </p>
            <div className=" mt-5">
              <Link to="/movies">
                <Button>Watch Now</Button>
              </Link>
            </div>
          </div>
          <div className=" absolute top-0 left-0 lg:static w-full h-full rounded-3xl overflow-hidden">
            <Carousel />
          </div>
        </div>
        <div className=" w-full flex items-center flex-col gap-5 mt-10">
          <div className=" w-full flex items-center justify-end gap-3">
            <Button bgColor="primary-blueviolet" hover="secondary-blueviolet">
              New Movies
            </Button>
            <Button bgColor="primary-blueviolet" hover="secondary-blueviolet">
              Top Movies
            </Button>
            <Button bgColor="primary-blueviolet" hover="secondary-blueviolet">
              Multfilms
            </Button>
          </div>
          <div className=" w-full grid grid-cols-primary-grid-cols gap-3">
            {loading ? (
              <section className="loading">
                <Loader />
              </section>
            ) : (
              memoizedMovies
            )}
          </div>
          {moviesLength ? (
            <div className=" w-full flex items-center justify-center mt-5">
              <Link to="/movies">
                <Button>Watch More</Button>
              </Link>
            </div>
          ) : null}
        </div>
      </Container>
    );
  })
);

export default Home;

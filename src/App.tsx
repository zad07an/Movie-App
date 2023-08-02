import React, { Suspense } from "react";
import Routes from "./routes/Routes";
import Loader from "./components/ui/Loader";

const App: React.FC = () => {
  return (
    <div>
      <Suspense
        fallback={
          <section className="loading">
            <Loader />
          </section>
        }
      >
        <Routes />
      </Suspense>
    </div>
  );
};

export default App;

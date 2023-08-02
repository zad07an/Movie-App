import { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import Layout from "../layout/Layout";

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const SingleMovie = lazy(() => import("../pages/SingleMovie"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const Login = lazy(() => import("../pages/dashboard/(auth)/Login"));
const Register = lazy(() => import("../pages/dashboard/(auth)/Register"));

const Routes = () => {
  const browserRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:movieID" element={<SingleMovie />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/login" element={<Login />} />
        <Route path="/dashboard/register" element={<Register />} />
      </Route>
    )
  );
  return <RouterProvider router={browserRouter} />;
};

export default Routes;

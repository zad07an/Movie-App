import React from "react";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import useTopOnNavigate from "../hooks/useTopOnNavigate";

const Layout: React.FC = () => {
  useTopOnNavigate();

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

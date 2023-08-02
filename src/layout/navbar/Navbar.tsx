import { NavLink, useLocation } from "react-router-dom";
import React, { useCallback, useState } from "react";
import MenuResponsive from "./MenuResponsive";
import { CgMenuRight } from "react-icons/cg";
import useHideScroll from "../../hooks/useHideScroll";
import Overlay from "../../components/ui/Overlay";
import Search from "../../components/ui/Search";
import { useAppDispatch } from "../../redux/store/store";
import { BiSearch } from "react-icons/bi";
import { onOpen } from "../../redux/features/search-slice";
import Button from "../../components/ui/Button";

const Navbar = () => {
  const { pathname }: { pathname: string } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleOpenSearch = (): void => {
    dispatch(onOpen());
  };

  const handleOpenMenu = useCallback(() => setIsMenuOpen(true), []);
  const handleCloseMenu = useCallback(() => setIsMenuOpen(false), []);

  useHideScroll(isMenuOpen);

  return (
    <>
      {isMenuOpen ? (
        <div className=" w-fit h-fit lg:hidden">
          <Overlay onClick={handleCloseMenu} />
        </div>
      ) : null}
      <nav className=" fixed left-0 w-full h-16 flex items-center justify-between px-10 bg-primary-dark z-[9999]">
        <div>
          <NavLink to="/" className=" text-white text-2xl font-semibold">
            TME
          </NavLink>
        </div>
        <ul className=" hidden lg:flex items-center justify-end gap-6">
          <li
            onClick={handleOpenSearch}
            className={` ${
              pathname === "/dashboard/login" || pathname === "/dashboard/register"
                ? "hidden"
                : "block"
            } flex items-center text-2xl text-primary-gray cursor-pointer`}
          >
            <BiSearch />
          </li>
          <li>
            <NavLink
              to="/movies"
              className={` link ${
                pathname === "/movies" && ` text-primary-blueviolet active-link`
              } hover:text-primary-blueviolet`}
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={` link ${
                pathname === "/dashboard" && ` text-primary-blueviolet active-link`
              } hover:text-primary-blueviolet`}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/register">
              <Button bgColor="primary-blueviolet" hover="secondary-blueviolet">
                Sing Up
              </Button>
            </NavLink>
          </li>
        </ul>
        <MenuResponsive isOpen={isMenuOpen} onClose={handleCloseMenu} />
        <div className=" lg:hidden flex items-center gap-4">
          <button
            className={` ${
              pathname === "/dashboard/login" || pathname === "/dashboard/register"
                ? "hidden"
                : "block"
            } flex items-center text-2xl text-primary-gray cursor-pointer`}
            onClick={handleOpenSearch}
          >
            <BiSearch />
          </button>
          <button className=" text-white text-3xl" onClick={handleOpenMenu}>
            <CgMenuRight />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

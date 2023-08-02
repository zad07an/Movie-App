import links from "../../data/links";
import { NavLink, useLocation } from "react-router-dom";
import React from "react";
import { IoClose } from "react-icons/io5";

interface MenuResponsiveProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuResponsive: React.FC<MenuResponsiveProps> = ({ isOpen, onClose }) => {
  const { pathname }: { pathname: string } = useLocation();

  return (
    <ul
      className={` absolute top-0 ${
        isOpen ? "right-0" : "right-[-100%]"
      } w-1/2 bg-inherit h-screen flex items-start flex-col px-4 shadow-[0_0_10px_black] transition-all duration-500`}
    >
      <li className=" w-full h-[60px] flex items-center justify-between border-b border-primary-gray">
        <NavLink to="/" className=" text-primary-gray text-xl">
          TME
        </NavLink>
        <button
          className=" text-primary-gray text-xl hover:text-primary-blueviolet transition-all"
          onClick={onClose}
        >
          <IoClose />
        </button>
      </li>
      {links?.map((link, index: number) => {
        return (
          <li
            key={index}
            className=" w-full h-[50px] flex items-center justify-between border-b border-primary-gray"
          >
            <NavLink
              to={link.path}
              className={` w-full h-full flex items-center transition-all duration-200 hover:text-primary-blueviolet ${
                pathname === link.path && "text-primary-blueviolet"
              }`}
            >
              {link.pathname}
            </NavLink>
          </li>
        );
      })}
      <li className=" w-full h-[50px] flex items-center justify-between">
        <NavLink
          to="/dashboard/register"
          className={` w-full h-full flex items-center transition-all duration-200 hover:text-primary-blueviolet ${
            pathname === "/dashboard/register" && "text-primary-blueviolet"
          }`}
        >
          Sign Up
        </NavLink>
      </li>
    </ul>
  );
};

export default MenuResponsive;

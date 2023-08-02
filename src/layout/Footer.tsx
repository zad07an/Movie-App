import React from "react";
import { useLocation } from "react-router-dom";

const Footer: React.FC = () => {
  const { pathname }: { pathname: string } = useLocation();

  if (pathname === "/dashboard/login" || pathname === "/dashboard/register") {
    return;
  }
  return (
    <footer className=" w-full flex justify-center items-center flex-col border-t-2 border-primary-gray bg-primary-dark">
      <form className=" flex justify-center items-center gap-4 py-10">
        <input
          type="text"
          placeholder="Send your message"
          className=" w-[300px] h-10 rounded-md bg-transparent border-2 border-primary-blueviolet text-primary-blueviolet transition-all duration-200 placeholder:text-primary-blueviolet"
        />
        <button className=" h-10 px-8 border-2 border-primary-blueviolet rounded-md transition-all duration-200 hover:bg-primary-blueviolet text-primary-blueviolet hover:text-white">
          Send
        </button>
      </form>
      <div className=" w-full flex justify-center items-center border-t-2 border-primary-gray py-3 text-white">
        &copy;Copyright 2023.
      </div>
    </footer>
  );
};

export default Footer;

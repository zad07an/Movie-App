import React, { useEffect, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { useLocation } from "react-router-dom";

const Search: React.FC = () => {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const { pathname }: { pathname: string } = useLocation();

  useEffect(() => searchRef.current?.focus(), []);

  if (pathname === "/dashboard/login" || pathname === "/dashboard/register") {
    return;
  }
  return (
    <div className=" w-full flex items-center">
      <div className=" w-full border border-primary-gray h-10 rounded-full grid grid-cols-[40px_1fr]">
        <div className=" flex items-center justify-center text-primary-gray text-xl">
          <BiSearch />
        </div>
        <input
          ref={searchRef}
          className=" h-full w-full"
          type="text"
          placeholder="Search your movie..."
        />
      </div>
    </div>
  );
};

export default Search;

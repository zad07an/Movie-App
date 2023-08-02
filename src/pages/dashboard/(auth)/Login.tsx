import React, { useId } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";

const Login: React.FC = () => {
  const id = useId();

  return (
    <section className={` custom-container flex items-center justify-center`}>
      <form
        action=""
        className=" flex items-center flex-col gap-4 border-2 border-primary-gray py-5 px-16 rounded-xl"
      >
        <div className=" w-full text-center">
          <h2 className=" text-2xl font-semibold capitalize text-slate-200">Login now</h2>
        </div>
        <div className=" flex items-start flex-col gap-1">
          <label htmlFor={`${id}email`} className=" text-sm">
            Email
          </label>
          <input
            type="email"
            className=" w-[300px] h-10 rounded-md border-2 border-primary-blueviolet text-primary-blueviolet transition-all duration-200 focus:drop-shadow-sm focus:shadow-primary-blueviolet"
            placeholder="Enter email"
            id={`${id}email`}
          />
        </div>
        <div className=" flex items-start flex-col gap-1">
          <label htmlFor={`${id}password`} className=" text-sm">
            Password
          </label>
          <input
            type="password"
            className=" w-[300px] h-10 rounded-md border-2 border-primary-blueviolet text-primary-blueviolet transition-all duration-200 focus:drop-shadow-sm focus:shadow-primary-blueviolet"
            placeholder="Enter password"
            id={`${id}password`}
          />
        </div>
        <div className=" w-full flex items-center justify-center mt-2">
          <Button bgColor="primary-blueviolet" hover="secondary-blueviolet">
            Login
          </Button>
        </div>
        <div className="w-full flex items-center justify-center gap-2 text-sm">
          <p>Don't have an account?</p>
          <Link
            to="/dashboard/register"
            className=" text-primary-blueviolet hover:underline transition-all"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Login;

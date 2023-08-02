import React, { useId } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";

const Register: React.FC = () => {
  const id = useId();

  return (
    <section className={`custom-container flex items-center justify-center`}>
      <form
        action=""
        className=" flex items-center flex-col gap-4 border-2 border-primary-gray py-5 px-16 rounded-xl"
      >
        <div className=" w-full text-center">
          <h2 className=" text-2xl font-semibold capitalize text-slate-200">Register now</h2>
        </div>
        <div className=" flex items-start flex-col gap-1">
          <label htmlFor={`${id}username`} className=" text-sm">
            Username
          </label>
          <input
            type="text"
            className=" w-[300px] h-10 rounded-md border-2 border-primary-blueviolet text-primary-blueviolet transition-all duration-200 focus:drop-shadow-sm focus:shadow-primary-blueviolet"
            placeholder="Enter Username"
            id={`${id}username`}
          />
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
        <div className=" flex items-start flex-col gap-1">
          <label htmlFor={`${id}confirm_pwd`} className=" text-sm">
            Confirm password
          </label>
          <input
            type="password"
            className=" w-[300px] h-10 rounded-md border-2 border-primary-blueviolet text-primary-blueviolet transition-all duration-200 focus:drop-shadow-sm focus:shadow-primary-blueviolet"
            placeholder="Confirm password"
            id={`${id}confirm_pwd`}
          />
        </div>
        <div className=" w-full flex items-center justify-center mt-2">
          <Button bgColor="primary-blueviolet" hover="secondary-blueviolet">
            Register
          </Button>
        </div>
        <div className="w-full flex items-center justify-center gap-2 text-sm">
          <p>Already have an account?</p>
          <Link
            to="/dashboard/login"
            className=" text-primary-blueviolet hover:underline transition-all"
          >
            Log In
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Register;

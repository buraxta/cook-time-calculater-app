import React from "react";
import { Typography } from "@material-tailwind/react";

const Header = () => {
  return (
    <div className="relative h-[300px] w-full mt-2">
      <img
        src="https://images.unsplash.com/photo-1564844536308-50b114a1d946?auto=format&fit=crop&q=80&w=1894&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image 1"
        className="h-full w-full object-cover rounded-3xl"
      />
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60 rounded-3xl">
        <div className="w-3/4 text-center md:w-2/4">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
          >
            Wanna be a fast cook?
          </Typography>
          <Typography variant="lead" color="white" className="mb-12 opacity-80">
            Lets make you a fast cook. You can cook anything you want in a short
            time.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Header;

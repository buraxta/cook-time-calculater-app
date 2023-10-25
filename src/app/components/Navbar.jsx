"use client";
import React from "react";
import { Navbar } from "@material-tailwind/react";
import Link from "next/link";

const NavbarComp = () => {
  return (
    <Navbar color="teal" variant="gradient" className="mt-3">
      <ul className="flex justify-between">
        <li>
          <Link href="/">Calculater App</Link>
        </li>
        <li>
          <Link href="/addstep"> Calculator</Link>
        </li>
      </ul>
    </Navbar>
  );
};

export default NavbarComp;

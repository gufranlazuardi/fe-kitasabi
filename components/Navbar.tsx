"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";


const Navbar = () => {
  const [active, setActive] = useState("/")

  const handleClickNavbar = (item: string) => {
    setActive(item)
  }

  return (
    <div className="flex justify-between items-center max-w-screen-xl mx-auto px-[2rem] py-[2rem]">
      {/* Wrapper div with image and separator */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/kitabisa.png"
            alt="kitabisa"
            width={100}
            height={100}
            className="w-[100px]"
            priority
          />
        </Link>
        <div className="border-r border-r-[#d1d1d1] h-12 mx-4"></div> {/* Vertical separator */}
      </div>

      <div className="w-fit flex rounded-xl bg-[#F2F2F2] py-3 px-[2rem]">
        <ul className="flex gap-6 text-sm">
          <Link href="/">
          <li className={`cursor-pointer ${active === "/" ? "font-bold text-sky-500" : ""}`} onClick={() => handleClickNavbar("/")}>
            Home
          </li>
          </Link>
          <Link href="/campaign">
          <li className={`cursor-pointer ${active === "/campaign" ? "font-bold text-sky-500" : ""}`} onClick={() => handleClickNavbar("/campaign")}>
            Campaigns
          </li>
          </Link>
          <li className={`cursor-pointer ${active === "/transactions" ? "font-bold text-sky-500" : ""}`} onClick={() => handleClickNavbar("/transaction")}>
            Transactions
          </li>
          <li className={`cursor-pointer ${active === "/about" ? "font-bold text-sky-500" : ""}`} onClick={() => handleClickNavbar("/about")}>
            About
          </li>
        </ul>
      </div>
      
      
      <div className="flex gap-2 items-center">
        <Link href="/auth/login">
          <Button className="bg-sky-500 hover:bg-[#1b609c]">
            Login
          </Button>
        </Link>
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Profile</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Wishlist</DropdownMenuItem>
            <DropdownMenuItem>Transactions</DropdownMenuItem>
            <DropdownMenuItem>Dark mode</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
    </div>
  );
};

export default Navbar;

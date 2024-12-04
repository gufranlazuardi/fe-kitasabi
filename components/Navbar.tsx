"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center max-w-screen-xl mx-auto px-[2rem] py-[2rem]">
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

      <div className="flex gap-2 items-center">
        <Link href="/auth/login">
          <Button className="bg-sky-400 hover:bg-[#1b609c]">
            Login
          </Button>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Profile</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Wishlist</DropdownMenuItem>
            <DropdownMenuItem>Transactions</DropdownMenuItem>
            <DropdownMenuItem>Dark mode</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;

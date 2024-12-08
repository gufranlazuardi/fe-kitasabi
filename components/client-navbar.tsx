"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useAuthStore } from "@/utils/store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Separator } from "./ui/separator";

export function ClientNavbar() {
  const [active, setActive] = useState("/");
  const { token, clearAuth } = useAuthStore();
  const router = useRouter();

  const handleClickNavbar = (item: string) => {
    setActive(item);
  };

  const handleLogout = () => {
    clearAuth();
    router.push("/");
  };

  return (
    <>
      <div className="w-fit flex rounded-xl bg-[#F2F2F2] py-3 px-[2rem]">
        <ul className="flex gap-6 text-sm">
          <Link href="/">
            <li
              className={`cursor-pointer ${
                active === "/" ? "font-bold text-sky-500" : ""
              }`}
              onClick={() => handleClickNavbar("/")}
            >
              Home
            </li>
          </Link>
          <Link href="/campaign">
            <li
              className={`cursor-pointer ${
                active === "/campaign" ? "font-bold text-sky-500" : ""
              }`}
              onClick={() => handleClickNavbar("/campaign")}
            >
              Campaigns
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`cursor-pointer ${
                active === "/about" ? "font-bold text-sky-500" : ""
              }`}
              onClick={() => handleClickNavbar("/about")}
            >
              About
            </li>
          </Link>
        </ul>
      </div>

      <div className="flex gap-2 items-center">
        {token ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>Profile</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Wishlist</DropdownMenuItem>
              <DropdownMenuItem>Transactions</DropdownMenuItem>
              <Separator />
              <DropdownMenuItem className="text-red-500 hover:text-red">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <p
                      onClick={(e) => {
                        // e.preventDefault();
                        e.stopPropagation();
                      }}
                    >
                      Logout
                    </p>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will
                        permanently delete your account and remove
                        your data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={handleLogout}
                        className="bg-red-500"
                      >
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href="/auth/login">
            <Button className="bg-sky-500 hover:bg-[#1b609c]">
              Login
            </Button>
          </Link>
        )}
      </div>
    </>
  );
}

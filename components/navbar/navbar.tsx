"use client";

import { Coffee, Github, Menu } from "lucide-react";
import Link from "next/link";
import NotificationBanner from "./notifcation-banner";
import { links } from "@/lib/data";
import { MobileSidebar } from "../sidebar/mobile-sidebar";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
  return (
    <nav className="border-b dark:border-gray-800 dark:dark:bg-[#2B2D31] bg-white">
      <div className="px-2 md:px-4">
        <div className="flex justify-between items-center h-[55px] md:space-x-2 ">
          <div className="flex-1 lg:hidden">
            <MobileSidebar />
          </div>
          <div className="hidden md:block md:flex-1"></div>
          <div className="flex-grow md:flex-grow-0">
            <NotificationBanner />
          </div>
          <div className="hidden md:flex flex-1 justify-end items-center space-x-2">
            <Link
              href={links.EMAIL}
              className="flex items-center bg-gray-200  dark:bg-zinc-900 hover:bg-zinc-800  hover:text-white lg:px-4 lg:py-2 rounded-lg text-[12px] dark:hover:bg-zinc-200 dark:hover:text-zinc-800 text-black dark:text-gray-300 lg:text-[13px] md:text-[8px] md:py-1 md:px-1"
            >
              <Coffee className="h-4 w-4 mr-2" />
              Buy me a coffee
            </Link>
            <ModeToggle />
            <Link href={links.GITHUB}>
              <Github className="h-8 w-8  bg-gray-200 dark:bg-zinc-900  hover:bg-zinc-800 text-black dark:text-gray-300  hover:text-white dark:hover:bg-zinc-200 dark:hover:text-zinc-800  rounded-lg p-2" />
            </Link>
          </div>
        </div>
        <div className="md:hidden flex justify-center items-center space-x-2 mb-2">
          <Link
            href={links.EMAIL}
            className="flex items-center bg-gray-200 dark:bg-zinc-900  hover:bg-zinc-800 text-black   hover:text-white py-2 px-5 rounded-lg text-[12px]   dark:text-gray-300 lg:text-[13px] md:text-[8px] md:py-1 md:px-1"
          >
            <Coffee className="h-4 w-4 mr-2" />
            Buy me a coffee
          </Link>
          <ModeToggle />
          <Link href={links.GITHUB}>
            <Github className="h-8 w-8  bg-gray-200 dark:bg-zinc-900  hover:bg-zinc-800 text-black dark:text-gray-300  hover:text-white dark:hover:bg-zinc-800  rounded-lg p-2" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

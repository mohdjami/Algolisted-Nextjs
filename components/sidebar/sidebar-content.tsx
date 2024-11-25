import React from "react";
import Link from "next/link";
import { LinkPreview } from "../ui/link-preview";
import { ArrowUpRight } from "lucide-react";
import { links, menuItems } from "@/lib/data";

export const SidebarContent = ({ className }: { className?: string }) => (
  <nav className="flex flex-col h-full">
    <div className="flex-shrink-0 pt-[9px]">
      <Link
        href={links.ALGOLISTED}
        className={`flex bg-[#211F1F] py-[8px] justify-center rounded-full text-base text-gray-300 hover:bg-gray-800 hover:text-white transition-colors`}
      >
        Algolisted
      </Link>
    </div>
    <ul className="space-y-[10px] py-[44px]">
      {menuItems.map((item, index) => (
        <li key={index}>
          <Link
            href="#"
            className={`block px-4 py-3 rounded-full font-thin ${className} text-[12px] text-center text-black dark:text-gray-300 dark:hover:bg-[#404249] hover:bg-gray-300 hover:text-black  dark:hover:text-white transition-colors ${
              index === 0
                ? "bg-gray-300 dark:bg-[#404249] text-black dark:text-white"
                : ""
            }`}
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
    <div className="flex flex-col space-y-5">
      <div className="flex justify-center items-center">
        <div className="bg-[#949BA4] h-[1px] w-[30px]"></div>
        <LinkPreview url={links.ALGOLISTED} className="text-sm font-normal">
          &nbsp;algolisted.com&nbsp;
        </LinkPreview>
        <div className="bg-[#949BA4] h-[1px] w-[30px]"></div>
      </div>
      <div>
        <Link
          href="#"
          className="flex px-4 py-3 rounded-full ${className} text-[12px] text-center text-black dark:text-gray-300 dark:hover:bg-[#404249] hover:bg-gray-300 hover:text-black dark:hover:text-white transition-colors"
        >
          Download Jobs Notifier&nbsp;
          <ArrowUpRight size={18} />
        </Link>
      </div>
      <div>
        <Link
          href="#"
          className="block px-4 py-3 rounded-full ${className} text-[12px] text-center text-black dark:text-gray-300 dark:hover:bg-[#404249] hover:bg-gray-300 hover:text-black dark:hover:text-white transition-colors"
        >
          Report an Issue
        </Link>
      </div>
    </div>
  </nav>
);

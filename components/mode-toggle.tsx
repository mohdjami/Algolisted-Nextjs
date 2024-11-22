"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconMoon, IconSun } from "@tabler/icons-react";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [icon, setIcon] = React.useState("dark");
  return (
    <>
      {icon === "dark" ? (
        <button
          onClick={() => {
            setTheme("light");
            setIcon("light");
          }}
        >
          <IconMoon className="h-8 w-8 dark:text-gray-400 text-black  bg-gray-200 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-800 dark:bg-zinc-900 rounded-lg p-2" />
        </button>
      ) : (
        <button
          onClick={() => {
            setTheme("dark");
            setIcon("dark");
          }}
        >
          <IconSun className="h-8 w-8 dark:text-gray-400 text-black  bg-gray-200 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-800 dark:bg-zinc-900 rounded-lg p-2" />
        </button>
      )}
    </>
  );
}

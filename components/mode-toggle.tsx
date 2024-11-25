"use client";

import * as React from "react";
import { useTheme } from "next-themes";
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
          <IconMoon className="h-9 w-9  text-black  bg-gray-200 hover:bg-zinc-900 hover:text-white dark:text-gray-300 dark:bg-zinc-900  dark:hover:bg-zinc-800 rounded-lg p-2" />
        </button>
      ) : (
        <button
          onClick={() => {
            setTheme("dark");
            setIcon("dark");
          }}
        >
          <IconSun className="h-9 w-9 dark:text-gray-400 text-black  bg-gray-200 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-200 dark:hover:text-zinc-800 dark:bg-zinc-900 rounded-lg p-2" />
        </button>
      )}
    </>
  );
}

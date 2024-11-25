"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { IconMoon, IconSun } from "@tabler/icons-react";

export function ModeToggle({ className }: { className?: string }) {
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
          <IconMoon
            className={`${className} h-10 w-10 dark:text-gray-300 text-black  bg-gray-200 hover:bg-zinc-900 hover:text-white  dark:hover:bg-zinc-200 dark:hover:text-zinc-800 dark:bg-zinc-900 rounded-lg p-2`}
          />
        </button>
      ) : (
        <button
          onClick={() => {
            setTheme("dark");
            setIcon("dark");
          }}
        >
          className=
          {`${className} h-10 w-10 dark:text-gray-300 text-black  bg-gray-200 hover:bg-zinc-900 hover:text-white  dark:hover:bg-zinc-200 dark:hover:text-zinc-800 dark:bg-zinc-900 rounded-lg p-2`}
        </button>
      )}
    </>
  );
}

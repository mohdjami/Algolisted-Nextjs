import React from "react";
import { SidebarContent } from "./sidebar-content";

export default function Sidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-[200px] dark:bg-[#282a2f] border-r dark:border-gray-800 min-h-screen px-4">
        <SidebarContent />
      </aside>
    </>
  );
}

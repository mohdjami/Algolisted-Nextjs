import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SidebarContent } from "./sidebar-content";

export const MobileSidebar = () => {
  return (
    <div className="lg:hidden z-50">
      <Sheet>
        <SheetTrigger asChild>
          <button className="p-2 rounded-lg bg-white dark:bg-[#282a2f] text-black dark:text-gray-300 hover:text-white">
            <Menu size={15} />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[250px] p-0 px-4">
          <SidebarContent className={`text-[10px]`} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

import { Lock, Star } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import BountyCard from "./bounty-card";
import { Key } from "react";
import { TabItem } from "@/types";
import { tabData } from "@/lib/data";

export default function TabSection() {
  return (
    <Tabs defaultValue="bounties" className="w-full">
      <TabsList className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-5 lg:w-[840px] mb-8 md:mb-4 bg-transparent  gap-1">
        <TabsTrigger
          value="swags"
          className="flex items-center text-[11px] md:text-[13px] justify-center px-2 md:px-2 py-2 md:py-2 text-black dark:text-gray-300 rounded-full border border-gray-400"
        >
          Beginner Swags
        </TabsTrigger>
        <TabsTrigger
          value="hiring"
          className="flex items-center text-[11px] md:text-[13px] justify-center px-2 md:px-2 py-2 md:py-2 text-black dark:text-gray-300 rounded-full border border-gray-400"
        >
          Hiring
        </TabsTrigger>
        <TabsTrigger
          value="bounties"
          className="flex items-center text-[11px] md:text-[13px] justify-center px-2 md:px-2 py-2 md:py-2 text-black dark:text-gray-300 rounded-full border border-gray-400"
        >
          Bounties
        </TabsTrigger>
        <TabsTrigger
          value="communities"
          className="flex items-center text-[11px] md:text-[13px] justify-center px-2 md:px-2 py-2 md:py-2 text-black dark:text-gray-300 rounded-full border border-gray-400"
        >
          Communities <Lock className="ml-1 text-green-500" size={16} />
        </TabsTrigger>
        <TabsTrigger
          value="mentorship"
          className="flex items-center md:w-[200px] text-[11px] md:text-[13px] justify-center px-2 md:px-2 py-2 md:py-2 text-black dark:text-gray-300 rounded-full border border-gray-400"
        >
          Personal Mentorship <Star className="ml-1 text-green-500" size={16} />
        </TabsTrigger>
      </TabsList>

      {Object.entries(tabData).map(([key, items]) => (
        <TabsContent key={key} value={key} className="lg:mt-10 mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mr-10 lg:mt-10">
            {items.length > 0 ? (
              items.map((item: TabItem, index: Key) => (
                <BountyCard key={index} {...item} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No items available
              </p>
            )}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}

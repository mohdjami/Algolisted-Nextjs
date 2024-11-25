import { BountyCardProps } from "@/types";
import { Button } from "../ui/button";

export default function BountyCard({
  title,
  description,
  amount,
  tags,
  logo,
}: BountyCardProps) {
  return (
    <div className="flex flex-col justify-between bg-white dark:bg-[#25262b] rounded-lg p-6 border dark:border-gray-800">
      <div className="flex items-start gap-4 mb-4">
        <div className="space-y-3 flex-grow">
          <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
            {logo}
          </div>
          <h3 className="text-base md:text-lg font-semibold text-black dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-black dark:text-gray-400 text-sm mb-4">
            {description}
          </p>
          <div className="flex flex-wrap items-start gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-1.5 py-1.5 bg-green-200 font-extralight dark:bg-gray-800 text-black dark:text-gray-300 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-blue-400 font-semibold">${amount} USD</span>
          <Button variant="outline" className="text-black dark:text-blue-200">
            Claim this bounty
          </Button>
        </div>
      </div>
    </div>
  );
}

import { links } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
export default function NotificationBanner() {
  return (
    <Link href={links.EMAIL}>
      <div className="relative py-1.5 mt-1 sm:py-0.5 lg:py-1 px-4 sm:px-6 md:px-10 rounded-lg max-w-2xl space-x-5 sm:space-x-6 md:space-x-3 bg-blue-100 dark:bg-[#404249]">
        <span className="absolute top-1 md:top-1.5 sm:top-1 -left-8 sm:-left-6 md:-left-8 -translate-y-1/2 bg-red-400 dark:bg-zinc-900 text-white text-[8px] md:text-[10px] px-2 sm:px-2 py-0.5  sm:py-1 rounded-full whitespace-nowrap">
          Internship
        </span>
        <p className="text-blue-400 dark:text-[#9DB2D9] text-[10px] sm:text-[12px] sm:py-1 py-0.5  md:py-1.5 lg:py-2">
          We&apos;re restructuring our website.&nbsp;
          <strong className="text-violet-400">
            Next.js frontend developers
          </strong>
          , send your profile!&nbsp;
        </p>
        <ArrowUpRight className="absolute top-1/2 right-5 lg:right-2 sm:right-5 transform -translate-y-1/2 text-blue-400 dark:text-[#9DB2D9] hover:text-white w-4 h-4 sm:w-[18px] sm:h-[18px]" />
      </div>
    </Link>
  );
}

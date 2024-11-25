import TabSection from "@/components/tabs-ui/tab-section";
import { links } from "@/lib/data";

export default function OpenSource() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-[24px] md:text-[26.4px] font-extrabold text-black dark:text-[#E5E6E8] mb-3">
          Open Source
        </h1>
        <p className="text-gray-600 dark:text-[#FFFFFFA6] mb-6 text-[14px] font-medium md:text-[16.8px] pr-4 md:pr-32">
          Looking for the ultimate open-source experience? Algolisted is your
          go-to platform, offering a comprehensive collection of resources,
          updates, and community-driven projects. Whether you&apos;re after the
          latest open-source tools, opportunities to join thriving communities,
          or insights on exclusive bounties and swags, you&apos;ll find
          everything in one place. With regular updates and collaboration
          features, Algolisted ensures you stay ahead while contributing to
          impactful projects. Dive in today and unlock the world of open-source!
        </p>
        <div className="flex items-start mt-4 md:mt-6">
          <p className="inline-block text-green-600 dark:text-gray-400 bg-green-200 dark:bg-gray-600 p-2 text-xs md:text-sm font-thin rounded-md">
            We&apos;re always open to voluntary contributions and
            collaborations—reach out at{" "}
            <a href={links.EMAIL} className="text-blue-400 hover:underline">
              nayak@algolisted.com
            </a>
          </p>
        </div>
      </div>
      <TabSection />
    </div>
  );
}

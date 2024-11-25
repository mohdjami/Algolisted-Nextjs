import type { Metadata } from "next";
import Sidebar from "@/components/sidebar/sidebar";
import Navbar from "@/components/navbar/navbar";
import { links } from "@/lib/data";

export const metadata: Metadata = {
  title: links.TITLE,
  description: links.DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-white dark:bg-[#313338]">
      <div className="fixed top-0 left-0 h-full">
        <Sidebar />
      </div>

      <div className="flex flex-col w-full lg:ml-[200px]">
        <Navbar />
        <main className="flex-1 lg:py-5 lg:pl-[120px] p-10">{children}</main>
      </div>
    </div>
  );
}

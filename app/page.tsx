import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="flex justify-center items-center m-32 ">
      <Link
        href="/open-source"
        className={buttonVariants({ variant: "default" })}
      >
        Go to Open Source
      </Link>
    </main>
  );
};

export default page;

"use client";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function TeachersCard() {
  const pathname = usePathname();
  const check = pathname === "/";
  return (
    <div className="relative h-[186px] flex items-end ">
      <Image
        src="/person.webp"
        alt="teacher"
        width={80}
        height={80}
        className="rounded-full absolute top-[8px] left-7 border border-[#D2F473]"
      />
      <div className="flex items-center gap-3 justify-between shadow-[0px_0px_15px_0px_#00000033] bg-[#484848] rounded-3xl px-7 pt-8 pb-6 w-full">
        <div className="flex flex-col ">
          <span className="font-medium max-xs:text-lg text-2xl whitespace-nowrap">
            Teacher's Name
          </span>
          <span className=" text-sm ">Courses: 5</span>
          <span className=" text-sm ">Books: 3</span>
        </div>
        <Link
          href={"/"}
          className={cn(
            " max-sm:flex hidden  min-w-[30px] min-h-[30px] bg-[#D2F473] rounded-full md:flex items-center justify-center text-[#484848]",
            { "max-lg:hidden": !check }
          )}
        >
          <ChevronRight className="w-7 h-7" />
        </Link>
      </div>
    </div>
  );
}

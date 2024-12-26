import LibraryCard from "@/app/components/LibraryCard";
import { CardsSlider } from "@/app/components/Slider";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LibrarySection() {
  return (
    <section>
      <div className="flex flex-col gap-2 w-full mt-10 text-white ">
        <div className="flex w-full justify-between items-center">
          <h2 className="text-2xl font-medium  mb-3 w-full">My Library:</h2>
          <div className="text-sm  whitespace-nowrap">View All</div>
        </div>
        <CardsSlider>
          <LibraryCard />
        </CardsSlider>
      </div>
    </section>
  );
}

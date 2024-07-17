"use client"
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { use } from "react";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center 
    flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <HeroSection/>
      </div>
    </main>
  );
}

"use client"
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { use } from "react";

export default function Home() {
  return (
    <main className="relative flex justify-center 
    items-center flex-col">
      <div className="max-w-7xl w-full">
        <Navbar/>
        <HeroSection/>
      </div>
    </main>
  );
}

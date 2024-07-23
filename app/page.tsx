"use client"
import React, { useRef } from 'react';
import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Resume from '@/components/Resume';

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const resumeRef = useRef<HTMLDivElement>(null);

  const scrollToResume = () => {
    resumeRef.current?.scrollIntoView({ behavior: 'smooth'});
  }

  return (
    <main className="relative flex justify-center items-center flex-col">
      <div className="max-w-7xl w-full">
        <Navbar />
        <HeroSection scrollToAbout={scrollToAbout} />
        <About ref={aboutRef} />
        <Resume ref={resumeRef} />
      </div>
    </main>
  );
}

"use client"
import React, { useRef } from 'react';
import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ScrollToTop from 'react-scroll-to-top'

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth'})
  }

  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const resumeRef = useRef<HTMLDivElement>(null);

  const scrollToResume = () => {
    resumeRef.current?.scrollIntoView({ behavior: 'smooth'});
  }
  
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProfile = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth'});
  }

  const contactRef = useRef<HTMLDivElement>(null);
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth'});
  }

  return (
    <main className="w-full h-full">
      <div className="w-full">
        <Navbar />
        <HeroSection ref={homeRef} scrollToAbout={scrollToAbout}/>
        <About ref={aboutRef} />
        <Resume ref={resumeRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
        <ScrollToTop smooth viewBox='0 0 150 300'/>
      </div>
    </main>
  );
}

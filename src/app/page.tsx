"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/app/Footer";
import Home from "@/app/Home";
import { useRef } from "react";
import Skils from "@/app/Skils";
import Education from "@/app/Education";
import Experience from "@/app/Experience";
import Project from "./Project";
import Contact from "./Contact";

export default function Page() {
  const homeRef = useRef<HTMLDivElement>(null!);
  const skilsRef = useRef<HTMLDivElement>(null!);
  const educationRef = useRef<HTMLDivElement>(null!);
  const expRef = useRef<HTMLDivElement>(null!);
  const projectRef = useRef<HTMLDivElement>(null!);
  const contactRef = useRef<HTMLDivElement>(null!);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Navbar
        onHome={() => {
          scrollTo(homeRef);
        }}
        onSkils={() => {
          scrollTo(skilsRef);
        }}
        onEducation={() => {
          scrollTo(educationRef);
        }}
        onExperience={() => {
          scrollTo(expRef);
        }} 
        onProject={() => {
          scrollTo(projectRef);
        }}  
        onContact={() => {
          scrollTo(contactRef);
        }}
      />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={skilsRef}>
        <Skils />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
      <div ref={expRef}>
        <Experience />
      </div>      
      <div ref={projectRef}>
        <Project />
      </div>  
      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

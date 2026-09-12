import AllProjectStack from "@/components/AllProjectStack";
import FadeIn from "@/components/FadIn";
import FeaturedProjects from "@/components/FeaturedProjects";
import HeroSection from "@/components/Herosection";
import Mailsection from "@/components/Mailsection";
import SkillSection from "@/components/SkillSection";
import Aboutme from "@/components/Aboutme";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Piyush Portfolio",
  description: "Portfolio of Piyush Mina, a full-stack software engineer specializing in React.js, Next.js, and modern web applications.",
  keywords: ["Piyush Mina", "Portfolio", "Full-Stack Developer", "React", "Next.js", "Web Development"],
  openGraph: {
    title: "Piyush Mina | Full-Stack Developer",
    description: "Portfolio of Piyush Mina, a full-stack software engineer specializing in React.js, Next.js, and modern web applications.",
    type: "website",
  },
};

const Page = () => {
  return (
    <main className="bg-black text-white min-h-screen w-full relative">
      
      {/* 1. NAVBAR - Kept separate so 'sticky' still works */}
      <div className="sticky top-0 z-100">
        <Navbar />
      </div>

      {/* 2. HERO SECTION - Wrapped in overflow-x-hidden to kill the white line */}
      <div className="relative w-full overflow-hidden">
        <HeroSection />
        <div className="absolute w-full h-50 bg-gradient-to-b from-black to-transparent"></div>
      </div>

      {/* The rest of the page remains normal */}
      <FadeIn>
        <div className="mt-15 gap-20 flex flex-col w-full">
          <h2 className="flex justify-center text-6xl">Featured Projects</h2>
          <div className="flex justify-center w-full flex-wrap gap-10 mt-10">
            <a href="https://thecinenexus.vercel.app/" target="_blank" rel="noopener noreferrer">
              <FeaturedProjects
                imageSrc="/images/CineNexus.png"
                title="CineNexus"
                description="A immersive movie discovery platform offering instant, real-time access to a massive catalog of film data. cinematic interface to provide users with seamless browsing and advanced search result."
              />
            </a>
            <a href="https://bhai-ki-shop.vercel.app/" target="_blank" rel="noopener noreferrer">
              <FeaturedProjects
                imageSrc="/images/Bhai-ki-shop.png"
                title="Bhai-Ki-Shop"
                description="An AI-powered PC accessories marketplace featuring a conversational virtual shopping agent. It acts as a personal guide, instantly matching users with the perfect tech gear based on their exact needs."
              />
            </a>
            <a href="https://ai-resume-reviewer-inky.vercel.app/" target="_blank" rel="noopener noreferrer">
              <FeaturedProjects
                imageSrc="/images/AI-resume review.png"
                title="AI Resume Reviewer"
                description="AI-driven platform that scores and optimizes resumes, helping users improve their formatting and content for standard industry requirements."
              />
            </a>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="flex flex-col gap-0 mt-20 relative">
          <h2 className="absolute top-20 flex justify-start pl-15 text-6xl font-bold z-50">
            All Projects
          </h2>
          <AllProjectStack />
        </div>
      </FadeIn>
      
      <FadeIn>
        <SkillSection />
      </FadeIn>
      <FadeIn>
        <Aboutme />
      </FadeIn>
      <FadeIn>
        <Mailsection />
      </FadeIn>
    </main>
  );
};

export default Page;
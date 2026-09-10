import AllProjectStack from "@/components/AllProjectStack";
import FeaturedProjects from "@/components/FeaturedProjects";
import HeroSection from "@/components/Herosection";
import Aboutme from "@/components/ui/Aboutme";
import React from "react";

const page = () => {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <div className="mt-15 gap-20 flex flex-col">
        <h1 className="flex justify-center text-6xl">Featured Projects</h1>
        <div className="flex justify-center flex-wrap gap-10 mt-10">
          <a href="https://thecinenexus.vercel.app/">
            <FeaturedProjects
              imageSrc="/images/CineNexus.png"
              title="CineNexus"
              description="A immersive movie discovery platform offering instant, real-time access to a massive catalog of film data. cinematic interface to provide users with seamless browsing and advanced search result."
            />
          </a>
          <a href="https://bhai-ki-shop.vercel.app/">
            <FeaturedProjects
              imageSrc="/images/Bhai-ki-shop.png"
              title="Bhai-Ki-Shop"
              description="An AI-powered PC accessories marketplace featuring a conversational virtual shopping agent. It acts as a personal guide, instantly matching users with the perfect tech gear based on their exact needs."
            />
          </a>
          <a href="https://ai-resume-reviewer-inky.vercel.app/">
            <FeaturedProjects
              imageSrc="/images/AI-resume review.png"
              title="Bhai-Ki-Shop"
              description="AI-driven platform that scores and optimizes resumes, helping users improve their formatting and content for standard industry requirements."
            />
          </a>
        </div>
      </div>
      <div>
        <h1 className=" mt-20 flex justify-center text-6xl">All Projects</h1>
        <AllProjectStack />
      </div>
      <Aboutme />
    </div>
  );
};

export default page;

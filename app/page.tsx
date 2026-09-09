import FeaturedProjects from "@/components/FeaturedProjects";
import HeroSection from "@/components/Herosection";
import Aboutme from "@/components/ui/Aboutme";
import React from "react";

const page = () => {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <div className="flex justify-center gap-10">
        <FeaturedProjects />
        <FeaturedProjects />
        <FeaturedProjects />
      </div>

      <Aboutme />
    </div>
  );
};

export default page;

"use client";

import Image from "next/image";
import BorderGlow from "./BorderGlow";

const FeaturedProjects = ({ title, description, imageSrc }:{title:string, description:string, imageSrc:string})=> {
  return (
    // 1. ADDED: w-[400px] locks the card size, and shrink-0 stops Flexbox from crushing it!
    <section className="flex justify-center w-[450px] shrink-0 relative">
      <BorderGlow
        edgeSensitivity={30}
        glowColor="40 80 80"
        backgroundColor="#120F17"
        borderRadius={28}
        glowRadius={40}
        glowIntensity={1}
        coneSpread={25}
        animated={false}
        colors={["#c084fc", "#f472b6", "#38bdf8"]}
      >
        {/* 2. Added w-full here so it stretches to the 400px parent */}
        <div className="p-2 rounded-3xl w-full">
          <Image
            src={imageSrc}
            alt={title}
            width={450}
            height={250}
            // 3. I set a fixed height of h-[220px] to make all 3 project images exactly uniform
            className="rounded-2xl lg:w-full lg:h-[220px] object-cover"
            loading="lazy"
          />
        </div>
        
        {/* Adjusted the padding slightly (p-4) so your text has room to breathe */}
        <div className="absolute bg-linear-0 from-black to-transparent w-full h-full rounded-4xl flex flex-col justify-end p-3">
          <h1 className="text-xl font-bold text-white mb-1">{title}</h1>
          <p className="text-gray-400 leading-tight text-[14px]">
            {description}
          </p>
        </div>
      </BorderGlow>
    </section>
  );
};

export default FeaturedProjects;
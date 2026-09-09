"use client";

import Image from "next/image";
import BorderGlow from "./BorderGlow";

const FeaturedProjects = () => {
  return (
    <section className="flex justify-center">
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
        <div className="p-1.5 rounded-3xl">
          <Image
            src="/images/Bhai-ki-shop.png"
            alt="Bhai Ki Shop"
            width={400}
            height={100}
            sizes="100px"
            className="rounded-2xl"
          />
        </div>
        <div className="absolute bg-linear-0 from-red-500 to-transparent w-full h-full rounded-4xl p-2 flex items-end">
          <h1>Bhai-Ki-Shop</h1>
        </div>
      </BorderGlow>
    </section>
  );
};

export default FeaturedProjects;
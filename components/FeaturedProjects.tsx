"use client"; 

import ScrollReveal from './ScrollReveal';

const FeaturedProjects = () => {
  return (
    <section className="flex flex-col gap-8 pb-12 pt-32 px-6 max-w-4xl mx-auto">
      
      {/* 
        1. Changed text-6xl to scale fluidly: text-3xl (mobile) -> md:text-5xl (tablet) -> lg:text-6xl (desktop) 
        2. Changed leading-relaxed to leading-tight so the giant text groups neatly together 
      */}
      <div className="text-3xl md:text-5xl lg:text-6xl text-gray-200 leading-tight md:leading-snug font-bold tracking-tight">
        
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={3}
          blurStrength={4}
        >
          When does a man die? When he is hit by a bullet? No! When he suffers a disease?
          No! When he ate a soup made out of a poisonous mushroom?
          No! A man dies when he is forgotten!
        </ScrollReveal>
        
      </div>
    </section>
  );
};

export default FeaturedProjects;
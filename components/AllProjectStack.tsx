"use client";
import Image from "next/image";
import React from "react";
import { StackCard } from "stack-on-scroll";

const AllProjectStack = () => {
  // We keep your beautiful config here
  const stackConfig = {
    offset: 60, // The 60px gap will now work!
    scaleStep: 0.04, // 4% shrink
    fadeStep: 0, // 15% dimming
    rotateStep: 0,
  };

  return (
    // I added pt-[100px] here. This acts as your "from top" setting
    // to ensure the stack doesn't overlap your top navbar!
    <div className="w-full relative pb-20 pt-[100px] bg-black">
      <div className="w-full px-4 md:px-10 lg:px-16">
        {/* Card 1: INDEX 0 */}
        <StackCard {...stackConfig} index={0}>
          <div className="relative w-full h-[70vh] bg-neutral-950 overflow-hidden rounded-[40px] border border-white/10 flex flex-col justify-between p-8 md:p-16 mb-8 ">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/30 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="flex justify-between flex-col min-[900px]:flex-row">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-white/5">
                    2026
                  </span>
                  <span className="text-purple-400 text-sm font-medium">
                    API Integration
                  </span>
                </div>
                <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                  CineNexus
                </h2>
                <p className="text-neutral-400 text-xl max-w-2xl leading-relaxed">
                 An Movie discovery app using the TMDB API to search and a Personalize Custom Watchlist,<span className="hidden sm:flex">filter and recommend visually stunning films and trending blockbusters.</span> 
                </p>
              </div>
              <a href="https://thecinenexus.vercel.app/">
              <div className="rounded-2xl border border-gray-500 overflow-hidden">
                <Image
                  src="/images/CineNexus.png"
                  alt="CineNexus"
                  width={800}
                  height={150}
                  className="relative z-10 drop-shadow-[0_0_15px_rgba(94,53,242,0.3)]"
                />
              </div>
              </a>
              
            </div>

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
              <div className="flex gap-3">
                {["React.js", "TMDB API", "Tailwind"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-lg border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </StackCard>

        {/* Card 2: INDEX 1 */}
        <StackCard {...stackConfig} index={1}>
          <div className="relative w-full h-[70vh] bg-neutral-950 overflow-hidden rounded-[40px] border border-white/10 flex flex-col justify-between p-8 md:p-16 mb-8">
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-600/30 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="flex justify-between flex-col min-[900px]:flex-row">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-white/5">
                    2026
                  </span>
                  <span className="text-emerald-400 text-sm font-medium">
                    AI Integration
                  </span>
                </div>
                <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                  AI Resume Review
                </h2>
                <p className="text-neutral-400 text-xl max-w-2xl leading-relaxed">
                  An NLP-driven evaluation tool that parses and optimizes resumes for ATS compatibility,<span className="hidden sm:flex">providing actionable feedback to enforce strict structural consistency and effective keyword and suggestions.</span> 
                </p>
              </div>
              <a href="https://ai-resume-reviewer-inky.vercel.app/">
              <div className="rounded-2xl border border-gray-500 overflow-hidden">
                <Image
                  src="/images/AI-resume review.png"
                  alt="AI-resume review"
                  width={800}
                  height={150}
                  className="relative z-10 drop-shadow-[0_0_15px_rgba(94,53,242,0.3)]"
                />
              </div>
              </a>
            </div>
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
              <div className="flex gap-3">
                {["React.js", "AI Integration", "JavaScript"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-lg border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </StackCard>

        {/* Card 3: INDEX 2 */}
        <StackCard {...stackConfig} index={2}>
          <div className="relative w-full h-[70vh] bg-neutral-950 overflow-hidden rounded-[40px] border border-white/10 flex flex-col justify-between p-8 md:p-16">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="flex justify-between flex-col min-[900px]:flex-row">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-white/5">
                    2023
                  </span>
                  <span className="text-blue-400 text-sm font-medium">
                    Data visualization
                  </span>
                </div>
                <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                  F1 Dashboard
                </h2>
                <p className="text-neutral-400 text-xl max-w-2xl leading-relaxed">
                 A real-time data visualization dashboard tracking driver standings,<span className="hidden sm:flex">race statistics, race cleander/race date and time, and constructor performance for top-tier teams.</span> 
                </p>
              </div>
              <a href="https://formula-1-dashboard-piyush.vercel.app/">
              <div className="rounded-2xl border border-gray-500 overflow-hidden">
                <Image
                  src="/images/f1.png"
                  alt="f1"
                  width={800}
                  height={150}
                  className="relative z-10 drop-shadow-[0_0_15px_rgba(94,53,242,0.3)]"
                />
              </div>
              </a>
            </div>
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
              <div className="flex gap-3">
                {["React,js", "Data visualization", "Real time Handling"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-lg border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </StackCard>
        
        {/* Card 4: INDEX 3 */}
        <StackCard {...stackConfig} index={3}>
          <div className="relative w-full h-[70vh] bg-neutral-950 overflow-hidden rounded-[40px] border border-white/10 flex flex-col justify-between p-8 md:p-16 mb-8">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/30 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="flex justify-between flex-col min-[900px]:flex-row">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-white/5">
                    2024
                  </span>
                  <span className="text-purple-400 text-sm font-medium">
                    AI Integration
                  </span>
                </div>
                <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                  Bhai ki Shop
                </h2>
                <p className="text-neutral-400 text-xl max-w-2xl leading-relaxed">
                 An AI Shopping Agent that dynamically compares product specifications and pricing <span className="hidden sm:flex">to deliver the best deals based on user requirements and it can filter out the best and right product according to users requirements.</span> 
                </p>
              </div>
              <a href="https://bhai-ki-shop.vercel.app/">
                <div className="rounded-2xl border border-gray-500 overflow-hidden">
                  <Image
                    src="/images/Bhai-ki-shop.png"
                    alt="Bhai-ki-shop"
                    width={800}
                    height={150}
                    className="relative z-10 drop-shadow-[0_0_15px_rgba(94,53,242,0.3)]"
                  />
                </div>
              </a>
            </div>
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
              <div className="flex gap-3">
                {["Next.js", "AI SDk", "TypeScript"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-lg border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </StackCard>
      </div>
    </div>
  );
};

export default AllProjectStack;
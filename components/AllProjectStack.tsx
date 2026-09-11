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
            <div className="flex justify-between">
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
                  A dynamic cinematic discovery platform designed to provide real-time updates on trending films, top-rated movies, and comprehensive database insights. Built with a focus on immersive, visually appealing UI, the application leverages external APIs to seamlessly render data for visually stunning and narrative-driven titles. Integrated AI search capabilities elevate the user experience by delivering smart, context-aware movie recommendations.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-500 overflow-hidden">
                <Image
                  src="/images/CineNexus.png"
                  alt="CineNexus"
                  width={850}
                  height={150}
                  className="relative z-10 drop-shadow-[0_0_15px_rgba(94,53,242,0.3)]"
                />
              </div>
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

            <div className="flex justify-between">
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
                  An intelligent evaluation tool engineered to parse, analyze, and optimize professional resumes. Leveraging natural language processing, the application provides targeted, actionable feedback on content, structure, and formatting. It helps candidates strip away clutter, enforce strict consistency, and highlight key technical skills to ensure maximum compatibility with Applicant Tracking Systems (ATS).
                </p>
              </div>
              <div className="rounded-2xl border border-gray-500 overflow-hidden">
                <Image
                  src="/images/AI-resume review.png"
                  alt="AI-resume review"
                  width={850}
                  height={150}
                  className="relative z-10 drop-shadow-[0_0_15px_rgba(94,53,242,0.3)]"
                />
              </div>
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

            <div className="flex justify-between">
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
                  A high-performance data visualization dashboard designed to track Formula 1 race statistics, driver standings, and constructor performance. The application translates complex, real-time motorsports data into clean, interactive charts and accessible metrics, delivering a highly responsive analytical experience for tracking top-tier racing teams.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-500 overflow-hidden">
                <Image
                  src="/images/f1.png"
                  alt="f1"
                  width={850}
                  height={150}
                  className="relative z-10 drop-shadow-[0_0_15px_rgba(94,53,242,0.3)]"
                />
              </div>
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
        <StackCard {...stackConfig} index={3}>
          <div className="relative w-full h-[70vh] bg-neutral-950 overflow-hidden rounded-[40px] border border-white/10 flex flex-col justify-between p-8 md:p-16 mb-8">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/30 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="flex justify-between">
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
                  An intelligent AI Shopping Agent. This core feature acts as a personalized digital assistant, dynamically comparing product specifications and pricing across the catalog to deliver optimized, cost-effective recommendations based on exact user requirements. Alongside dynamic catalog rendering and intuitive cart management, the platform ensures a smart, frictionless, and highly tailored digital shopping experience.
                </p>
              </div>
              <a href="https://bhai-ki-shop.vercel.app/">
                <div className="rounded-2xl border border-gray-500 overflow-hidden">
                  <Image
                    src="/images/Bhai-ki-shop.png"
                    alt="Bhai-ki-shop"
                    width={850}
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

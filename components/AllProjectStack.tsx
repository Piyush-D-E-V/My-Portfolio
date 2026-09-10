'use client'
import React from 'react'
import { StackCard } from 'stack-on-scroll' 

const AllProjectStack = () => {
  // We keep your beautiful config here
  const stackConfig = {
    offset: 60,           // The 60px gap will now work!
    scaleStep: 0.04,      // 4% shrink
    fadeStep: 0,       // 15% dimming
    rotateStep: 0,        
  };

  return (
    // I added pt-[100px] here. This acts as your "from top" setting 
    // to ensure the stack doesn't overlap your top navbar!
    <div className="w-full relative pb-20 pt-[100px] bg-black">
      <div className="w-full px-4 md:px-10 lg:px-16">
          
          {/* Card 1: INDEX 0 */}
          <StackCard {...stackConfig} index={0}>
            <div className="relative w-full h-[70vh] bg-neutral-950 overflow-hidden rounded-[40px] border border-white/10 flex flex-col justify-between p-8 md:p-16 mb-8">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/30 blur-[80px] rounded-full pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-white/5">
                    2024
                  </span>
                  <span className="text-purple-400 text-sm font-medium">AI Integration</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">Nexus AI Agent</h2>
                <p className="text-neutral-400 text-xl max-w-2xl leading-relaxed">A conversational AI dashboard designed to automate customer support workflows using natural language processing and custom LLM routing.</p>
              </div>
              
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
                <div className="flex gap-3">
                  {['React', 'Next.js', 'OpenAI', 'Tailwind'].map(tech => (
                    <span key={tech} className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-lg border border-white/5">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </StackCard>

          {/* Card 2: INDEX 1 */}
          <StackCard {...stackConfig} index={1}>
            <div className="relative w-full h-[70vh] bg-neutral-950 overflow-hidden rounded-[40px] border border-white/10 flex flex-col justify-between p-8 md:p-16 mb-8">
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-600/30 blur-[80px] rounded-full pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-white/5">
                    2023
                  </span>
                  <span className="text-emerald-400 text-sm font-medium">E-Commerce</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">Aura Marketplace</h2>
                <p className="text-neutral-400 text-xl max-w-2xl leading-relaxed">A high-performance headless commerce platform featuring 3D product configurations, real-time inventory, and sub-second page loads.</p>
              </div>
              
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
                <div className="flex gap-3">
                  {['Shopify', 'Hydrogen', 'Framer Motion'].map(tech => (
                    <span key={tech} className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-lg border border-white/5">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </StackCard>

          {/* Card 3: INDEX 2 */}
          <StackCard {...stackConfig} index={2}>
            <div className="relative w-full h-[70vh] bg-neutral-950 overflow-hidden rounded-[40px] border border-white/10 flex flex-col justify-between p-8 md:p-16">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-white/5">
                    2023
                  </span>
                  <span className="text-blue-400 text-sm font-medium">Fintech</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">Vault Analytics</h2>
                <p className="text-neutral-400 text-xl max-w-2xl leading-relaxed">Secure financial dashboard offering institutional investors real-time data visualization, predictive analytics, and portfolio tracking.</p>
              </div>
              
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
                <div className="flex gap-3">
                  {['TypeScript', 'React', 'D3.js', 'Node.js'].map(tech => (
                    <span key={tech} className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-lg border border-white/5">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </StackCard>
          <StackCard {...stackConfig} index={3}>
            <div className="relative w-full h-[70vh] bg-neutral-950 overflow-hidden rounded-[40px] border border-white/10 flex flex-col justify-between p-8 md:p-16 mb-8">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/30 blur-[80px] rounded-full pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-white/5">
                    2024
                  </span>
                  <span className="text-purple-400 text-sm font-medium">AI Integration</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">Nexus AI Agent</h2>
                <p className="text-neutral-400 text-xl max-w-2xl leading-relaxed">A conversational AI dashboard designed to automate customer support workflows using natural language processing and custom LLM routing.</p>
              </div>
              
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
                <div className="flex gap-3">
                  {['React', 'Next.js', 'OpenAI', 'Tailwind'].map(tech => (
                    <span key={tech} className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-lg border border-white/5">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </StackCard>

      </div>
    </div>
  )
}

export default AllProjectStack
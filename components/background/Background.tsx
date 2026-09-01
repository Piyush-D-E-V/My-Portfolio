import React from "react";

const Background = () => {
  return (
    <div className="relative w-full h-screen blur-xl">
      
      {/* Top Left - Subtle pink highlight over deep purple */}
      <div className="absolute -top-30 -left-20">
        <div className="w-50  h-50 bg-[#EAAEF2]/50 rounded-r-[50%] absolute z-20 blur-2xl"></div>
        <div className="w-100 h-50 bg-[#8552F2] rounded-r-[50%] absolute z-10 blur-3xl"></div>
        <div className="w-100 h-50 bg-[#5E35F2] rounded-r-[50%] absolute blur-xl"></div>
      </div>
      
      {/* Bottom Left - The brightest pink hot spot */}
      <div className="absolute bottom-50 -left-70">
        <div className="w-250 h-50 bg-[#EAAEF2]/85 rounded-r-full absolute z-20 blur-2xl"></div>
        <div className="w-250 h-50 bg-[#8552F2] rounded-r-full absolute z-10 blur-3xl"></div>
        <div className="w-250 h-50 bg-[#5E35F2] rounded-r-full absolute blur-xl"></div>
      </div>
      
      {/* Bottom Mid-Left - Blending the pink across the bottom */}
      <div className="absolute bottom-73 left-60">
        <div className="w-250 h-50 bg-[#EAAEF2]/35 rounded-l-full absolute z-20 blur-2xl"></div>
        <div className="w-250 h-50 bg-[#8552F2] rounded-full absolute z-10 blur-3xl"></div>
        <div className="w-250 h-50 bg-[#5E35F2] rounded-full absolute blur-xl"></div>
      </div>
      
      {/* Bottom Mid-Right - Blending the pink across the bottom */}
      <div className="absolute bottom-60 left-[40%]">
        <div className="w-250 h-50 bg-[#EAAEF2]/40 rounded-l-3xl absolute z-20 blur-2xl"></div>
        <div className="w-250 h-50 bg-[#8552F2] rounded-l-3xl absolute z-10 blur-3xl"></div>
        <div className="w-250 h-50 bg-[#5E35F2] rounded-l-3xl absolute blur-xl"></div>
      </div>
      
      {/* Bottom Right - Stronger pink glow on the right edge */}
      <div className="absolute bottom-60 left-[70%]">
        <div className="w-250 h-50 bg-[#EAAEF2]/60 rounded-l-3xl absolute z-20 blur-2xl"></div>
        <div className="w-250 h-50 bg-[#8552F2] rounded-l-3xl absolute z-10 blur-3xl"></div>
        <div className="w-250 h-50 bg-[#5E35F2] rounded-l-3xl absolute blur-xl"></div>
      </div>
      
    </div>
  );
};

export default Background;
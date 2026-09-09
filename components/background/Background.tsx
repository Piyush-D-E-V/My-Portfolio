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
      <div className="absolute md:bottom-70">
        <div className="w-screen h-500 bg-[#EAAEF2]/85 rounded-t-[35%] absolute z-50 blur-2xl"></div>
        <div className="w-screen h-500 bg-[#8552F2] rounded-t-[30%] absolute z-10 blur-3xl"></div>
        <div className="w-screen h-500 bg-[#5E35F2] rounded-t-[25%] absolute blur-xl"></div>
      </div>
    </div>
  );
};

export default Background;

import React from "react";

const Background = () => {
  return (
    // 'absolute inset-0' pins it to the background of your hero section.
    // 'bg-black' ensures the base is dark.
    // 'overflow-hidden' prevents the blurred orbs from causing horizontal scrolling.
    <div className="absolute inset-0 w-full min-h-screen bg-black overflow-hidden z-5 pointer-events-none rounded-full blur-3xl bottom-0">
      
      {/* 1. Top Left - Deep Purple Glow */}
      <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-[#8552F2] rounded-full blur-[100px] md:blur-[150px] mix-blend-screen"></div>

      {/* 2. Bottom Right - Darker Violet Glow */}
      <div className="absolute top-[40%] -right-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#5E35F2] rounded-full blur-[100px] md:blur-[150px] mix-blend-screen"></div>

      {/* 3. Center/Left Accent - Bright Pinkish Hot Spot */}
      <div className="absolute top-[10%] left-[40%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#EAAEF2] rounded-full blur-[90px] md:blur-[130px] mix-blend-screen"></div>

    </div>
  );
};

export default Background;
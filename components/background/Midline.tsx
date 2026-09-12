import React from "react";

const Midline = () => {
  return (
    // The wrapper ensures no horizontal scrolling (overflow-hidden) 
    // and creates the space for the curve.
    <div className="relative w-full h-screen bg-black overflow-hidden flex justify-center mt-auto">
      <div className="absolute -bottom-115 w-[150%] md:w-[120%] h-[300px] md:h-[500px] rounded-[50%] md:rounded-[100%] border-t-[3px] border-t-[#8552F2]/60 bg-black shadow-[0_-30px_80px_-15px_rgba(133,82,242,0.5)] scale-120 z-10"></div>
      
    </div>
  );
};

export default Midline;
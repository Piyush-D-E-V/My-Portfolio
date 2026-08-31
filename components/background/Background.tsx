import React from "react";

const Background = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute -top-30 -left-20">
        <div className="w-100 h-25 bg-[#ec82fa] rounded-r-[50%] absolute z-20 blur-2xl"></div>
        <div className="w-100 h-30 bg-[#7c42fa] rounded-r-[50%] absolute z-10 blur-3xl"></div>
        <div className="w-100 h-40 bg-[#8552F1] rounded-r-[50%] absolute blur-xl"></div>
      </div>
      <div className=" absolute bottom-0 right-0">
        <div className="w-100 h-25 bg-[#ec82fa] rounded-r-[50%] absolute z-20 blur-2xl"></div>
        <div className="w-100 h-30 bg-[#7c42fa] rounded-r-[50%] absolute z-10 blur-3xl"></div>
        <div className="w-100 h-40 bg-[#8552F1] rounded-r-[50%] absolute blur-xl"></div>
      </div>
    </div>
  );
};

export default Background;

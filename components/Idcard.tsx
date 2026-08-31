import Image from "next/image";
import React from "react";

const Idcard = () => {
  return (
    <div className="relative min-w-[400px]">
      <Image src="/images/idcard.png" alt="idCard" width={400} height={400} />

      <div className="w-[260px] h-[300px] bg-[#ec82fa] absolute top-70 left-16 rounded-xl overflow-hidden">
        <div className="w-[260px] h-[300px] bg-[#8552F1] blur-2xl absolute top-0 left-0 rounded-xl overflow-hidden z-10"></div>
        <Image
          className="absolute -top-3 z-30"
          src="/images/pic.png"
          alt="idCard"
          width={260}
          height={260}
        />
      </div>
    </div>
  );
};

export default Idcard;

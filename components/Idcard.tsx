import Image from "next/image";
import React from "react";
import Lanyard from "./ui/Lanyard";

const Idcard = () => {
  return (
    <div className="w-full">
    <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
      
    </div>
  );
};

export default Idcard;


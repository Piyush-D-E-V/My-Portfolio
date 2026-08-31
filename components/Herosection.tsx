import Image from "next/image";
import Background from "./background/Background";
import Navbar from "./Navbar/Navbar";

const Herosection = () => {
  return (
    <div className="relative  overflow-hidden h-screen w-full">
      <div className="sticky z-50">
        <Navbar/>
      </div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="absolute">
          <Image
            src="/images/idcard.png"
            alt="idCard"
            width={400}
            height={400}
          />
        </div>
        <p className=" text-[330px] font-semibold">Building</p>
        <div className="absolute left-0">
          <Background />
        </div>
      </div>
    </div>
  );
};

export default Herosection;

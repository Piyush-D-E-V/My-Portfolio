import Background from "./background/Background";
import Navbar from "./Navbar/Navbar";
import Idcard from "./Idcard";

const Herosection = () => {
  return (
    <div className="relative overflow-hidden h-screen w-full">
      <div className="sticky z-50">
        <Navbar />
      </div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="absolute top-2 w-full z-40">
          <Idcard />
        </div>
        <div className="flex flex-col justify-center">
          <p className="leading-35"><span className="text-6xl pl-5">Welcome Lets </span><br />
          <span className="text-[320px] font-bold">Building</span> <br />
          <span className="flex justify-end text-6xl pr-5">the Unimaginable</span></p>
        </div>

        <div className="absolute left-0 w-full">
          <Background />
        </div>
      </div>
    </div>
  );
};

export default Herosection;

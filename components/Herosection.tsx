import Background from "./background/Background";
import Midline from "./background/Midline";
import Heroarrow from "./HeroItem/Heroarrow";
import HerotagIcon from "./HeroItem/HerotagIcon";
import SocialLinks from "./HeroItem/SocialLinks";
import Idcard from "./Idcard";

const Herosection = () => {
  return (
    <div className="relative overflow-hidden h-screen w-full">
      <div className="w-full h-screen flex justify-center items-center">
        <div className="absolute top-2 w-full z-60">
          <Idcard />
        </div>
        <div className="absolute top-30 right-0 2xl:right-40 z-50">
          <Heroarrow />
        </div>
        <div className="absolute bottom-0 left-0 2xl:left-30 z-50">
          <HerotagIcon />
        </div>
        <div className="absolute bottom-10 right-15 2xl:right-50 z-60">
          <SocialLinks />
        </div>
        <div
          className="flex flex-col justify-center z-40"
          style={{
            animation: "fadeInUp 5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          }}
        >
          <style>
            {`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
          </style>
          <div className="flex flex-col leading-none gap-4">
  <span className="font-quadrillion text-7xl pl-5">
    Building
  </span>
  <span className="font-quadrillion text-[100px] lg:text-[200px] xl:text-[250px] 2xl:text-[350px] font-bold">
    Beyond
  </span>
  <span className="font-quadrillion text-right text-7xl pr-5">
    Imagination
  </span>
</div>
        </div>
        <div className="absolute w-full z-10">
          <Background />
          <div>
            <Midline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;

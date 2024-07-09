import type { NextPage } from "next";

export type HeroType = {
  className?: string;
};

const Hero: NextPage<HeroType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[292px] left-[calc(50%_-_510px)] w-[1079.7px] h-[540.2px] text-left text-xl text-white font-in ${className}`}
    >
      <img
        className="absolute top-[0px] left-[calc(50%_+_84.35px)] w-[455.6px] h-[540.2px] object-cover"
        alt=""
        src="/objectother-07@2x.png"
      />
      <div className="absolute top-[68px] left-[calc(50%_-_539.85px)] text-7xl leading-[28.5px] font-kokoro inline-block w-[373px] h-[32.3px]">
        discover and collect rare NFTs
      </div>
      <div className="absolute top-[126px] left-[calc(50%_-_531.85px)] text-30xl leading-[50.5px] font-h1 inline-block w-[539px] h-[287.7px]">
        <p className="m-0">The most secure marketplace for buying</p>
        <p className="m-0">and selling unique crypto assets.</p>
      </div>
      <img
        className="absolute top-[439.5px] left-[calc(50%_-_531.85px)] rounded-6xl w-[149px] h-[57px]"
        alt=""
        src="/rectangle-20.svg"
      />
      <img
        className="absolute top-[439.5px] left-[calc(50%_-_351.85px)] rounded-6xl w-[149px] h-[57px]"
        alt=""
        src="/rectangle-20.svg"
      />
      <div className="absolute top-[454.9px] left-[calc(50%_-_495.85px)] leading-[27.5px] inline-block w-[373px] h-[31.2px]">
        buy nfts
      </div>
      <div className="absolute top-[454.9px] left-[calc(50%_-_309.85px)] leading-[27.5px] text-snow inline-block w-[373px] h-[31.2px]">
        sell nfts
      </div>
    </div>
  );
};

export default Hero;

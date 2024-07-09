import type { NextPage } from "next";
import Hero from "../components/hero";
import Analytics from "../components/analytics";
import Card from "../components/card";
import KryptoForm from "../components/krypto-form";

const MacBookAir: NextPage = () => {
  return (
    <button className="cursor-pointer [border:none] p-0 bg-midnightblue w-full relative h-[3765px] overflow-hidden">
      <div className="absolute top-[725.8px] left-[calc(50%_+_402px)] [filter:blur(70px)] rounded-[50%] bg-cadetblue w-[648px] h-[934.3px] opacity-[0.8]" />
      <div className="absolute top-[1270px] left-[calc(50%_-_1963px)] [filter:blur(93px)] rounded-[50%] bg-darkslateblue w-[1785px] h-[642.2px] opacity-[0.8]" />
      <div className="absolute top-[-312.2px] left-[calc(50%_-_1637px)] [filter:blur(70px)] rounded-[50%] bg-darkslateblue w-[1785px] h-[642.2px] opacity-[0.8]" />
      <div className="absolute top-[651px] left-[calc(50%_+_402px)] w-[648px] h-[838px]" />
      <div className="absolute top-[257px] left-[calc(50%_+_114px)] w-[455.6px] h-[484.5px]" />
      <div className="absolute top-[89.2px] left-[calc(50%_-_485px)] w-[1087px] h-[39px]">
        <h3 className="m-0 absolute top-[7.8px] left-[calc(50%_-_543.5px)] text-[30px] leading-[27.5px] font-bold font-in text-whitesmoke text-left inline-block w-[87px] h-[31.2px]">
          krypto
        </h3>
        <b className="absolute top-[0px] left-[calc(50%_-_145.5px)] text-6xl leading-[27.5px] inline-block font-in text-whitesmoke text-left w-[87px] h-[31.2px]">
          about
        </b>
        <b className="absolute top-[0px] left-[calc(50%_+_55.5px)] text-xl leading-[27.5px] inline-block font-in text-whitesmoke text-left w-[87px] h-[31.2px]">
          pricing
        </b>
        <b className="absolute top-[0px] left-[calc(50%_+_256.5px)] text-xl leading-[27.5px] inline-block font-in text-whitesmoke text-left w-[87px] h-[31.2px]">
          contact
        </b>
        <b className="absolute top-[7.8px] left-[calc(50%_+_456.5px)] text-xl leading-[27.5px] inline-block font-in text-whitesmoke text-left w-[87px] h-[31.2px]">
          buy nfts
        </b>
      </div>
      <Hero />
      <div className="absolute top-[911px] left-[calc(50%_-_480px)] [backdrop-filter:blur(24px)] w-[936px] h-[127px]">
        <div className="absolute top-[0px] left-[calc(50%_-_468px)] rounded-sm bg-darkslateblue w-[936px] h-[127px]" />
        <img
          className="absolute top-[49px] left-[calc(50%_-_140px)] rounded-sm w-[205px] h-[33px] object-cover"
          alt=""
          src="/image-5@2x.png"
        />
        <img
          className="absolute top-[18px] left-[calc(50%_-_455px)] rounded-sm w-[230px] h-[91px] object-cover"
          alt=""
          src="/image-6@2x.png"
        />
        <img
          className="absolute top-[41px] left-[calc(50%_+_149px)] rounded-sm w-[83px] h-[49px] object-cover"
          alt=""
          src="/image-7@2x.png"
        />
        <img
          className="absolute top-[47px] left-[calc(50%_+_315px)] rounded-sm w-[140px] h-[37px] object-cover"
          alt=""
          src="/image-8@2x.png"
        />
      </div>
      <Analytics />
      <img
        className="absolute top-[1873px] left-[calc(50%_+_161px)] w-[362px] h-[346px] object-cover"
        alt=""
        src="/objectother-191@2x.png"
      />
      <Card />
      <Card propLeft="455px" />
      <Card propLeft="855px" />
      <div className="absolute top-[3054px] left-[149px] w-[976px] h-[302px]">
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(90deg,_#aad9d9,_#8080d7_46.36%,_#342c66_92.5%)] w-[976px] h-[302px]" />
        <b className="absolute top-[42px] left-[176px] text-[27px] tracking-[0.02em] leading-[159.69%] inline-block font-in text-white text-center w-[668px] h-[59px]">
          With our easy-to-use platform, you can buy or sell assets from
          anywhere in the world, at any time.
        </b>
        <img
          className="absolute top-[178px] left-[calc(50%_-_114px)] rounded-6xl w-[271px] h-[59px]"
          alt=""
          src="/rectangle-22.svg"
        />
        <div className="absolute top-[194px] left-[calc(50%_-_49px)] text-xl leading-[27.5px] font-in text-gray text-left">
          view our pricing
        </div>
      </div>
      <KryptoForm />
      <img
        className="absolute top-[3752px] left-[0px] w-[1280px] h-[13px]"
        alt=""
        src="/rectangle-23.svg"
      />
    </button>
  );
};

export default MacBookAir;

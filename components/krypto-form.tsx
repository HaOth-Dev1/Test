import type { NextPage } from "next";

export type KryptoFormType = {
  className?: string;
};

const KryptoForm: NextPage<KryptoFormType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[3490px] left-[121px] w-[1047px] h-[178px] text-left text-base text-white font-in ${className}`}
    >
      <b className="absolute top-[0px] left-[0px] text-6xl inline-block w-[173px]">
        krypto
      </b>
      <div className="absolute top-[10px] left-[714px] text-3xl inline-block w-[293px]">
        join our newsletter
      </div>
      <div className="absolute w-[6.59%] top-[29.21%] left-[16.52%] leading-[31px] inline-block">
        <p className="m-0">Home</p>
        <p className="m-0">About</p>
        <p className="m-0">Buy NFTs</p>
        <p className="m-0">Sell NFTs</p>
      </div>
      <div className="absolute w-[9.26%] top-[30.34%] left-[31.9%] leading-[31px] inline-block">
        <p className="m-0">Browse NFTs</p>
        <p className="m-0">Buy NFTs</p>
        <p className="m-0">Sell NFTs</p>
      </div>
      <div className="absolute w-[7.07%] top-[30.34%] left-[49.28%] leading-[31px] inline-block">
        <p className="m-0">Email</p>
        <p className="m-0">LinkedIn</p>
        <p className="m-0">Instagram</p>
        <p className="m-0">Twitter</p>
      </div>
      <div className="absolute top-[13px] left-[173px] inline-block w-[113px]">
        krypto
      </div>
      <div className="absolute top-[15px] left-[334px] inline-block w-[123px]">
        Market
      </div>
      <div className="absolute top-[15px] left-[516px] inline-block w-32">
        contact
      </div>
      <div className="absolute top-[101px] left-[714px] rounded-xl bg-darkslateblue w-[158px] h-[51px]" />
      <div className="absolute top-[101px] left-[884px] rounded-xl bg-black w-[158px] h-[51px]" />
      <div className="absolute w-[10.79%] top-[62.36%] left-[70.3%] leading-[31px] inline-block">
        Email Address
      </div>
      <div className="absolute w-[10.79%] top-[62.36%] left-[89.21%] leading-[31px] inline-block">
        Submit
      </div>
    </div>
  );
};

export default KryptoForm;

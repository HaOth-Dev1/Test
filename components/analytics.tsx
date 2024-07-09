import type { NextPage } from "next";

export type AnalyticsType = {
  className?: string;
};

const Analytics: NextPage<AnalyticsType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[1172px] left-[calc(50%_-_515px)] w-[1050px] h-[1178.7px] text-left text-xl text-gray font-in ${className}`}
    >
      <div className="absolute top-[0px] left-[calc(50%_+_47px)] leading-[27.5px] inline-block w-[373px] h-[32.3px]">
        ANALYTICS
      </div>
      <div className="absolute top-[669px] left-[calc(50%_-_463px)] leading-[27.5px] inline-block w-[373px] h-[32.3px]">
        ANALYTICS
      </div>
      <img
        className="absolute top-[440px] left-[calc(50%_+_33px)] rounded-6xl w-[149px] h-[57px]"
        alt=""
        src="/rectangle-201.svg"
      />
      <img
        className="absolute top-[1109px] left-[calc(50%_-_477px)] rounded-6xl w-[149px] h-[57px]"
        alt=""
        src="/rectangle-201.svg"
      />
      <div className="absolute top-[57px] left-[calc(50%_+_33px)] text-30xl leading-[50.5px] font-h1 inline-block w-[492px] h-[452.7px]">
        Use our built-in analytics dashboard to pull valuable insights and
        monitor the value of your Krypto portfolio over time.
      </div>
      <div className="absolute top-[726px] left-[calc(50%_-_477px)] text-30xl leading-[50.5px] font-h1 inline-block w-[492px] h-[452.7px]">
        Use our built-in analytics dashboard to pull valuable insights and
        monitor the value of your Krypto portfolio over time.
      </div>
      <div className="absolute top-[455px] left-[calc(50%_+_38px)] leading-[27.5px]">
        view our pricing
      </div>
      <div className="absolute top-[1124px] left-[calc(50%_-_472px)] leading-[27.5px]">
        view our pricing
      </div>
      <img
        className="absolute top-[62px] left-[calc(50%_-_525px)] w-[430px] h-[378px] object-cover"
        alt=""
        src="/objectother-19@2x.png"
      />
    </div>
  );
};

export default Analytics;

import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type CardType = {
  className?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
};

const Card: NextPage<CardType> = ({ className = "", propLeft }) => {
  const cardStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={`absolute top-[2494px] left-[55px] w-[370px] h-[427px] text-left text-6xl text-white font-in ${className}`}
      style={cardStyle}
    >
      <div className="absolute top-[86px] left-[0px] bg-darkslateblue w-[370px] h-[341px]" />
      <img
        className="absolute top-[0px] left-[110px] w-[150px] h-[150px] object-cover"
        alt=""
        src="/mask-group@2x.png"
      />
      <b className="absolute top-[39.34%] left-[34.59%] leading-[27.5px]">
        olivia cole
      </b>
      <div className="absolute h-[9.84%] w-[79.19%] top-[55.27%] left-[10.27%] text-4xl text-center inline-block">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. `}</div>
    </div>
  );
};

export default Card;

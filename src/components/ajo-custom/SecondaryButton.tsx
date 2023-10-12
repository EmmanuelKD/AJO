import React from "react";
import SB_M from "./SB_M";
import SB_S from "./SB_S";
import SB_L from "./SB_L";

const SecondaryButton = () => {
  return (
    <div>
      <div className="w-44 h-64 px-5 py-6 rounded border border-purple-500 flex-col justify-start items-start gap-6 inline-flex">
        <SB_L />
        <Varient_4 />
        <SB_M />
        <SB_S />
      </div>
    </div>
  );
};

export default SecondaryButton;

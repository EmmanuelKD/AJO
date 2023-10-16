import React from "react";
import Pb_l from "./pb_l";
import Pb_l2 from "./pb_l2";
import Varient_5 from "./Varient_5";
import Varient_6 from "./Varient_6";
import Pb_m from "./pb_m";
import Pb_s from "./pb_s";

const PrimaryButton = () => {
  return (
    <div>
      <div className="w-44 h-96 px-5 py-6 rounded border border-purple-500 flex-col justify-start items-start gap-6 inline-flex">
        <Pb_l />
        <Pb_l2 />
        <Varient_6 />
        <Pb_m />
        <Varient_5 />
        <Pb_s />
      </div>
    </div>
  );
};

export default PrimaryButton;

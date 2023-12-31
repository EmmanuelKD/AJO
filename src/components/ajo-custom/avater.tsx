import React from "react";
import LAvater from "./l-avater";
import HeaderAvater from "./header-avater";
import SAvater from "./SAvater";
import XsAvater from "./XsAvater";
import Disconnect from "./disconnect";

const Avater = () => {
  return (
    <div>
      <div className="w-44 px-3.5 py-4 rounded border border-purple-500 flex-col justify-start items-center gap-5 inline-flex">
        <XsAvater />
        <SAvater />
        <HeaderAvater />
        <Disconnect />
        <LAvater />
      </div>
    </div>
  );
};

export default Avater;

import React from "react";
import TB_L from "./TB_L";
import TB_M from "./TB_M";
import TB_S from "./TB_S";

const TertiaryButton = () => {
  return (
    <div>
      <div className="w-32 h-48 px-5 py-6 rounded border border-purple-500 flex-col justify-start items-start gap-6 inline-flex">
        <TB_L />
        <TB_M />
        <TB_S />
      </div>
    </div>
  );
};

export default TertiaryButton;

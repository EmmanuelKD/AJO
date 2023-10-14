import React from "react";
import SAvater from "./SAvater";

const UserPostHeader = () => {
  return (
    <div>
      <div className="w-full h-10 px-2.5 justify-start items-center gap-2 inline-flex">
        <SAvater />
        <div className="flex-col justify-start items-start inline-flex">
          <div className="text-zinc-900 text-base font-semibold font-['League Spartan'] leading-normal whitespace-nowrap">
            Marcus Aurelius
          </div>
          <div className="text-zinc-900 text-xs font-normal font-['Montserrat'] leading-none">
            @marka.sol
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPostHeader;

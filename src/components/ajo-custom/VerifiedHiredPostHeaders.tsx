import React from "react";
import SAvater from "./SAvater";
import HiredByBrand from "./hired-by-brand";
import Verified_Icon from "./Verified_Icon";

const VerifiedHiredPostHeaders = () => {
  return (
    <div>
      <div className="w-56 h-10 px-2.5 justify-between items-center inline-flex">
        <div className="grow shrink basis-0 self-stretch justify-start items-center gap-2 flex">
          <SAvater />
          <div className="flex-col justify-start items-start inline-flex">
            <div className="justify-start items-start gap-1.5 inline-flex">
              <div className="text-zinc-900 text-base font-semibold font-['League Spartan'] leading-normal whitespace-nowrap">
                Marcus Aurelius
              </div>
              <div className="w-4 h-4 relative">
                <Verified_Icon />
              </div>
              <div className="w-4 h-4 p-px flex-col justify-start items-start inline-flex">
                <HiredByBrand />
              </div>
            </div>
            <div className="text-zinc-900 text-xs font-normal font-['Montserrat'] leading-none">
              @marka.sol
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifiedHiredPostHeaders;

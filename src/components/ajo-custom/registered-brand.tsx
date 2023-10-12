import React from "react";

const RegisterBrand = () => {
  return (
    <div>
      <div className="w-56 h-10 px-2.5 justify-start items-center gap-2 inline-flex">
        <SAvater />
        <div className="flex-col justify-start items-start inline-flex">
          <div className="justify-start items-start gap-1.5 inline-flex">
            <div className="text-zinc-900 text-base font-semibold font-['League Spartan'] leading-normal whitespace-nowrap">
              Christex Foundation
            </div>
            <div className="w-4 h-4 relative">
              <VerifiedBrandIcon />
            </div>
          </div>
          <div className="text-zinc-900 text-xs font-normal font-['Montserrat'] leading-none">
            @christexfndn.sol
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterBrand;

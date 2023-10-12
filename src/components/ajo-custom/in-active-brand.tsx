import React from "react";
import Image from "next/image";

const InActiveBrand = () => {
  return (
    <div>
      <a href="">
        <div className="py-2.5 justify-center items-center gap-2.5 inline-flex">
          <div className="w-6 h-6 relative">
          </div>
          <div className="text-zinc-900 text-xl font-normal font-['League Spartan'] leading-normal flex-row">
            {/* <Image
              src="/asset/img/brand-logo-profile.png"
              alt="Landscape picture"
              width={10}
              height={10}
            /> */}
            Brand 1
          </div>
        </div>
      </a>
    </div>
  );
};

export default InActiveBrand;

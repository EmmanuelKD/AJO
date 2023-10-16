import React from "react";

const Tabs = () => {
  return (
    <div>
      <div className="w-full h-14 px-8 border-b border-zinc-200 justify-center items-center gap-36 inline-flex">
        <div className="py-3.5 border-b-2 border-zinc-900 justify-center items-center gap-2.5 flex">
          <div className="text-center text-zinc-900 text-base font-medium font-['League Spartan'] leading-none">
            Overview
          </div>
        </div>
        <div className="py-3.5 border-b-2 border-pink-700 border-opacity-10 justify-center items-center gap-2.5 flex">
          <div className="text-center text-gray-500 text-base font-normal font-['League Spartan'] leading-normal">
            Analytics
          </div>
        </div>
        <div className="py-3.5 border-b-2 border-pink-700 border-opacity-10 justify-center items-center gap-2.5 flex">
          <div className="text-center text-gray-500 text-base font-normal font-['League Spartan'] leading-normal">
            Team
          </div>
        </div>
        <div className="py-3.5 border-b-2 border-pink-700 border-opacity-10 justify-center items-center gap-2.5 flex">
          <div className="text-center text-gray-500 text-base font-normal font-['League Spartan'] leading-normal">
            Engagement
          </div>
        </div>
        <div className="py-3.5 border-b-2 border-pink-700 border-opacity-10 justify-center items-center gap-2.5 flex">
          <div className="text-center text-gray-500 text-base font-normal font-['League Spartan'] leading-normal">
            Store
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;

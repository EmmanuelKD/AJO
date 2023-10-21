import React from "react";

const ComposeBox = () => {
  return (//max-w-[772px] 
    <div className="mt-5  w-full h-28 p-2 rounded-lg border border-zinc-900 border-opacity-50 flex-col justify-start items-start inline-flex m-auto">
      <div className="self-stretch grow shrink basis-0 justify-start items-start gap-2.5 inline-flex">
        <div className="text-zinc-900 text-opacity-30 text-base font-normal font-['League Spartan'] leading-normal">
          What’s on your mind?
        </div>
      </div>
      <div className="self-stretch px-1 justify-between items-center inline-flex">
        <div className="justify-start items-center gap-3 flex">
          <div className="w-4 h-4 relative"></div>
          <div className="w-4 h-4 relative"></div>
        </div>
        <div className="px-4 py-1.5 bg-pink-700 rounded-md justify-center items-center flex">
          <div className="text-white text-sm font-bold font-['League Spartan'] leading-none">
            Post
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComposeBox;

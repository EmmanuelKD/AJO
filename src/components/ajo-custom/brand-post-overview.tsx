import React from 'react'

const BrandPostOverview = () => {
  return (
    <div className="w-full h-52 px-5 py-2.5 bg-pink-700 bg-opacity-5 rounded-lg shadow justify-start items-center inline-flex">
      <div className="self-stretch pr-14 flex-col justify-center items-center inline-flex">
        <div className="text-zinc-900 text-xl font-semibold font-['League Spartan'] leading-normal">Posts Overview</div>
        <div className="text-stone-700 text-xs font-medium font-['League Spartan'] leading-snug whitespace-nowrap">Track post performance at a glance</div>
      </div>
      <div className="grow shrink basis-0 h-48 p-2.5 justify-center items-center gap-7 flex">
        <div className="px-3.5 py-2.5 flex-col justify-start items-center gap-2.5 inline-flex">
          <div className="text-black text-base font-medium font-['League Spartan'] leading-none">Engagement Metrics</div>
          <div className="self-stretch h-28 py-2.5 flex-col justify-center items-start gap-2.5 flex">
            <div className="h-11 justify-start items-center gap-5 inline-flex">
              <div className="w-20 self-stretch px-3 py-2 rounded-lg border border-pink-700 flex-col justify-center items-center inline-flex">
                <div className="text-pink-700 text-xs font-semibold font-['League Spartan'] leading-3">0</div>
                <div className="text-black text-xs font-light font-['League Spartan'] leading-none">Likes</div>
              </div>
              <div className="self-stretch px-3 py-2 rounded-lg border border-pink-700 flex-col justify-center items-center inline-flex">
                <div className="text-pink-700 text-xs font-semibold font-['League Spartan'] leading-3">0</div>
                <div className="text-black text-xs font-light font-['League Spartan'] leading-none">Comments</div>
              </div>
            </div>
            <div className="h-11 justify-start items-center gap-5 inline-flex">
              <div className="w-20 self-stretch px-3 py-2 rounded-lg border border-pink-700 flex-col justify-center items-center inline-flex">
                <div className="text-pink-700 text-xs font-semibold font-['League Spartan'] leading-3">0</div>
                <div className="text-black text-xs font-light font-['League Spartan'] leading-none">Shares</div>
              </div>
              <div className="w-20 self-stretch px-3 py-2 rounded-lg border border-pink-700 flex-col justify-center items-center inline-flex">
                <div className="text-pink-700 text-xs font-semibold font-['League Spartan'] leading-3">0</div>
                <div className="text-black text-xs font-light font-['League Spartan'] leading-none">Views</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch py-2.5 flex-col justify-start items-center gap-2.5 inline-flex">
          <div className="flex-col justify-start items-start gap-2.5 flex">
            <div className="text-black text-base font-medium font-['League Spartan'] leading-none">Top Performing Post</div>
          </div>
          <div className="w-80 grow shrink basis-0 py-2.5 flex-col justify-start items-center gap-2.5 flex">
            <div className="self-stretch h-16 justify-center items-center gap-2 inline-flex">
              <div className="text-pink-300 text-xs font-medium font-['Montserrat'] leading-none">No posts yet...</div>
            </div>
            <div className="self-stretch h-6 justify-center items-center gap-2.5 inline-flex">
              <div className="px-3 py-1.5 bg-pink-700 rounded-md justify-center items-center flex">
                <div className="text-white text-xs font-semibold font-['League Spartan'] leading-3">View Analytics</div>
              </div>
              <div className="px-3 py-1.5 bg-amber-800 rounded-md justify-center items-center flex">
                <div className="text-white text-xs font-semibold font-['League Spartan'] leading-3">Create Post</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandPostOverview
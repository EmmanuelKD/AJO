import React from 'react'
import BrandActivityFeed from '../brand-activity-feed'
import BrandPostOverview from '../brand-post-overview'

const BrandProfile = () => {

  // S.O.S
  return (
    <div className="w-full px-12 py-3 flex-col justify-start items-center gap-4 inline-flex relative">
      <div className="self-stretch flex-col justify-start items-center gap-4 flex">
        <div className="self-stretch h-60 pt-2.5 pb-16 flex-col justify-start items-center gap-2.5 flex">
          <div className="self-stretch h-40 pt-7 pb-8 bg-pink-700 bg-opacity-10 rounded-lg flex-col justify-center items-center gap-3 flex">
            <div className="w-16 h-16 relative" />
            <div className="text-pink-700 text-opacity-30 text-sm font-medium font-['League Spartan'] leading-snug">Add a banner image</div>
          </div>
          <div className="left-[74px] top-[110.75px] absolute justify-center items-center gap-2.5 inline-flex">
            <img className="w-28 h-28 rounded-full border-4 border-pink-700 border-opacity-10" src="https://via.placeholder.com/110x110" />
          </div>
        </div>
        <div className="h-44 px-5 pb-2.5 flex-col justify-start items-start gap-2 flex">
          <div className="h-28 flex-col justify-start items-start gap-2 flex">
            <div className="text-black text-base font-semibold font-['League Spartan'] leading-normal">TeeCee’s Clothing</div>
            <div className="self-stretch text-black text-xs font-normal font-['Montserrat'] leading-none">Discover timeless className at TeeCee's Clothing – where fashion meets comfort. Your go-to destination for chic tees and more!</div>
            <div className="justify-start items-start gap-6 inline-flex">
              <div className="justify-start items-center gap-1 flex">
                <div className="text-black text-sm font-medium font-['League Spartan'] leading-snug">619k</div>
                <div className="text-black text-sm font-normal font-['Montserrat'] leading-tight">Followers</div>
              </div>
              <div className="justify-start items-center gap-1 flex">
                <div className="text-black text-sm font-medium font-['League Spartan'] leading-snug">420</div>
                <div className="text-black text-sm font-normal font-['Montserrat'] leading-tight">Following</div>
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="grow shrink basis-0 h-14 px-8 border-b border-zinc-200 justify-between items-center flex">
              <div className="py-3.5 border-b-2 border-zinc-900 justify-center items-center gap-2.5 flex">
                <div className="text-center text-zinc-900 text-base font-medium font-['League Spartan'] leading-none">Overview</div>
              </div>
              <div className="py-3.5 border-b-2 border-pink-700 border-opacity-10 justify-center items-center gap-2.5 flex">
                <div className="text-center text-gray-500 text-base font-normal font-['League Spartan'] leading-normal">Analytics</div>
              </div>
              <div className="py-3.5 border-b-2 border-pink-700 border-opacity-10 justify-center items-center gap-2.5 flex">
                <div className="text-center text-gray-500 text-base font-normal font-['League Spartan'] leading-normal">Team</div>
              </div>
              <div className="py-3.5 border-b-2 border-pink-700 border-opacity-10 justify-center items-center gap-2.5 flex">
                <div className="text-center text-gray-500 text-base font-normal font-['League Spartan'] leading-normal">Engagement</div>
              </div>
              <div className="py-3.5 border-b-2 border-pink-700 border-opacity-10 justify-center items-center gap-2.5 flex">
                <div className="text-center text-gray-500 text-base font-normal font-['League Spartan'] leading-normal">Store</div>
              </div>
            </div>
          </div>
        </div>
        {/* brand post overview */}
        <BrandPostOverview/>

        {/* brand activity feed */}
        <div className="w-full p-2.5 bg-pink-700 bg-opacity-5 rounded-lg shadow flex-col justify-start items-center inline-flex">
          <div className="self-stretch justify-center items-center gap-3 inline-flex">
            <div className="self-stretch px-3.5 flex-col justify-center items-center inline-flex">
              <div className="text-zinc-900 text-xl font-semibold font-['League Spartan'] leading-normal">Activity Feed</div>
              <div className="text-stone-700 text-xs font-medium font-['League Spartan'] leading-snug">Real-Time Updates on Brand Interactions</div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-center gap-1.5 inline-flex">
              <div className="self-stretch h-8 px-24 py-0.5 flex-col justify-center items-center gap-2.5 flex">
                <div className="self-stretch px-0.5 py-1.5 justify-between items-center inline-flex">
                  <div className="px-1 pt-px rounded-lg shadow border border-rose-950 justify-center items-center gap-2.5 flex">
                    <div className="text-black text-xs font-light font-['League Spartan'] leading-none">All Activity</div>
                  </div>
                  <div className="px-1.5 pt-px rounded-lg shadow border border-black border-opacity-30 justify-center items-center gap-2.5 flex">
                    <div className="text-black text-xs font-light font-['League Spartan'] leading-none">Rewards</div>
                  </div>
                  <div className="px-1.5 pt-px rounded-lg shadow border border-black border-opacity-30 justify-center items-center gap-2.5 flex">
                    <div className="text-black text-xs font-light font-['League Spartan'] leading-none">Events</div>
                  </div>
                  <div className="px-1.5 pt-px bg-pink-700 bg-opacity-5 rounded-lg shadow justify-start items-center gap-0.5 flex">
                    <div className="w-2.5 h-2.5 relative" />
                    <div className="text-black text-xs font-light font-['League Spartan'] leading-none">Filters</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch py-2.5 justify-center items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 px-6 flex-col justify-start items-start gap-6 inline-flex">
                  <BrandActivityFeed />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandProfile
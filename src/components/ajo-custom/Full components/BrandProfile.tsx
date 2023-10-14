import React from 'react'

const BrandProfile = () => {
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
                  <div className="self-stretch h-80 flex-col justify-start items-start gap-6 flex">
                    <div className="w-full relative">
                      <div className="h-6 pr-40 py-0.5 left-[40px] top-0 absolute flex-col justify-start items-start inline-flex">
                        <div><span className="text-gray-900 text-xs font-medium font-['League Spartan'] leading-tight">Chelsea Hagon</span><span className="text-gray-500 text-xs font-normal font-['League Spartan'] leading-tight"> received </span><span className="text-gray-500 text-xs font-medium font-['League Spartan'] leading-tight">100 $AJO</span><span className="text-gray-500 text-xs font-normal font-['League Spartan'] leading-tight"> for a purchase.</span></div>
                      </div>
                      <div className="py-0.5 left-[425.02px] top-0 absolute flex-col justify-start items-start inline-flex">
                        <div className="text-gray-500 text-xs font-normal font-['League Spartan'] leading-tight">7d ago</div>
                      </div>
                      <div className="w-6 h-10 px-3 left-[-0px] top-[15.62px] absolute justify-center items-start inline-flex">
                        <div className="w-px self-stretch bg-gray-400" />
                      </div>
                      <div className="w-6 h-6 p-2 left-0 top-0 absolute justify-center items-center inline-flex">
                        <div className="w-1.5 h-1.5 relative bg-orange-500 rounded-full shadow" />
                      </div>
                    </div>
                    <div className="w-full relative">
                      <div className="h-6 pr-44 py-0.5 left-[40px] top-0 absolute flex-col justify-start items-start inline-flex">
                        <div><span className="text-gray-900 text-xs font-medium font-['League Spartan'] leading-tight">Chelsea Hagon</span><span className="text-gray-500 text-xs font-normal font-['League Spartan'] leading-tight"> registered for the </span><span className="text-gray-500 text-xs font-medium font-['League Spartan'] leading-tight">TeeCee’s Launch Party</span><span className="text-gray-500 text-xs font-normal font-['League Spartan'] leading-tight"> event.</span></div>
                      </div>
                      <div className="py-0.5 left-[424.36px] top-0 absolute flex-col justify-start items-start inline-flex">
                        <div className="text-gray-500 text-xs font-normal font-['League Spartan'] leading-tight">6d ago</div>
                      </div>
                      <div className="w-6 h-10 px-3 left-[-0px] top-[15.62px] absolute justify-center items-start inline-flex">
                        <div className="w-px self-stretch bg-gray-400" />
                      </div>
                      <div className="w-6 h-6 p-2 left-0 top-0 absolute justify-center items-center inline-flex">
                        <div className="w-1.5 h-1.5 relative bg-pink-700 rounded-full shadow" />
                      </div>
                    </div>
                    <div className="w-96 h-6 relative">
                      <div className="h-6 pr-48 py-0.5 left-[40px] top-0 absolute flex-col justify-start items-start inline-flex">
                        <div><span className="text-gray-900 text-xs font-medium font-['League Spartan'] leading-tight">Michael Scott</span><span className="text-gray-500 text-xs font-normal font-['League Spartan'] leading-tight"> received a 10% discount</span></div>
                      </div>
                      <div className="py-0.5 left-[424.36px] top-0 absolute flex-col justify-start items-start inline-flex">
                        <div className="text-gray-500 text-xs font-normal font-['League Spartan'] leading-tight">6d ago</div>
                      </div>
                      <div className="w-6 h-11 px-3 left-0 top-[15.62px] absolute justify-center items-start inline-flex">
                        <div className="w-px self-stretch bg-gray-400" />
                      </div>
                      <div className="w-6 h-6 p-2 left-0 top-0 absolute justify-center items-center inline-flex">
                        <div className="w-1.5 h-1.5 relative bg-orange-500 rounded-full shadow" />
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-4 inline-flex">
                      <div className="w-6 h-16 px-3 left-0 top-[38.62px] absolute justify-center items-start flex">
                        <div className="w-px self-stretch bg-gray-400" />
                      </div>
                      <div className="w-6 self-stretch pt-3 flex-col justify-start items-start inline-flex">
                        <img className="w-6 h-6 relative rounded-full" src="https://via.placeholder.com/24x24" />
                      </div>
                      <div className="grow shrink basis-0 self-stretch p-3 bg-white bg-opacity-0 rounded-lg shadow-inner flex-col justify-start items-start inline-flex">
                        <div className="self-stretch pr-px justify-between items-start inline-flex">
                          <div className="self-stretch pr-px py-0.5 flex-col justify-start items-start inline-flex">
                            <div><span className="text-gray-900 text-xs font-medium font-['League Spartan'] leading-tight">Chelsea Hagon</span><span className="text-gray-500 text-xs font-normal font-['League Spartan'] leading-tight"> commented</span></div>
                          </div>
                          <div className="self-stretch py-0.5 flex-col justify-start items-start inline-flex">
                            <div className="text-gray-500 text-xs font-normal font-['League Spartan'] leading-tight">3d ago</div>
                          </div>
                        </div>
                        <div className="self-stretch h-6 pr-3.5 flex-col justify-start items-start flex">
                          <div className="text-gray-500 text-sm font-normal font-['League Spartan'] leading-normal">So exicted for the Launch Party! 🥳</div>
                        </div>
                      </div>
                    </div>
                    <div className="w-96 h-6 relative">
                      <div className="h-6 pr-48 py-0.5 left-[40px] top-0 absolute flex-col justify-start items-start inline-flex">
                        <div><span className="text-gray-900 text-xs font-medium font-['League Spartan'] leading-tight">Alex Curren</span><span className="text-gray-500 text-xs font-normal font-['League Spartan'] leading-tight"> earned </span><span className="text-gray-500 text-xs font-medium font-['League Spartan'] leading-tight">20 $AJO</span><span className="text-gray-500 text-xs font-normal font-['League Spartan'] leading-tight"> for sharing a post.</span></div>
                      </div>
                      <div className="py-0.5 left-[423.98px] top-0 absolute flex-col justify-start items-start inline-flex">
                        <div className="text-gray-500 text-xs font-normal font-['League Spartan'] leading-tight">2d ago</div>
                      </div>
                      <div className="w-6 h-8 px-3 left-[0.50px] top-[15.62px] absolute justify-center items-start inline-flex">
                        <div className="w-px self-stretch bg-gray-400" />
                      </div>
                      <div className="w-6 h-6 p-2 left-0 top-0 absolute justify-center items-center inline-flex">
                        <div className="w-1.5 h-1.5 relative bg-orange-500 rounded-full shadow" />
                      </div>
                    </div>
                    <div className="w-96 h-6 relative">
                      <div className="h-6 pr-52 py-0.5 left-[40px] top-0 absolute flex-col justify-start items-start inline-flex">
                        <div><span className="text-gray-900 text-xs font-medium font-['League Spartan'] leading-tight">Alex Curren</span><span className="text-gray-500 text-xs font-normal font-['League Spartan'] leading-tight"> registered for the Lunch party event</span></div>
                      </div>
                      <div className="py-0.5 left-[425.67px] top-0 absolute flex-col justify-start items-start inline-flex">
                        <div className="text-gray-500 text-xs font-normal font-['League Spartan'] leading-tight">1d ago</div>
                      </div>
                      <div className="w-6 h-6 px-3 left-0 top-0 absolute justify-center items-start inline-flex">
                        <div className="w-px h-4 bg-gray-400" />
                      </div>
                      <div className="w-6 h-6 left-0 top-0 absolute justify-center items-center inline-flex">
                        <div className="w-6 h-6 p-2 justify-center items-center flex">
                          <div className="w-1.5 h-1.5 relative bg-pink-700 rounded-full shadow" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch px-5 py-2.5 bg-pink-700 bg-opacity-5 rounded-lg shadow justify-start items-center inline-flex">
          <div className="self-stretch pr-14 flex-col justify-center items-center inline-flex">
            <div className="text-zinc-900 text-xl font-semibold font-['League Spartan'] leading-normal">Posts Overview</div>
            <div className="text-stone-700 text-xs font-medium font-['League Spartan'] leading-snug">Track post performance at a glance</div>
          </div>
          <div className="pl-7 pr-1.5 py-2.5 justify-center items-center gap-7 flex">
            <div className="px-3.5 py-2.5 flex-col justify-start items-center gap-2.5 inline-flex">
              <div className="text-black text-base font-medium font-['League Spartan'] leading-none">Engagement Metrics</div>
              <div className="self-stretch h-28 py-2.5 flex-col justify-center items-start gap-2.5 flex">
                <div className="h-11 justify-start items-center gap-5 inline-flex">
                  <div className="w-20 self-stretch px-3 py-2 rounded-lg border border-pink-700 flex-col justify-center items-center inline-flex">
                    <div className="text-pink-700 text-xs font-semibold font-['League Spartan'] leading-3">4.1K</div>
                    <div className="text-black text-xs font-light font-['League Spartan'] leading-none">Likes</div>
                  </div>
                  <div className="self-stretch px-3 py-2 rounded-lg border border-pink-700 flex-col justify-center items-center inline-flex">
                    <div className="text-pink-700 text-xs font-semibold font-['League Spartan'] leading-3">25K</div>
                    <div className="text-black text-xs font-light font-['League Spartan'] leading-none">Comments</div>
                  </div>
                </div>
                <div className="h-11 justify-start items-center gap-5 inline-flex">
                  <div className="w-20 self-stretch px-3 py-2 rounded-lg border border-pink-700 flex-col justify-center items-center inline-flex">
                    <div className="text-pink-700 text-xs font-semibold font-['League Spartan'] leading-3">6.9K</div>
                    <div className="text-black text-xs font-light font-['League Spartan'] leading-none">Shares</div>
                  </div>
                  <div className="w-20 self-stretch px-3 py-2 rounded-lg border border-pink-700 flex-col justify-center items-center inline-flex">
                    <div className="text-pink-700 text-xs font-semibold font-['League Spartan'] leading-3">210K</div>
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
                  <img className="w-28 h-14 rounded-lg" src="https://via.placeholder.com/107x60" />
                  <div className="w-56 self-stretch justify-center items-center gap-1.5 flex">
                    <div className="w-36 self-stretch justify-start items-start gap-2.5 flex">
                      <div className="w-36 text-black text-xs font-light font-['League Spartan'] leading-none">New beginnings, new classNames. Welcome to TeeCee's Clothing, where fashion becomes a statement! 💫 #TeeCeesDebut</div>
                    </div>
                    <div className="flex-col justify-center items-start gap-2.5 inline-flex">
                      <div className="p-0.5 justify-start items-center gap-1 inline-flex">
                        <div className="text-black text-xs font-semibold font-['League Spartan'] leading-3">23.4k</div>
                      </div>
                      <div className="px-0.5 py-px justify-start items-center gap-2.5 inline-flex">
                        <div className="text-black text-xs font-semibold font-['League Spartan'] leading-3">21,2</div>
                      </div>
                      <div className="p-px justify-start items-center gap-2.5 inline-flex">
                        <div className="text-black text-xs font-semibold font-['League Spartan'] leading-3">8223</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-6 justify-between items-center inline-flex">
                  <div className="px-3 py-1.5 bg-pink-700 rounded-md justify-center items-center flex">
                    <div className="text-white text-xs font-semibold font-['League Spartan'] leading-3">View Post</div>
                  </div>
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
      </div>
    </div>
  )
}

export default BrandProfile
import React from 'react'

function BrandActivityFeed_Item() {
    return (
        <div className="w-full relative">
            <div className="h-6 pr-40 py-0.5 left-[40px] top-0 absolute flex-col justify-start items-start inline-flex">
                <div><span className="text-gray-900 text-xs font-medium font-['League Spartan'] leading-tight">Chelsea Hagon</span><span className="text-gray-500 text-xs font-normal font-['League Spartan'] leading-tight"> received </span><span className="text-gray-500 text-xs font-medium font-['League Spartan'] leading-tight">100 $AJO</span><span className="text-gray-500 text-xs font-normal font-['League Spartan'] leading-tight"> for a purchase.</span></div>
            </div>
            <div className="py-0.5 left-[425.02px] top-0 absolute flex-col justify-start items-start inline-flex">
                <div className="text-gray-500 text-xs font-normal font-['League Spartan'] leading-tight whitespace-nowrap ">7d ago</div>
            </div>
            <div className="w-6 h-10 px-3 left-[-0px] top-[15.62px] absolute justify-center items-start inline-flex">
                <div className="w-px self-stretch bg-gray-400" />
            </div>
            <div className="w-6 h-6 p-2 left-0 top-0 absolute justify-center items-center inline-flex">
                <div className="w-1.5 h-1.5 relative bg-orange-500 rounded-full shadow" />
            </div>
        </div>
    )
}

export default BrandActivityFeed_Item
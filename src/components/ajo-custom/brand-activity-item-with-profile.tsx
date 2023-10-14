import React from 'react'
import SAvater from './SAvater'

const BrandActivityFeed_Item_with_Profile = () => {
    return (
        <div className="self-stretch justify-start items-start gap-4 inline-flex">
            <div className="w-6 h-16 px-3 left-0 top-[38.62px] absolute justify-center items-start flex">
                <div className="w-px self-stretch bg-gray-400" />
            </div>
            <div className="self-stretch pt-3 flex-col justify-start items-start inline-flex">
                <SAvater />
            </div>
            <div className=" w-full p-3 bg-white bg-opacity-0 rounded-lg shadow-inner flex-col justify-start items-start inline-flex">
                <div className="self-stretch pr-px justify-between items-start inline-flex">
                    <div className="self-stretch flex-col justify-start items-start inline-flex">
                        <div><span className="text-gray-900 text-xs font-medium font-['League Spartan'] leading-tight">Chelsea Hagon</span><span className="text-gray-500 text-xs font-normal font-['League Spartan'] leading-tight"> commented</span></div>
                    </div>
                    <div className="self-stretch flex-col justify-start items-start inline-flex">
                        <div className="text-gray-500 text-xs font-normal font-['League Spartan'] leading-tight">3d ago</div>
                    </div>
                </div>
                <div className="self-stretch h-6 pr-3.5 flex-col justify-start items-start flex">
                    <div className="text-gray-500 text-sm font-normal font-['League Spartan'] leading-normal">So exicted for the Launch Party! 🥳</div>
                </div>
            </div>
        </div>
    )
}

export default BrandActivityFeed_Item_with_Profile
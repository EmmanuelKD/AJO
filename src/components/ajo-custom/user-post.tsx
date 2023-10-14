import React from 'react'
import CoverTemplate from './cover-template'
import UserPostHeader from './UserPostHeader'
import TagBrand from './TagBrand'
import PostReaction from './post-reaction'

function UserPost() {
    return (
        <div
            className="w-fit h-full px-6 py-2 bg-pink-700 bg-opacity-5 rounded-lg shadow flex-col justify-start items-start gap-2 inline-flex"
        >
            <div className="w-full h-10 px-2.5 justify-between items-center inline-flex">
                <div className="justify-start items-center gap-2 flex">
                    <UserPostHeader/>
                </div>
                <div className="w-10 h-10 p-1 flex-col justify-start items-center gap-2.5 inline-flex">
                    <TagBrand />
                </div>
            </div>
            <div className="self-stretch text-black text-base font-normal font-['League Spartan'] leading-normal">
                Who’s as pumped for #Breakpoint as I am!
            </div>
            <div className="w-full flex-col justify-start items-start inline-flex">
                <div className="self-stretch origin-top-left border"><CoverTemplate/></div>
                <div>
                    <span className="text-black text-xs font-light font-['League Spartan'] leading-none"
                    >with
                    </span><span className="text-black text-xs font-medium font-['League Spartan'] leading-none"
                    >TeeCee’s Clothing</span>
                    <span className="text-black text-xs font-light font-['League Spartan'] leading-none">
                        and
                    </span><span className="text-black text-xs font-medium font-['League Spartan'] leading-none"
                    >7 others</span>
                </div>
            </div>
            <PostReaction/>
        </div>

    )
}

export default UserPost
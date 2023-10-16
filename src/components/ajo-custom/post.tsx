import Home from '@/app/page'
import React from 'react'
import HomeTabs from './home-tabs'
import Content from './content'
import PostTextArea from './post-textArea'
import UserPost from './user-post'
import SAvater from './SAvater'
import PostReaction from './post-reaction'
import Rating from './rating'
import PostTag_A_Product from './post-tag-product'

function Post() {
    return (

        // S.O.S
        <div className="w-full flex-col justify-start items-center gap-4 flex">
            <div className='w-full'>
                <HomeTabs />
            </div>

            <div className="self-stretch px-12 flex-col justify-start items-center gap-4 flex relative">
                {/* content goes below here */}
                <Content />
                <PostTextArea />
                <UserPost />
                <div className="w-full px-6 py-2 bg-pink-700 bg-opacity-5 rounded-lg shadow flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch justify-start items-center gap-2 inline-flex">
                        <div className="w-10 h-10 relative">
                            {/* <img className="w-10 h-10 left-0 top-0 absolute rounded-full" src="https://via.placeholder.com/40x40" /> */}
                            <SAvater />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <div className="text-zinc-900 text-base font-semibold font-['League Spartan'] leading-normal">ZΞNO.sol</div>
                            <div className="text-zinc-900 text-xs font-normal font-['Montserrat'] leading-none">@zeno_prime</div>
                        </div>
                    </div>
                    <div className="self-stretch text-black text-base font-normal font-['League Spartan'] leading-normal">In the spirit of Rick Astley, I vow to never give you up or ever let you down.</div>
                    <PostTag_A_Product />
                    <PostReaction />
                </div>

            </div>
        </div>

    )
}

export default Post
import React from 'react'
import BrandActivityFeed_Item from './brand-activity-feed-item'
import BrandActivityFeed_Item_with_Profile from './brand-activity-item-with-profile'

const BrandActivityFeed = () => {
    return (
        <div className="self-stretch py-3 flex-col justify-center items-center gap-6 flex">
            <BrandActivityFeed_Item/>
            <BrandActivityFeed_Item/>
            <BrandActivityFeed_Item/>
            <BrandActivityFeed_Item_with_Profile/>
            <BrandActivityFeed_Item/>
            <BrandActivityFeed_Item/>
            <BrandActivityFeed_Item/>

            
        </div>
    )
}

export default BrandActivityFeed
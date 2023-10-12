import React from 'react'
import ActiveBrand from './active-brand'

const MenuSection_2 = () => {
  return (
    <div>

<div className="w-44 h-52 flex-col justify-start items-start gap-1 inline-flex">
    <div className="pl-2 justify-start items-start inline-flex">
      <div className="text-pink-700 text-sm font-bold font-['League Spartan'] leading-none">BRANDS</div>
    </div>
    <ActiveBrand/>
    <InActiveBrand/>
    <InActiveBrand/>
    <!-- <InActiveBrand/> -->
    <AddBrand/>

    
  </div>
    </div>
  )
}

export default MenuSection_2



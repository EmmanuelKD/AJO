import React from 'react'

function MarketplaceProduct() {
    return (
        <div className="w-52 self-stretch bg-pink-700 bg-opacity-5 rounded-lg flex-col justify-center items-start gap-1 inline-flex">
            <div className="self-stretch pl-1 pt-1 justify-start items-start gap-2.5 inline-flex">
                <div className="text-black text-xl font-medium font-['League Spartan'] leading-normal">Header 3</div>
            </div>
            <img className="self-stretch h-52" src="/asset/img/ProductHeader3.png" />
            <div className="self-stretch grow shrink basis-0 px-1 justify-start items-start gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-black text-base font-normal font-['League Spartan'] leading-normal">Lorem Ipsum is simply dummy text of the printing</div>
            </div>
        </div>
    )
}

export default MarketplaceProduct
import React from 'react'
import HomeTabs from './home-tabs'
import Content from './content'
import MarketplaceProduct from './marketplace-product'

function Marketplace() {
    return (
        <div className="w-full py-2 flex-col justify-start items-center gap-4 inline-flex">
            <div className='w-full'><HomeTabs /></div>
            <div className="w-full px-12 flex-col justify-start items-center gap-4 flex">
                <Content />
                <div className="w-full py-2.5 justify-between items-center inline-flex">
                    <MarketplaceProduct />
                    <MarketplaceProduct />
                    <MarketplaceProduct />
                    <MarketplaceProduct />
                </div>
                <div className="w-full py-2.5 justify-between items-center inline-flex">
                    <div className="w-96 self-stretch pt-0.5 bg-pink-700 bg-opacity-5 rounded-lg flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch px-1 pt-1 justify-start items-start gap-2.5 inline-flex">
                            <div className="text-black text-xl font-medium font-['League Spartan'] leading-normal">Header 1</div>
                        </div>
                        <img className="self-stretch h-52" src="https://via.placeholder.com/437x212" />
                        <div className="self-stretch grow shrink basis-0 px-1 py-1.5 justify-start items-start gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-black text-base font-normal font-['League Spartan'] leading-normal">Lorem Ipsum is simply dummy text of the printing</div>
                        </div>
                    </div>
                    <MarketplaceProduct />
                    <MarketplaceProduct />
                </div>
                <div className="w-full py-2.5 justify-between items-center inline-flex">
                    <MarketplaceProduct />
                    <MarketplaceProduct />
                    <MarketplaceProduct />
                    <MarketplaceProduct />
                </div>
            </div>
        </div>
    )
}

export default Marketplace
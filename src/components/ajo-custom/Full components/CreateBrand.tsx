import React from 'react'

const CreateBrand = () => {
    return (
        <div className="w-96 h-96 px-12 pt-3 flex-col justify-start items-center gap-4 inline-flex">
            <div className="flex-col justify-start items-start gap-6 flex">
                <div className="text-black text-5xl font-bold font-['League Spartan'] leading-10 whitespace-nowrap">Create your brand</div>
                <div className="w-96 h-36 flex-col justify-start items-start gap-px inline-flex">
                    <div className="text-black text-base font-semibold font-['League Spartan'] leading-normal">Brand Photo</div>
                    <div className="justify-start items-start gap-2.5 inline-flex">
                        <div className="p-2.5 flex-col justify-start items-start gap-2.5 inline-flex relative">
                            <div className="w-24 h-24 bg-pink-700 bg-opacity-10 rounded-full  flex justify-center items-center">
                                <div className="w-10 h-10 left-[40px] top-[39.75px] absolute" ><svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                                    <path d="M9.58334 5.75C7.05833 5.75 5 7.80833 5 10.3333V31.1667C5 33.6917 7.05833 35.75 9.58334 35.75H20.0423C19.5507 34.975 19.1505 34.1417 18.8672 33.25H9.58334C9.5 33.25 9.41602 33.2421 9.33268 33.2337H9.32943L19.3913 23.4909C19.683 23.2159 20.1745 23.1827 20.5078 23.416C21.0078 22.7494 21.5914 22.1331 22.2331 21.5915C20.9664 20.4748 18.8829 20.5091 17.6579 21.6924L7.52442 31.4955V31.4922C7.50775 31.3839 7.5 31.275 7.5 31.1667V10.3333C7.5 9.18334 8.43334 8.25 9.58334 8.25H30.4167C31.5667 8.25 32.5 9.18334 32.5 10.3333V19.6172C33.3917 19.9005 34.225 20.3007 35 20.7923V10.3333C35 7.80833 32.9417 5.75 30.4167 5.75H9.58334ZM25.4167 11.5833C24.2708 11.5833 23.2532 12.058 22.6074 12.7845C21.9617 13.511 21.6667 14.4306 21.6667 15.3333C21.6667 16.2361 21.9617 17.1557 22.6074 17.8822C23.2532 18.6086 24.2708 19.0833 25.4167 19.0833C26.5625 19.0833 27.5802 18.6086 28.2259 17.8822C28.8717 17.1557 29.1667 16.2361 29.1667 15.3333C29.1667 14.4306 28.8717 13.511 28.2259 12.7845C27.5802 12.058 26.5625 11.5833 25.4167 11.5833ZM25.4167 14.0833C25.9375 14.0833 26.1699 14.2336 26.3574 14.4447C26.545 14.6557 26.6667 14.9861 26.6667 15.3333C26.6667 15.6806 26.545 16.011 26.3574 16.222C26.1699 16.433 25.9375 16.5833 25.4167 16.5833C24.8958 16.5833 24.6635 16.433 24.4759 16.222C24.2883 16.011 24.1667 15.6806 24.1667 15.3333C24.1667 14.9861 24.2883 14.6557 24.4759 14.4447C24.6635 14.2336 24.8958 14.0833 25.4167 14.0833ZM29.1667 20.75C24.1042 20.75 20 24.8542 20 29.9167C20 34.9792 24.1042 39.0834 29.1667 39.0834C34.2292 39.0834 38.3334 34.9792 38.3334 29.9167C38.3334 24.8542 34.2292 20.75 29.1667 20.75ZM29.1667 23.25C29.6267 23.25 30 23.6233 30 24.0833V29.0833H35C35.46 29.0833 35.8334 29.4567 35.8334 29.9167C35.8334 30.3767 35.46 30.75 35 30.75H30V35.75C30 36.21 29.6267 36.5834 29.1667 36.5834C28.7067 36.5834 28.3333 36.21 28.3333 35.75V30.75H23.3333C22.8733 30.75 22.5 30.3767 22.5 29.9167C22.5 29.4567 22.8733 29.0833 23.3333 29.0833H28.3333V24.0833C28.3333 23.6233 28.7067 23.25 29.1667 23.25Z" fill="#F8FAFA" />
                                    <path d="M9.58334 5.75C7.05833 5.75 5 7.80833 5 10.3333V31.1667C5 33.6917 7.05833 35.75 9.58334 35.75H20.0423C19.5507 34.975 19.1505 34.1417 18.8672 33.25H9.58334C9.5 33.25 9.41602 33.2421 9.33268 33.2337H9.32943L19.3913 23.4909C19.683 23.2159 20.1745 23.1827 20.5078 23.416C21.0078 22.7494 21.5914 22.1331 22.2331 21.5915C20.9664 20.4748 18.8829 20.5091 17.6579 21.6924L7.52442 31.4955V31.4922C7.50775 31.3839 7.5 31.275 7.5 31.1667V10.3333C7.5 9.18334 8.43334 8.25 9.58334 8.25H30.4167C31.5667 8.25 32.5 9.18334 32.5 10.3333V19.6172C33.3917 19.9005 34.225 20.3007 35 20.7923V10.3333C35 7.80833 32.9417 5.75 30.4167 5.75H9.58334ZM25.4167 11.5833C24.2708 11.5833 23.2532 12.058 22.6074 12.7845C21.9617 13.511 21.6667 14.4306 21.6667 15.3333C21.6667 16.2361 21.9617 17.1557 22.6074 17.8822C23.2532 18.6086 24.2708 19.0833 25.4167 19.0833C26.5625 19.0833 27.5802 18.6086 28.2259 17.8822C28.8717 17.1557 29.1667 16.2361 29.1667 15.3333C29.1667 14.4306 28.8717 13.511 28.2259 12.7845C27.5802 12.058 26.5625 11.5833 25.4167 11.5833ZM25.4167 14.0833C25.9375 14.0833 26.1699 14.2336 26.3574 14.4447C26.545 14.6557 26.6667 14.9861 26.6667 15.3333C26.6667 15.6806 26.545 16.011 26.3574 16.222C26.1699 16.433 25.9375 16.5833 25.4167 16.5833C24.8958 16.5833 24.6635 16.433 24.4759 16.222C24.2883 16.011 24.1667 15.6806 24.1667 15.3333C24.1667 14.9861 24.2883 14.6557 24.4759 14.4447C24.6635 14.2336 24.8958 14.0833 25.4167 14.0833ZM29.1667 20.75C24.1042 20.75 20 24.8542 20 29.9167C20 34.9792 24.1042 39.0834 29.1667 39.0834C34.2292 39.0834 38.3334 34.9792 38.3334 29.9167C38.3334 24.8542 34.2292 20.75 29.1667 20.75ZM29.1667 23.25C29.6267 23.25 30 23.6233 30 24.0833V29.0833H35C35.46 29.0833 35.8334 29.4567 35.8334 29.9167C35.8334 30.3767 35.46 30.75 35 30.75H30V35.75C30 36.21 29.6267 36.5834 29.1667 36.5834C28.7067 36.5834 28.3333 36.21 28.3333 35.75V30.75H23.3333C22.8733 30.75 22.5 30.3767 22.5 29.9167C22.5 29.4567 22.8733 29.0833 23.3333 29.0833H28.3333V24.0833C28.3333 23.6233 28.7067 23.25 29.1667 23.25Z" fill="#B21575" fill-opacity="0.28" />
                                </svg></div></div>
                        </div>
                    </div>
                </div>
                <div className="w-64 h-20 justify-start items-start gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 h-20 flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="w-64 justify-start items-start gap-2.5 inline-flex">
                            <div className="text-gray-900 text-base font-semibold font-['League Spartan'] leading-normal">Brand Name</div>
                        </div>
                        <div className="self-stretch grow shrink basis-0 pl-5 pr-4 py-3 bg-pink-700 bg-opacity-5 rounded-lg border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 h-6 justify-start items-center gap-28 flex">
                                <div className="text-gray-400 text-base font-normal font-['League Spartan'] leading-normal">Enter your brand name here</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-56 flex-col justify-start items-start gap-2.5 flex">
                    <div className="text-gray-900 text-base font-semibold font-['League Spartan'] leading-normal">Brand Description</div>
                    <div className="self-stretch h-40 flex-col justify-start items-start flex">
                        <div className="self-stretch grow shrink basis-0 p-5 bg-pink-700 bg-opacity-5 rounded-lg border border-zinc-200 justify-start items-start gap-2.5 inline-flex">
                            <div className="text-gray-400 text-base font-normal font-['League Spartan'] leading-normal">Write something that accurately describes your brand.</div>
                        </div>
                    </div>
                    <div className="self-stretch justify-end items-end gap-1 inline-flex">
                        <div className="text-right text-gray-500 text-xs font-normal font-['Montserrat'] leading-none">0/250</div>
                    </div>
                </div>
                <div className="h-20 flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-64 justify-start items-start gap-2.5 inline-flex">
                        <div className="text-gray-900 text-base font-semibold font-['League Spartan'] leading-normal">Brand Category</div>
                    </div>
                    <div className="self-stretch h-11 px-5 py-3 bg-pink-700 bg-opacity-5 rounded-lg border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                        <div className="grow shrink basis-0 h-6 justify-between items-center flex">
                            <div className="text-gray-400 text-base font-normal font-['League Spartan'] leading-normal">Select a category</div>
                            <div className="w-4 h-4 relative" />
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-20 flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-64 justify-start items-start gap-2.5 inline-flex">
                        <div className="text-gray-900 text-base font-semibold font-['League Spartan'] leading-normal">What’s your niche?</div>
                    </div>
                    <div className="w-80 h-11 px-5 py-3 bg-pink-700 bg-opacity-5 rounded-lg border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                        <div className="h-6 justify-between items-center flex">
                            <div className="text-gray-400 text-base font-normal font-['League Spartan'] leading-normal">Select a sub-category</div>
                            <div className="w-4 h-4 relative" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch p-2.5 justify-end items-end gap-2.5 inline-flex">
                <div className="px-5 py-2 bg-pink-700 rounded-lg justify-center items-center flex">
                    <div className="text-white text-base font-bold font-['League Spartan'] leading-tight">Submit</div>
                </div>
            </div>
        </div>
    )
}

export default CreateBrand
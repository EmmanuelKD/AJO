import React from 'react'

const Addproduct = () => {
    return (

        // s.o.s
        <div className="flex flex-col gap-3">
            <div className="w-full h-full gap-6 inline-flex">
                <div className="w-full grow shrink basis-0 self-stretch flex-col justify-start items-start gap-6 inline-flex">
                    <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                        <div className="text-black text-4xl font-bold font-['League Spartan'] leading-10">Add product</div>
                    </div>
                    <div className="w-full self-stretch flex-col justify-start items-start gap-1 flex">
                        <div className="self-stretch grow shrink basis-0 rounded-lg flex-col justify-start items-start gap-1 flex">
                            <div className="w-64 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-gray-900 text-base font-semibold font-['League Spartan'] leading-normal">Product Title</div>
                            </div>
                            <input className="w-full text-gray-400 text-xs font-normal font-['Montserrat'] leading-none pl-5 pr-4 py-3 bg-pink-700 bg-opacity-5 rounded-lg border border-zinc-200 justify-start items-center gap-2.5 inline-flex" type="text" placeholder='Enter your product title here' />
                        </div>
                    </div>
                    <div className="self-stretch h-44 flex-col justify-start items-start gap-1 flex">
                        <div className="text-gray-900 text-base font-semibold font-['League Spartan'] leading-normal">Product Description</div>
                        <textarea className="w-full p-5 bg-pink-700 bg-opacity-5 rounded-lg border border-zinc-200 grow shrink basis-0 text-gray-400 text-base font-normal font-['League Spartan'] leading-normal" placeholder='Write something that accurately describes your brand.' name="" id=""></textarea>
                    </div>
                    <div className="self-stretch h-40 px-0.5 py-2.5 flex-col justify-start items-start gap-3 flex">
                        <div className="text-black text-base font-semibold font-['League Spartan'] leading-normal">Variant</div>
                        <div className="self-stretch h-28 flex-col justify-start items-start flex">
                            <div className="self-stretch h-28 py-1 flex-col justify-start items-start gap-1 flex">
                                <div className="self-stretch py-0.5 justify-center items-center inline-flex">
                                    <div className="grow shrink basis-0 h-12 justify-between items-center flex">
                                        <div className="grow shrink basis-0 self-stretch p-2.5 bg-pink-700 bg-opacity-5 rounded-lg justify-between items-center flex">
                                            <div className="text-black text-base font-normal font-['League Spartan'] leading-normal">Product variants</div>
                                            <button>
                                                <div className="h-6 justify-start items-center gap-0.5 flex">

                                                    <div className="w-3.5 h-3.5 relative"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                        <path d="M6.99321 1.45208C6.87728 1.45389 6.7668 1.50164 6.68605 1.58485C6.6053 1.66806 6.56088 1.77991 6.56255 1.89585V6.56251H1.89588C1.83791 6.56169 1.78035 6.5724 1.72655 6.59402C1.67275 6.61564 1.62378 6.64774 1.5825 6.68844C1.54121 6.72915 1.50843 6.77766 1.48605 6.83114C1.46367 6.88463 1.45215 6.94203 1.45215 7.00001C1.45215 7.05799 1.46367 7.11539 1.48605 7.16888C1.50843 7.22237 1.54121 7.27087 1.5825 7.31158C1.62378 7.35229 1.67275 7.38438 1.72655 7.406C1.78035 7.42762 1.83791 7.43833 1.89588 7.43751H6.56255V12.1042C6.56173 12.1622 6.57244 12.2197 6.59406 12.2735C6.61567 12.3273 6.64777 12.3763 6.68848 12.4176C6.72918 12.4588 6.77769 12.4916 6.83118 12.514C6.88466 12.5364 6.94207 12.5479 7.00005 12.5479C7.05803 12.5479 7.11543 12.5364 7.16892 12.514C7.2224 12.4916 7.27091 12.4588 7.31162 12.4176C7.35232 12.3763 7.38442 12.3273 7.40604 12.2735C7.42766 12.2197 7.43837 12.1622 7.43755 12.1042V7.43751H12.1042C12.1622 7.43833 12.2197 7.42762 12.2735 7.406C12.3273 7.38438 12.3763 7.35229 12.4176 7.31158C12.4589 7.27087 12.4917 7.22237 12.514 7.16888C12.5364 7.11539 12.5479 7.05799 12.5479 7.00001C12.5479 6.94203 12.5364 6.88463 12.514 6.83114C12.4917 6.77766 12.4589 6.72915 12.4176 6.68844C12.3763 6.64774 12.3273 6.61564 12.2735 6.59402C12.2197 6.5724 12.1622 6.56169 12.1042 6.56251H7.43755V1.89585C7.43839 1.83729 7.42746 1.77916 7.40542 1.7249C7.38338 1.67065 7.35068 1.62137 7.30924 1.57998C7.2678 1.5386 7.21848 1.50595 7.16419 1.48398C7.10991 1.46201 7.05177 1.45116 6.99321 1.45208Z" fill="#B21575" />
                                                    </svg></div>
                                                    <div className="text-pink-700 text-base font-normal font-['League Spartan'] leading-normal">Add Variant</div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-3 self-stretch py-0.5 justify-between items-center gap-1.5 inline-flex">
                                    <div className=" w-36 self-stretch pr-5 justify-start items-center gap-2.5 flex">
                                        <input className="w-3 h-3 bg-white rounded border border-zinc-200" type="checkbox" />
                                        <div className="text-gray-900 text-xs font-semibold font-['League Spartan'] leading-3 whitespace-nowrap">Do you have Sizes?</div>
                                    </div>

                                    <div className="w-full grow shrink basis-0 justify-between items-center flex">
                                        <select className="w-full px-2 py-3 bg-white rounded-md border border-zinc-200 text-gray-500 text-xs font-semibold font-['League Spartan'] leading-3" name="" id="">
                                            <option selected value="">Unit</option>
                                        </select>
                                    </div>

                                    <button>
                                        <div className=" px-3 py-2 bg-pink-700 rounded-md shadow justify-center items-center inline-flex">
                                            <div className="text-white text-xs font-semibold font-['League Spartan'] leading-3 whitespace-nowrap">Customise sizes</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-20 flex-col justify-start items-start gap-2.5 flex">
                        <div className="w-64 justify-start items-start gap-2.5 inline-flex">
                            <div className="text-gray-900 text-base font-semibold font-['League Spartan'] leading-normal">Brand</div>
                        </div>
                        <div className="w-full grow shrink basis-0 justify-between items-center flex">
                            <select className="w-full px-2 py-3 bg-white rounded-md border border-zinc-200 text-gray-500 text-xs font-semibold font-['League Spartan'] leading-3" name="" id="">
                                <option selected value="">Select category</option>
                            </select>
                        </div>
                    </div>
                    <div className="self-stretch h-24 flex-col justify-start items-start gap-2.5 flex">
                        <div className="self-stretch h-20 flex-col justify-start items-start gap-1 flex">
                            <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-1 flex">
                                <div className="w-64 justify-start items-start gap-2.5 inline-flex">
                                    <div className="text-gray-900 text-base font-semibold font-['League Spartan'] leading-normal">Pricing</div>
                                </div>
                                <input className="w-full text-gray-400 text-xs font-normal font-['Montserrat'] leading-none pl-5 pr-4 py-3 bg-pink-700 bg-opacity-5 rounded-lg border border-zinc-200 justify-start items-center gap-2.5 inline-flex" type="text" placeholder='SLL' />

                            </div>
                        </div>
                        <div className="justify-start items-center gap-2.5 inline-flex">
                            <input className="w-3 h-3 bg-white rounded border border-zinc-200" type="checkbox" />
                            <div className="text-gray-900 text-xs font-semibold font-['League Spartan'] leading-3">per variant?</div>
                        </div>
                    </div>
                </div>
                <div className="grow shrink basis-0 pt-16 flex-col justify-start items-start gap-6 inline-flex">
                    <div className="self-stretch h-40 flex-col justify-start items-start flex">
                        <div className="justify-start items-start gap-2.5 inline-flex">
                            <div className="text-black text-base font-semibold font-['League Spartan'] leading-normal">Images</div>
                        </div>
                        <label htmlFor="coverImage">
                            <div className="w-28 h-28 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex relative">
                                <div className="w-28 h-28 bg-pink-700 bg-opacity-10 rounded-lg border-2 border-pink-300">
                                    <div className="w-10 h-10 left-[40px] top-[19.75px] absolute"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                                        <path d="M9.58334 5.75C7.05833 5.75 5 7.80833 5 10.3333V31.1667C5 33.6917 7.05833 35.75 9.58334 35.75H20.0423C19.5507 34.975 19.1505 34.1417 18.8672 33.25H9.58334C9.5 33.25 9.41602 33.2421 9.33268 33.2337H9.32943L19.3913 23.4909C19.683 23.2159 20.1745 23.1827 20.5078 23.416C21.0078 22.7494 21.5914 22.1331 22.2331 21.5915C20.9664 20.4748 18.8829 20.5091 17.6579 21.6924L7.52442 31.4955V31.4922C7.50775 31.3839 7.5 31.275 7.5 31.1667V10.3333C7.5 9.18334 8.43334 8.25 9.58334 8.25H30.4167C31.5667 8.25 32.5 9.18334 32.5 10.3333V19.6172C33.3917 19.9005 34.225 20.3007 35 20.7923V10.3333C35 7.80833 32.9417 5.75 30.4167 5.75H9.58334ZM25.4167 11.5833C24.2708 11.5833 23.2532 12.058 22.6074 12.7845C21.9617 13.511 21.6667 14.4306 21.6667 15.3333C21.6667 16.2361 21.9617 17.1557 22.6074 17.8822C23.2532 18.6086 24.2708 19.0833 25.4167 19.0833C26.5625 19.0833 27.5802 18.6086 28.2259 17.8822C28.8717 17.1557 29.1667 16.2361 29.1667 15.3333C29.1667 14.4306 28.8717 13.511 28.2259 12.7845C27.5802 12.058 26.5625 11.5833 25.4167 11.5833ZM25.4167 14.0833C25.9375 14.0833 26.1699 14.2336 26.3574 14.4447C26.545 14.6557 26.6667 14.9861 26.6667 15.3333C26.6667 15.6806 26.545 16.011 26.3574 16.222C26.1699 16.433 25.9375 16.5833 25.4167 16.5833C24.8958 16.5833 24.6635 16.433 24.4759 16.222C24.2883 16.011 24.1667 15.6806 24.1667 15.3333C24.1667 14.9861 24.2883 14.6557 24.4759 14.4447C24.6635 14.2336 24.8958 14.0833 25.4167 14.0833ZM29.1667 20.75C24.1042 20.75 20 24.8542 20 29.9167C20 34.9792 24.1042 39.0834 29.1667 39.0834C34.2292 39.0834 38.3334 34.9792 38.3334 29.9167C38.3334 24.8542 34.2292 20.75 29.1667 20.75ZM29.1667 23.25C29.6267 23.25 30 23.6233 30 24.0833V29.0833H35C35.46 29.0833 35.8334 29.4567 35.8334 29.9167C35.8334 30.3767 35.46 30.75 35 30.75H30V35.75C30 36.21 29.6267 36.5834 29.1667 36.5834C28.7067 36.5834 28.3333 36.21 28.3333 35.75V30.75H23.3333C22.8733 30.75 22.5 30.3767 22.5 29.9167C22.5 29.4567 22.8733 29.0833 23.3333 29.0833H28.3333V24.0833C28.3333 23.6233 28.7067 23.25 29.1667 23.25Z" fill="#F8FAFA" />
                                        <path d="M9.58334 5.75C7.05833 5.75 5 7.80833 5 10.3333V31.1667C5 33.6917 7.05833 35.75 9.58334 35.75H20.0423C19.5507 34.975 19.1505 34.1417 18.8672 33.25H9.58334C9.5 33.25 9.41602 33.2421 9.33268 33.2337H9.32943L19.3913 23.4909C19.683 23.2159 20.1745 23.1827 20.5078 23.416C21.0078 22.7494 21.5914 22.1331 22.2331 21.5915C20.9664 20.4748 18.8829 20.5091 17.6579 21.6924L7.52442 31.4955V31.4922C7.50775 31.3839 7.5 31.275 7.5 31.1667V10.3333C7.5 9.18334 8.43334 8.25 9.58334 8.25H30.4167C31.5667 8.25 32.5 9.18334 32.5 10.3333V19.6172C33.3917 19.9005 34.225 20.3007 35 20.7923V10.3333C35 7.80833 32.9417 5.75 30.4167 5.75H9.58334ZM25.4167 11.5833C24.2708 11.5833 23.2532 12.058 22.6074 12.7845C21.9617 13.511 21.6667 14.4306 21.6667 15.3333C21.6667 16.2361 21.9617 17.1557 22.6074 17.8822C23.2532 18.6086 24.2708 19.0833 25.4167 19.0833C26.5625 19.0833 27.5802 18.6086 28.2259 17.8822C28.8717 17.1557 29.1667 16.2361 29.1667 15.3333C29.1667 14.4306 28.8717 13.511 28.2259 12.7845C27.5802 12.058 26.5625 11.5833 25.4167 11.5833ZM25.4167 14.0833C25.9375 14.0833 26.1699 14.2336 26.3574 14.4447C26.545 14.6557 26.6667 14.9861 26.6667 15.3333C26.6667 15.6806 26.545 16.011 26.3574 16.222C26.1699 16.433 25.9375 16.5833 25.4167 16.5833C24.8958 16.5833 24.6635 16.433 24.4759 16.222C24.2883 16.011 24.1667 15.6806 24.1667 15.3333C24.1667 14.9861 24.2883 14.6557 24.4759 14.4447C24.6635 14.2336 24.8958 14.0833 25.4167 14.0833ZM29.1667 20.75C24.1042 20.75 20 24.8542 20 29.9167C20 34.9792 24.1042 39.0834 29.1667 39.0834C34.2292 39.0834 38.3334 34.9792 38.3334 29.9167C38.3334 24.8542 34.2292 20.75 29.1667 20.75ZM29.1667 23.25C29.6267 23.25 30 23.6233 30 24.0833V29.0833H35C35.46 29.0833 35.8334 29.4567 35.8334 29.9167C35.8334 30.3767 35.46 30.75 35 30.75H30V35.75C30 36.21 29.6267 36.5834 29.1667 36.5834C28.7067 36.5834 28.3333 36.21 28.3333 35.75V30.75H23.3333C22.8733 30.75 22.5 30.3767 22.5 29.9167C22.5 29.4567 22.8733 29.0833 23.3333 29.0833H28.3333V24.0833C28.3333 23.6233 28.7067 23.25 29.1667 23.25Z" fill="#B21575" fill-opacity="0.28" />
                                    </svg></div>
                                </div>
                                <div className="top-[63.81px] absolute text-center text-pink-300 text-xs font-light font-['League Spartan'] leading-none">Click to upload or drag and drop</div>
                            </div>
                        </label>
                        <input hidden type="file" id="coverImage" />
                        <div className="justify-start items-center gap-2.5 inline-flex">
                            <input id='CoverImageCheckBox' className="w-3 h-3 bg-white rounded border border-zinc-200" type="checkbox" />
                            <label htmlFor="CoverImageCheckBox">
                                <div className="text-gray-900 text-xs font-semibold font-['League Spartan'] leading-3">Cover Image</div>
                            </label>
                        </div>
                    </div>
                    <div className="self-stretch h-20 flex-col justify-start items-start gap-1 flex">
                        <div className="w-full self-stretch grow shrink basis-0 flex-col justify-start items-start gap-1 flex">
                            <div className="w-64 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-gray-900 text-base font-semibold font-['League Spartan'] leading-normal">Inventory</div>
                            </div>
                            <div className='w-full'>
                                <input className="w-full text-gray-400 text-xs font-normal font-['Montserrat'] leading-none pl-5 pr-4 py-3 bg-pink-700 bg-opacity-5 rounded-lg border border-zinc-200 justify-start items-center gap-2.5 inline-flex" type="text" placeholder='Quantity' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="w-24 h-9 px-5 py-2 bg-pink-700 rounded-lg justify-center items-center inline-flex">
                    <button>
                        <div className="text-white text-base font-bold font-['League Spartan'] leading-tight">Submit</div>
                    </button>
                </div>
            </div>

        </div>

    )
}

export default Addproduct
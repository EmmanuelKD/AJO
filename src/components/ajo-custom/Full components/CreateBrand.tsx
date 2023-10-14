"use client";

import React from "react";

const CreateBrand = () => {
  return (
    <div className="w-full pt-3 flex-col justify-start gap-4 inline-flex">
      <div className="w-full flex-col justify-start items-start gap-6 flex">
        <div className="text-black text-5xl font-bold font-['League Spartan'] leading-10 whitespace-nowrap">
          Create your brand
        </div>
        <div className="w-full flex-col justify-start items-start gap-px inline-flex">
          <div className="text-black text-base font-semibold font-['League Spartan'] leading-normal">
            Brand Photo
          </div>
          <label htmlFor="BrandPhoto">
            <div className="justify-start items-start gap-2.5 inline-flex">
              <div className="p-2.5 flex-col justify-start items-start gap-2.5 inline-flex relative">
                <div className="w-24 h-24 bg-pink-700 bg-opacity-10 rounded-full  flex justify-center items-center">
                  {/* Place the SVG or image here */}
                </div>
              </div>
            </div>
          </label>
          <input type="file" id="BrandPhoto" accept="image/*" required />
        </div>
        <div className="justify-start items-start gap-2.5 inline-flex">
          <div className="grow shrink basis-0 h-20 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="w-64 justify-start items-start gap-2.5 inline-flex">
              <div className="text-gray-900 text-base font-semibold font-['League Spartan'] leading-normal">
                Brand Name
              </div>
            </div>
            <input
              type="text"
              className="text-gray-400 text-base font-normal font-['League Spartan'] leading-normal bg-pink-700 bg-opacity-5 rounded-lg border border-zinc-200"
              placeholder="Enter brand name"
              required
            />
          </div>
        </div>
        <div className="w-full h-56 flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="text-gray-900 text-base font-semibold font-['League Spartan'] leading-normal">
            Brand Description
          </div>
          <textarea
            placeholder="Write something that accurately describes your brand"
            className="bg-pink-700 bg-opacity-5 rounded-lg border border-zinc-200 items-start gap-2.5  self-stretch h-40 flex-col justify-start w-full flex"
            required
          />
          <div className="self-stretch justify-end items-end gap-1 inline-flex">
            <div className="text-right text-gray-500 text-xs font-normal font-['Montserrat'] leading-none">
              0/250
            </div>
          </div>
        </div>
        <div className="h-20 flex-col justify-start items-start gap-2.5 flex">
          <div className="w-64 justify-start items-start gap-2.5 inline-flex">
            <div className="text-gray-900 text-base font-semibold font-['League Spartan'] leading-normal">
              Brand Category
            </div>
          </div>
          <select
            className="text-gray-400  text-base font-normal font-['League Spartan'] leading-normal self-stretch px-5 py-3 bg-pink-700 bg-opacity-5 rounded-lg border border-zinc-200 justify-start items-center gap-2.5 inline-flex"
            name="brandCategory"
            id="brandCategory"
            required
          >
            <option className="py-3 px-5 my-2" value="">
              Select a category
            </option>
          </select>
        </div>
        <div className="self-stretch h-20 flex-col justify-start items-start gap-2.5 flex">
          <div className="w-64 justify-start items-start gap-2.5 inline-flex">
            <div className="text-gray-900 text-base font-semibold font-['League Spartan'] leading-normal">
              What’s your niche?
            </div>
          </div>
          <select
            className="focus:border-0 w-full px-5 py-3 bg-pink-700 bg-opacity-5 rounded-lg border border-zinc-200 justify-start items-center gap-2.5 inline-flex text-gray-400 text-base font-normal font-['League Spartan'] leading-normal self-stretch px-5 py-3 bg-pink-700 bg-opacity-5 rounded-lg border border-zinc-200 justify-start items-center gap-2.5 inline-flex"
            name="brandNiche"
            id="brandNiche"
            required
          >
            <option className="py-3 px-5 my-2" value="">
              Select a Sub-category
            </option>
          </select>
        </div>
      </div>
      <div className="w-24 h-9 px-5 py-2 bg-pink-700 rounded-lg justify-center items-center inline-flex">
        <button type="submit">
          <div className="text-white text-base font-bold font-['League Spartan'] leading-tight">
            Submit
          </div>
        </button>
      </div>
    </div>
  );
};

export default CreateBrand;

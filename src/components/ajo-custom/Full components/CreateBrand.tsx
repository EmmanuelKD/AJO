"use client";

import { NotificationContext } from "@/context/notification/context";
import { UsersClass } from "@/firebase/collections/users";
import { FileStorage } from "@/firebase/storage";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import React, { Fragment, useContext, useState } from "react";
import { useDropzone } from "react-dropzone";

const CreateBrand = () => {
  const [isImgUploading, setImageUploading] = useState<boolean>(false); // Use an empty state value
  const [imgSrc, setImageSrc] = useState<string>(""); // Use an empty state value
  const { addNotification } = useContext(NotificationContext);

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    multiple: false,
    accept: {
      "image/*": [],
    },
    onDrop: async (acceptedFiles) => {
      let usersClass = new UsersClass();
      let storage = new FileStorage();

      const file = acceptedFiles[0];

      if (file) {
        setImageUploading(true);
        const reader = new FileReader();

        // Set up an event listener for when the file is loaded
        reader.onload = function (e) {
          setImageSrc(e.target?.result as any);
          setImageUploading(false);
        };

        // Read the file as a data URL
        reader.readAsDataURL(file);

        // if (user?.objectId) {
        //   let imageRef = await storage.addUsersProfileToStorage(
        //     file,
        //     user.objectId
        //   );
        //   user.photoRef = imageRef;
        //   formik.setFieldValue("imageUrl", imageRef);
        //   await usersClass.updateUsersData(user).then((added) => {
        //     if (added) {
        //       addNotification({
        //         message: "Profile Image added successfully",
        //         variant: "success",
        //       });
        //     } else {
        //       addNotification({
        //         message: "Error: unable to save image",
        //         variant: "error",
        //       });
        //     }
        //     setImageUploading(false);
        //   });
        // }
      }
    },
  });

  return (
    <div className="w-full pt-3 flex-col justify-start gap-4 inline-flex ">
      <div className=" mx-[48px] my-[12px] flex-col justify-start items-start gap-6 flex">
        <div className="text-black text-5xl font-bold font-['League Spartan'] leading-10 whitespace-nowrap">
          Create your brand
        </div>

        <div className="col-span-full flex items-center gap-x-8">
          {isImgUploading ? (
            <div role="status" className="h-24 w-24   animate-pulse  ">
              <div className=" flex items-center justify-center flex-none h-24 w-24  rounded-lg bg-gray-800 object-cover">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>

              <span className="sr-only">Loading...</span>
            </div>
          ) : imgSrc ? (
            <img
              src={imgSrc}
              alt=""
              className="h-24 w-24  flex-none bg-pink-700 bg-opacity-10 rounded-full  flex justify-center items-center  object-cover"
            />
          ) : (
            <div
              onClick={open}
              className=" cursor-pointer flex-none bg-pink-700 bg-opacity-10 rounded-full w-24 h-24  flex justify-center items-center   object-cover"
            >
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          )}
          {/* 
          <div>
            <button
              type="button"
              onClick={open}
              className="rounded-md bg-black/10 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black/20"
            >
              Change avatar
            </button>

            <p className="mt-2 text-xs leading-5 text-gray-400">
              JPG, GIF or PNG. 1MB max.
            </p>
          </div> */}
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
              className="text-gray-400 min-w-[250px] text-base font-normal font-['League Spartan'] leading-normal bg-pink-700 bg-opacity-5 rounded-lg border border-zinc-200"
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
          <SelectList list={BrandCatiegories} />
         
        </div>
        {/* <div className="self-stretch h-20 flex-col justify-start items-start gap-2.5 flex">
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
        </div> */}
      </div>
      <div className="w-24 h-9 px-5 py-2 bg-pink-700 rounded-lg justify-center items-center  inline-flex">
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

const BrandCatiegories = [
  { name: "Food and Beverage Brands" },
  { name: "Automotive Brands" },
  { name: "Technology Brands" },
  { name: "Fashion Brands" },
  { name: "Fast Food Brands" },
  { name: "Electronics Brands" },
  { name: "Cosmetic Brands" },
  { name: "Retail Brands" },
  { name: "Beverage Brands" },
  { name: "Luxury Brands" },
  { name: "Financial Services Brands" },
  { name: "Telecommunications Brands" },
  { name: "Airlines Brands" },
  { name: "Sportswear Brands" },
  { name: "Entertainment Brands" },
  { name: "Food and Beverage Brands" },
];

function SelectList({
  list,
}: {
  list: {
    name: string;
  }[];
}) {
  const [selected, setSelected] = useState(list[0]);

  return (
    <div className="">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="text-gray-400 min-w-[250px] text-base font-normal font-['League Spartan'] leading-normal self-stretch px-5 py-3 bg-pink-700 bg-opacity-5 rounded-lg border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {list.map((cat, cartIndx) => (
                <Listbox.Option
                  key={cartIndx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={cat}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {cat.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

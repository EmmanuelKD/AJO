import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const CreateBrand = () => {
  const formik = useFormik({
    initialValues: {
      brandPhoto: null,
      brandName: "",
      brandDescription: "",
      brandCategory: "",
      brandNiche: "",
    },
    validationSchema: Yup.object({
      brandPhoto: Yup.mixed().test(
        "fileRequired",
        "Brand photo is required",
        (value) => value !== null
      ),
      brandName: Yup.string().required("Brand name is required"),
      brandDescription: Yup.string().required("Brand description is required"),
      brandCategory: Yup.string().required("Brand category is required"),
      brandNiche: Yup.string().required("Niche is required"),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full pt-3 flex-col justify-start gap-4 inline-flex"
    >
      <div className="w-full flex-col justify-start items-start gap-6 flex">
        <div className="text-black text-5xl font-bold font-['League Spartan'] leading-10 whitespace-nowrap">
          Create your brand
        </div>
        <div className="w-full flex-col justify-start items-start gap-px inline-flex">
          <div className="text-black text-base font-semibold font-['League Spartan'] leading-normal">
            Brand Photo
          </div>
          <label htmlFor="brandPhoto">
            <div className="justify-start items-start gap-2.5 inline-flex">
              <div className="p-2.5 flex-col justify-start items-start gap-2.5 inline-flex relative">
                <div className="w-24 h-24 bg-pink-700 bg-opacity-10 rounded-full flex justify-center items-center">
                  {/* Place the SVG or image here */}
                </div>
              </div>
            </div>
          </label>
          <input
            type="file"
            id="brandPhoto"
            name="brandPhoto"
            accept="image/*"
            onChange={(event) =>
              formik.setFieldValue(
                "brandPhoto",
                event?.currentTarget?.files?.[0]
              )
            }
          />
          {formik.touched.brandPhoto && formik.errors.brandPhoto ? (
            <div className="text-red-500">{formik.errors.brandPhoto}</div>
          ) : null}
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
              name="brandName"
              className="text-gray-400 text-base font-normal font-['League Spartan'] leading-normal bg-pink-700 bg-opacity-5 rounded-lg border border-zinc-200"
              placeholder="Enter brand name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.brandName}
            />
            {formik.touched.brandName && formik.errors.brandName ? (
              <div className="text-red-500">{formik.errors.brandName}</div>
            ) : null}
          </div>
        </div>
        <div className="w-full h-56 flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="text-gray-900 text-base font-semibold font-['League Spartan'] leading-normal">
            Brand Description
          </div>
          <textarea
            name="brandDescription"
            placeholder="Write something that accurately describes your brand"
            className="bg-pink-700 bg-opacity-5 rounded-lg border border-zinc-200 items-start gap-2.5  self-stretch h-40 flex-col justify-start w-full flex"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.brandDescription}
          />
          {formik.touched.brandDescription && formik.errors.brandDescription ? (
            <div className="text-red-500">{formik.errors.brandDescription}</div>
          ) : null}
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
            name="brandCategory"
            className="text-gray-400  text-base font-normal font-['League Spartan'] leading-normal self-stretch px-5 py-3 bg-pink-700 bg-opacity-5 rounded-lg border border-zinc-200 justify-start items-center gap-2.5 inline-flex"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.brandCategory}
          >
            <option className="py-3 px-5 my-2" value="">
              Select a category
            </option>
          </select>
          {formik.touched.brandCategory && formik.errors.brandCategory ? (
            <div className="text-red-500">{formik.errors.brandCategory}</div>
          ) : null}
        </div>
        <div className="self-stretch h-20 flex-col justify-start items-start gap-2.5 flex">
          <div className="w-64 justify-start items-start gap-2.5 inline-flex">
            <div className="text-gray-900 text-base font-semibold font-['League Spartan'] leading-normal">
              What’s your niche?
            </div>
          </div>
          <select
            name="brandNiche"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.brandNiche}
            className="focus:border-0 w-full px-5 py-3 bg-pink-700 bg-opacity-5 rounded-lg border border-zinc-200 justify-start items-center gap-2.5 inline-flex text-gray-400  text-base font-normal font-['League Spartan'] leading-normal self-stretch px-5 py-3 bg-pink-700 bg-opacity-5 rounded-lg border border-zinc-200 justify-start items-center gap-2.5 inline-flex"
          >
            <option className="py-3 px-5 my-2" value="">
              Select a Sub-category
            </option>
          </select>
          {formik.touched.brandNiche && formik.errors.brandNiche ? (
            <div className="text-red-500">{formik.errors.brandNiche}</div>
          ) : null}
        </div>
      </div>
      <button
        className="self-stretch p-2.5 justify-end items-end gap-2.5 inline-flex"
        type="submit"
      >
        <div className="px-5 py-2 bg-pink-700 rounded-lg justify-center items-center flex">
          <div className="text-white text-base font-bold font-['League Spartan'] leading-tight">
            Submit
          </div>
        </div>
      </button>
    </form>
  );
};

export default CreateBrand;

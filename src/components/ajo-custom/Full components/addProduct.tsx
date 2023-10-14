"use client";

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddProduct = () => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Product title is required"),
    description: Yup.string().required("Product description is required"),
    brand: Yup.string().required("Brand is required"),
    pricing: Yup.number().required("Pricing is required"),
    quantity: Yup.number()
      .required("Quantity is required")
      .positive("Quantity must be positive")
      .integer("Quantity must be an integer"),
  });

  const initialValues = {
    title: "",
    description: "",
    brand: "",
    pricing: "",
    quantity: "",
  };

  const handleSubmit = (values: any) => {
    // Handle form submission here
    console.log(values);
  };

  return (
    <div className="flex flex-col gap-3">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className="w-full h-full gap-6 inline-flex">
              <div className="w-full grow shrink basis-0 self-stretch flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                  <div className="text-black text-4xl font-bold font-['League Spartan'] leading-10">
                    Add product
                  </div>
                </div>
                <div className="w-full self-stretch flex-col justify-start items-start gap-1 flex">
                  <div className="self-stretch grow shrink basis-0 rounded-lg flex-col justify-start items-start gap-1 flex">
                    <div className="w-64 justify-start items-start gap-2.5 inline-flex">
                      <div className="text-gray-900 text-base font-semibold font-['League Spartan'] leading-normal">
                        Product Title
                      </div>
                    </div>
                    <Field
                      type="text"
                      name="title"
                      className="w-full text-gray-400 text-xs font-normal font-['Montserrat'] leading-none pl-5 pr-4 py-3 bg-pink-700 bg-opacity-5 rounded-lg border border-zinc-200 justify-start items-center gap-2.5 inline-flex"
                      placeholder="Enter your product title here"
                    />
                    <ErrorMessage
                      name="title"
                      component="div"
                      className="text-red-600 text-xs"
                    />
                  </div>
                </div>
                <div className="self-stretch h-44 flex-col justify-start items-start gap-1 flex">
                  <div className="text-gray-900 text-base font-semibold font-['League Spartan'] leading-normal">
                    Product Description
                  </div>
                  <Field
                    as="textarea"
                    name="description"
                    className="w-full p-5 bg-pink-700 bg-opacity-5 rounded-lg border border-zinc-200 grow shrink basis-0 text-gray-400 text-base font-normal font-['League Spartan'] leading-normal"
                    placeholder="Write something that accurately describes your brand."
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-600 text-xs"
                  />
                </div>
                <div className="self-stretch h-20 flex-col justify-start items-start gap-2.5 flex">
                  <div className="w-64 justify-start items-start gap-2.5 inline-flex">
                    <div className="text-gray-900 text-base font-semibold font-['League Spartan'] leading-normal">
                      Brand
                    </div>
                  </div>
                  <Field
                    as="select"
                    name="brand"
                    className="w-full px-2 py-3 bg-white rounded-md border border-zinc-200 text-gray-500 text-xs font-semibold font-['League Spartan'] leading-3"
                  >
                    <option value="">Select category</option>
                  </Field>
                  <ErrorMessage
                    name="brand"
                    component="div"
                    className="text-red-600 text-xs"
                  />
                </div>
                <div className="self-stretch h-24 flex-col justify-start items-start gap-2.5 flex">
                  <div className="self-stretch h-20 flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-1 flex">
                      <div className="w-64 justify-start items-start gap-2.5 inline-flex">
                        <input
                          type="text"
                          name="pricing"
                          className="w-full text-gray-400 text-xs font-normal font-['Montserrat'] leading-none pl-5 pr-4 py-3 bg-pink-700 bg-opacity-5 rounded-lg border border-zinc-200 justify-start items-center gap-2.5 inline-flex rounded"
                        ></input>{" "}
                        <div className="text-gray-900 text-base font-semibold font-['League Spartan'] leading-normal">
                          Pricing
                        </div>
                      </div>
                      <Field
                        type="text"
                        name="pricing"
                        className="w-full text-gray-400 text-xs font-normal font-['Montserrat'] leading-none pl-5 pr-4 py-3 bg-pink-700 bg-opacity-5 rounded-lg border border-zinc-200 justify-start items-center gap-2.5 inline-flex"
                        placeholder="SLL"
                      />
                      <ErrorMessage
                        name="pricing"
                        component="div"
                        className="text-red-600 text-xs"
                      />
                    </div>
                  </div>
                  <div className="justify-start items-center gap-2.5 inline-flex">
                    <input
                      className="w-3 h-3 bg-white rounded border border-zinc-200"
                      type="radio"
                      name="currency"
                    ></input>{" "}
                    <div className="text-gray-900 text-xs font-semibold font-['League Spartan'] leading-4">
                      SLL
                    </div>
                    <input
                      className="w-3 h-3 bg-white rounded border border-zinc-200"
                      type="radio"
                      name="currency"
                    ></input>{" "}
                    <div className="text-gray-900 text-xs font-semibold font-['League Spartan'] leading-4">
                      USD
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-20 flex-col justify-start items-start gap-1 flex">
                  <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-1 flex">
                    <div className="w-64 justify-start items-start gap-2.5 inline-flex">
                      <div className="text-gray-900 text-base font-semibold font-['League Spartan'] leading-normal">
                        Quantity
                      </div>
                    </div>
                    <Field
                      type="number"
                      name="quantity"
                      className="w-full text-gray-400 text-xs font-normal font-['Montserrat'] leading-none pl-5 pr-4 py-3 bg-pink-700 bg-opacity-5 rounded-lg border border-zinc-200 justify-start items-center gap-2.5 inline-flex"
                      placeholder="Enter quantity"
                    />
                    <ErrorMessage
                      name="quantity"
                      component="div"
                      className="text-red-600 text-xs"
                    />
                  </div>
                </div>
                {/* ... Other form fields */}
                <div className="w-full flex justify-center items-center">
                  <div className="w-24 h-9 px-5 py-2 bg-pink-700 rounded-lg justify-center items-center inline-flex">
                    <button type="submit">
                      <div className="text-white text-base font-bold font-['League Spartan'] leading-tight">
                        Submit
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProduct;

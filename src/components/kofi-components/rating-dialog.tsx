import { Fragment, useContext, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import RatingStarComponent from "./rating-star";
import { AuthContext } from "@/context/auth/context";
import { UsersClass } from "@/firebase/collections/users";
import { NotificationContext } from "@/context/notification/context";
import * as Yup from "yup";
import { useFormik } from "formik";

export default function RatingDialog({ Products }: { Products: AppProduct[] }) {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);
  const { user } = useContext(AuthContext);
  const { addNotification } = useContext(NotificationContext);
  const userClass = new UsersClass();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative   z-[10001]"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Please rate these products
                    </Dialog.Title>
                    <div className="mt-2">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {Products.map((product) => (
                          <li key={product.id} className="flex py-6">
                            <ReviewSection productToReview={product}/>
                            {/* <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <textarea
                                id="description"
                                // name="description"
                                rows={3}
                                // {...formik.getFieldProps("description")}
                                className={
                                  "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm " +
                                  "ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 " +
                                  "focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                }
                              />

                              <div className="flex flex-1 items-end justify-between text-sm py-2">
                                <RatingStarComponent rate={0} />

                                <div className="flex">
                                  <button
                                    type="button"
                                    className="font-medium text-primary
                                            hover:text-primary-dark"
                                  >
                                    Review
                                  </button>
                                </div>
                              </div>
                            </div> */}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                    onClick={() => {
                      let productList = Products.map((p) => {
                        return {
                          isReviewed: true, // is reviewed, cancle reviewed,
                          dialogCancleCount: 5,
                          productId: p.id,
                          updated_at: new Date(),
                        } as any as ProductPurchases;
                      });
                      if (user?.objectId) {
                        userClass
                          .removeUsersProductForReview(
                            user?.objectId,
                            productList
                          )
                          .then(() => {
                            addNotification({
                              message: "Thanks Youuuuu!!!",
                              variant: "success",
                            });
                          });
                      }
                      setOpen(false);
                    }}
                  >
                    Do not ask again
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

const validationSchema = Yup.object({
  stars: Yup.string().required("Review is required"),
  review: Yup.string().required("Description is required"),
});

function ReviewSection({ productToReview }: { productToReview: AppProduct }) {
  const formik = useFormik({
    initialValues: {
      stars: 0,
      review: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      // Handle form submission here
      // let storage = new FileStorage();
      // let products = new Products();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={productToReview.imageSrc}
          alt={productToReview.imageAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <textarea
          id="review"
          // name="description"
          rows={3}
          // {...formik.getFieldProps("description")}
          className={
            "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm " +
            "ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 " +
            "focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" +
            (formik.errors["review"] && formik.touched["review"]
              ? "border-red-500" // You can add a specific class for error state
              : "")
          }
        />
        {formik.errors["review"] && formik.touched["review"] && (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors["review"]}
          </div>
        )}

        <div className="flex flex-1 items-end justify-between text-sm py-2">
          <div>
            <RatingStarComponent rate={0} />
            {formik.errors["stars"] && formik.touched["stars"] && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors["stars"]}
              </div>
            )}
          </div>

          <div className="flex">
            <button
              type="submit"
              className="font-medium text-primary hover:text-primary-dark"
            >
              Review
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

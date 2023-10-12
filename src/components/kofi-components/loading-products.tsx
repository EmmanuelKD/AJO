"use client";
import { AuthContext } from "@/context/auth/context";
import { useDrawer } from "@/hook/use-drawer";
import { ArchiveBoxXMarkIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
// import ProductListingCard from "./product-listing-card";

export default function LoadingProduct() {
  let router = useRouter();
  const { isUserLoggedIn, user } = useContext(AuthContext);

  const [isShowing, setIsShowing] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartDrawer = useDrawer();
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((p, i) => {
        return (
          <div
            role="status"
            className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:items-center"
          >
            <ProductListingCardSkeliton
               key={i}
            />
            <span className="sr-only">Loading...</span>
          </div>
        );
      })}
    </div>
  );
}

function ProductListingCardSkeliton({ 
}: {
 
}) {
  return (
    <div
       className={`group relative border-b border-r border-gray-200 p-4 sm:p-6`}
    >
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
        <div className="h-full w-full object-cover object-center" />
      </div>
      <div className="pb-4 pt-10 text-center">
        <h3 className="text-sm font-medium text-gray-900">
          <div>
            <span aria-hidden="true" className="absolute inset-0 w-5 h-2" />
             
          </div>
        </h3>
        <div className="mt-3 flex flex-col items-center">
          <p className="sr-only w-5 h-2"></p>
          <div className="flex items-center w-5 h-2"></div>
          <p className="mt-1 text-sm text-gray-500 w-5 h-2"></p>
        </div>
        <p className="mt-4 text-base font-medium text-gray-900 w-5 h-2"></p>
      </div>
    </div>
  );
}

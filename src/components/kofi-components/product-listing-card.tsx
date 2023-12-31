"use client";
import { useRouter } from "next/navigation";
import RatingStarComponent from "./rating-star";
import { routes } from "@/config";
import { useContext } from "react";
import { ProductContext } from "@/context/product/context";
import Link from "next/link";

export default function ProductListingCard({
  product,
  isSingle = false,
}: {
  product: ProductType;
  isSingle?: boolean;
}) {
  const router = useRouter();
  return (
    <Link
      href={routes.home.productDetails + product.id}
     
      key={product.id}
      className={`group relative ${
        isSingle && "border-t border-l"
      } border-b border-r border-gray-200 p-4 sm:p-6`}
    >
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="pb-4 pt-10 text-center">
        <h3 className="text-sm font-medium text-gray-900">
          <a href={product.href}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </a>
        </h3>
        <div className="mt-3 flex flex-col items-center">
          <p className="sr-only">{product.rating.length ?? 0} out of 5 stars</p>
          <div className="flex items-center">
            <RatingStarComponent rate={product.rating.length ?? 0} />
          </div>
          <p className="mt-1 text-sm text-gray-500">
            {product.reviewCount} reviews
          </p>
        </div>
        <p className="mt-4 text-base font-medium text-gray-900">
          SLL. {product.price}
        </p>
      </div>
    </Link>
  );
}

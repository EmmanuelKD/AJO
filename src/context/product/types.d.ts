"use client";
import { User } from "firebase/auth";
import { ReactNode } from "react";

type ProductContextProp = {
  children: ReactNode;
};

type ProductContextState = {
  products: AjoProduct[];
  // usersProducts: AjoProduct[];
  usersLikedProducts: string[];
  usersCartProducts: string[];
};

type AuthContextType = {
  loadUsersSpecificProduct: (userID: string) => void;
  loadAllProduct: () => void;
  isProductLoading: boolean;
  isProductEmpty: boolean;
  state: ProductContextState;
};

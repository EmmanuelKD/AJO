"use client"
import { User } from "firebase/auth";
import { ReactNode } from "react";

type AuthContextProp = {
  children: ReactNode;
};

type AuthContextState = {
  user?:  AjoUser;
  userStorData?: InstitutionUsersType;
  authError?: string;
};

type AuthContextType = {
  loadUserToState: (user?: AjoUser) => void;
  user?:  AjoUser;
  isUserLoggedIn: () => boolean;
};

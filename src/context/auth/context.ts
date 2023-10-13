"use client"
import React from 'react';
import { AuthContextType } from './types';
  
export const AuthContext = React.createContext<AuthContextType>({
    loadUserToState: (_?: AjoUser) => {},
    user: undefined,
    isUserLoggedIn: () => false,
 });

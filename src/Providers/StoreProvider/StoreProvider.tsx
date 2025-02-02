"use client";

import React, { ReactNode, useRef } from "react";
import { AppStore, makeStore } from "@/lib/store/store";
import { Provider } from "react-redux";

const StoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    // Create the store if it doesn't exist
    storeRef.current = makeStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;

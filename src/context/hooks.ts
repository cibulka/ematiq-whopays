"use client";
import { useContext } from "react";

import { AppContext } from "./provider";

export function useAppContext() {
  const appContext = useContext(AppContext);
  if (!appContext) throw new Error("Missing context");
  return appContext;
}

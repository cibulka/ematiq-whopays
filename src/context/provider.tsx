"use client";
import React, { PropsWithChildren, useReducer } from "react";

import { AppAction } from "./action-types";
import { initialState } from "./constants";
import { appReducer } from "./reducer";
import { AppContextValue } from "./types";
import { useLocalStorage } from "./use-local-storage";

export const AppContext = React.createContext<{
  state: AppContextValue;
  dispatch: React.Dispatch<AppAction> | null;
}>({ state: initialState, dispatch: null });

export function AppProvider(props: PropsWithChildren) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useLocalStorage({ state, dispatch });

  return <AppContext.Provider value={{ state, dispatch }}>{props.children}</AppContext.Provider>;
}

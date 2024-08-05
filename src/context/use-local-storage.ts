import { useEffect } from "react";

import { LOCAL_STORAGE_KEY } from "@/shared/constants/local-storage";

import { AppAction, AppActionType } from "./action-types";
import { AppContextValue } from "./types";

interface UseLocalStorageProps {
  state: AppContextValue;
  dispatch: React.Dispatch<AppAction>;
}

export function useLocalStorage({ state, dispatch }: UseLocalStorageProps) {
  useEffect(() => {
    dispatch?.({ type: AppActionType.HYDRATE });
  }, [dispatch]);

  useEffect(() => {
    if (state.loaded) window.localStorage?.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);
}

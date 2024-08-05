import { useMemo } from "react";

import { AppActionType, PayloadRename } from "./action-types";
import { useAppContext } from "./hooks";

export function useAppCallbacks() {
  const { dispatch } = useAppContext();

  return useMemo(
    () =>
      dispatch
        ? {
            onAddPerson: (payload: string) => dispatch({ type: AppActionType.ADD_PERSON, payload }),
            onDeletePerson: (payload: string) => dispatch({ type: AppActionType.DELETE_PERSON, payload }),
            onRenamePerson: (payload: PayloadRename) => dispatch({ type: AppActionType.RENAME_PERSON, payload }),
            onResolveIndex: () => dispatch({ type: AppActionType.RESOLVE_INDEX }),
            onResolveSuspense: () => dispatch({ type: AppActionType.RESOLVE_SUSPENSE }),
            onReset: () => dispatch({ type: AppActionType.RESET }),
            onSetCount: (payload: number) => dispatch({ type: AppActionType.SET_COUNT, payload }),
          }
        : {},
    [dispatch]
  );
}

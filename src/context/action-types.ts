export enum AppActionType {
  ADD_PERSON = "ADD_PERSON",
  DELETE_PERSON = "DELETE_PERSON",
  RENAME_PERSON = "RENAME_PERSON",
  HYDRATE = "HYDRATE",
  RESET = "RESET",
  RESOLVE_INDEX = "RESOLVE_INDEX",
  RESOLVE_SUSPENSE = "RESOLVE_SUSPENSE",
  SET_COUNT = "SET_COUNT",
}

export type PayloadRename = { old: string; current: string };

export type AppAction =
  | { type: AppActionType.ADD_PERSON; payload: string }
  | { type: AppActionType.DELETE_PERSON; payload: string }
  | { type: AppActionType.HYDRATE }
  | { type: AppActionType.RENAME_PERSON; payload: PayloadRename }
  | { type: AppActionType.RESET }
  | { type: AppActionType.RESOLVE_INDEX }
  | { type: AppActionType.RESOLVE_SUSPENSE }
  | { type: AppActionType.SET_COUNT; payload: number };

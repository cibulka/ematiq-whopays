import { countDefault, nicknames } from "@/shared/constants/app";

import { AppContextValue } from "./types";

export const initialState: AppContextValue = {
  loaded: false,
  selectedIndex: undefined,
  people: nicknames.slice(0, countDefault),
  suspense: true,
};

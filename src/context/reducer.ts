import { countMax, countMin, nicknames } from "@/shared/constants/app";
import { LOCAL_STORAGE_KEY } from "@/shared/constants/local-storage";
import { getRandomIndex } from "@/shared/utils/get-random";
import { AppAction, AppActionType } from "./action-types";
import { initialState } from "./constants";
import { AppContextValue } from "./types";

export function appReducer(state: AppContextValue, action: AppAction): AppContextValue {
  switch (action.type) {
    case AppActionType.ADD_PERSON: {
      if (state.people.length + 1 > countMax) return state;
      return {
        ...state,
        people: [...state.people, action.payload],
      };
    }
    case AppActionType.HYDRATE: {
      let data: AppContextValue;
      const dataStr = window.localStorage?.getItem(LOCAL_STORAGE_KEY);
      if (dataStr) {
        try {
          data = JSON.parse(dataStr) as AppContextValue;
        } catch (e) {
          data = initialState;
        }
      } else {
        data = initialState;
      }

      return { ...data, loaded: true };
    }

    case AppActionType.DELETE_PERSON: {
      if (state.people.length - 1 < countMin) return state;

      return {
        ...state,
        people: state.people.filter((name) => name !== action.payload),
      };
    }

    case AppActionType.RENAME_PERSON: {
      return {
        ...state,
        people: state.people.map((name) => (name === action.payload.old ? action.payload.current : name)),
      };
    }

    case AppActionType.RESET: {
      return {
        ...state,
        selectedIndex: undefined,
        suspense: true,
      };
    }

    case AppActionType.RESOLVE_INDEX: {
      return {
        ...state,
        selectedIndex: getRandomIndex(state.people),
      };
    }

    case AppActionType.RESOLVE_SUSPENSE: {
      return {
        ...state,
        suspense: false,
      };
    }

    case AppActionType.SET_COUNT: {
      if (action.payload < state.people.length) {
        return {
          ...state,
          people: state.people.slice(0, action.payload),
        };
      }

      if (action.payload > state.people.length) {
        const pad = action.payload - state.people.length;
        const unusedNicknames = nicknames.filter((value) => !state.people.includes(value));
        return {
          ...state,
          people: [...state.people, ...unusedNicknames.slice(0, pad)],
        };
      }

      return state;
    }
  }
}

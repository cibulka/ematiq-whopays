import { FormEvent, useCallback } from "react";
import { useIntl } from "react-intl";

import { useAppCallbacks } from "@/context";

import { IconCheck } from "@/icons/IconCheck";
import { IconError } from "@/icons/IconError";
import { IconPlus } from "@/icons/IconPlus";
import { useInput } from "./use-input";

export function PeopleListAddMore() {
  const intl = useIntl();
  const { onAddPerson } = useAppCallbacks();

  const { currentValue, isFocus, isInvalid, onBlur, onChange, onFocus } = useInput({ initialValue: "" });

  const onSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      if (!isInvalid) onAddPerson?.(currentValue);
    },
    [currentValue, isInvalid]
  );

  return (
    <form
      onSubmit={onSubmit}
      aria-invalid={isInvalid}
      className={[
        "sticky bottom-4",
        "flex w-full gap-1 items-center justify-between",
        "bg-white px-2",
        isFocus && "border-b-2 border-blue-500",
      ].join(" ")}
    >
      <button
        className={["w-6 h-6", currentValue ? "opacity-100" : "opacity-0"].filter(Boolean).join(" ")}
        type="submit"
        disabled={isInvalid}
      >
        {isInvalid ? <IconError className="text-red-500" /> : <IconCheck className="text-emerald-500" />}
      </button>

      <input
        type="text"
        className="sticky bottom-0 w-full py-2 px-1 focus:outline-none"
        placeholder="Add more"
        value={currentValue}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
      />
      <button
        className={["w-6 h-6", isInvalid ? "opacity-50" : "opacity-100"].filter(Boolean).join(" ")}
        type="submit"
        disabled={isInvalid}
      >
        <IconPlus className="text-blue-500" />
      </button>
    </form>
  );
}

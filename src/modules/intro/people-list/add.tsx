import { FormEvent, useCallback, useRef } from "react";
import { useIntl } from "react-intl";

import { useAppCallbacks } from "@/context";
import { IconCheck } from "@/icons/IconCheck";
import { IconError } from "@/icons/IconError";
import { IconPlus } from "@/icons/IconPlus";

import { messages } from "./messages";
import { useInput } from "./use-input";

export function PeopleListAddMore() {
  const { formatMessage } = useIntl();
  const { onAddPerson } = useAppCallbacks();

  const inputRef = useRef<HTMLInputElement>(null);
  const { clear, currentValue, isFocus, isInvalid, onBlur, onChange, onFocus } = useInput({ initialValue: "" });

  const onSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      if (!isInvalid && currentValue) {
        onAddPerson?.(currentValue);
        clear();
        inputRef.current?.focus();
      }
    },
    [clear, currentValue, isInvalid, onAddPerson]
  );

  return (
    <form
      onSubmit={onSubmit}
      className={[
        "sticky bottom-4",
        "flex w-full gap-1 items-center justify-between",
        "bg-white px-2",
        isFocus && "border-b-2 border-blue-500",
      ].join(" ")}
    >
      <button
        aria-label={isInvalid ? formatMessage(messages.invalid) : formatMessage(messages.valid)}
        className={["w-6 h-6", currentValue ? "opacity-100" : "opacity-0"].filter(Boolean).join(" ")}
        type="submit"
        disabled={isInvalid}
      >
        {isInvalid ? <IconError className="text-red-600" /> : <IconCheck className="text-emerald-500" />}
      </button>

      <input
        type="text"
        className="sticky bottom-0 w-full py-2 px-1 focus:outline-none"
        placeholder={formatMessage(messages.placeholder)}
        value={currentValue}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        ref={inputRef}
      />
      <button
        aria-label={formatMessage(messages.add)}
        className={["w-6 h-6", isInvalid || !currentValue ? "opacity-50" : "opacity-100"].filter(Boolean).join(" ")}
        type="submit"
        disabled={isInvalid || !currentValue}
      >
        <IconPlus className="text-blue-500" />
      </button>
    </form>
  );
}

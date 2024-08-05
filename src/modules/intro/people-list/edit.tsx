import { IconError } from "@/icons/IconError";

import { useAppCallbacks } from "@/context";
import { IconCheck } from "@/icons/IconCheck";
import { IconSubmit } from "@/icons/IconSubmit";
import { FormEvent, useCallback } from "react";
import { useInput } from "./use-input";

type PeopleListItemProps = {
  onClose: () => void;
  value: string;
};

export function PeopleItemEdit({ onClose, value }: PeopleListItemProps) {
  const { onRenamePerson } = useAppCallbacks();

  const { currentValue, isInvalid, onChange, onFocus } = useInput({ initialValue: value });

  const onSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      if (isInvalid) return;
      onRenamePerson?.({ old: value, current: currentValue });
      onClose();
    },
    [currentValue, isInvalid, value, onClose, onRenamePerson]
  );

  return (
    <form
      onSubmit={onSubmit}
      aria-invalid={isInvalid}
      className={["flex w-full gap-1 items-center justify-between", "px-2 bg-white", "border-b-2 border-blue-500"].join(
        " "
      )}
    >
      <button className="w-6 h-6" type="submit" disabled={isInvalid}>
        {isInvalid ? <IconError className="text-red-500" /> : <IconCheck className="text-green-700" />}
      </button>
      <input
        className="flex-1 w-full py-2 px-1 focus:outline-none"
        type="text"
        autoFocus
        autoCapitalize="words"
        value={currentValue}
        onChange={onChange}
        onBlur={onClose}
        onFocus={onFocus}
      />
      <button
        className={["w-6 h-6", isInvalid ? "opacity-50" : "opacity-100"].filter(Boolean).join(" ")}
        type="submit"
        disabled={isInvalid}
      >
        <IconSubmit className="text-blue-500" />
      </button>
    </form>
  );
}

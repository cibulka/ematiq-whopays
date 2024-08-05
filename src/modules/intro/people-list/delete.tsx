import { useCallback } from "react";
import { useIntl } from "react-intl";

import { useAppCallbacks } from "@/context";
import { IconTrash } from "@/icons/IconTrash";

import { messages } from "./messages";

type PeopleListDeleteProps = {
  value: string;
};

export function PeopleListDelete({ value }: PeopleListDeleteProps) {
  const { formatMessage } = useIntl();
  const { onDeletePerson } = useAppCallbacks();
  const onClick = useCallback(() => onDeletePerson?.(value), [onDeletePerson, value]);

  return (
    <button
      aria-label={formatMessage(messages.delete)}
      type="button"
      onClick={onClick}
      className="flex-shrink-0 w-6 h-6 opacity-50 text-red-600 mr-2"
    >
      <IconTrash />
    </button>
  );
}

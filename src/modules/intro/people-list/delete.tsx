import { useAppCallbacks } from "@/context";
import { IconTrash } from "@/icons/IconTrash";
import { useCallback } from "react";

type PeopleListDeleteProps = {
  value: string;
};

export function PeopleListDelete({ value }: PeopleListDeleteProps) {
  const { onDeletePerson } = useAppCallbacks();
  const onClick = useCallback(() => onDeletePerson?.(value), [onDeletePerson, value]);

  return (
    <button type="button" onClick={onClick} className="flex-shrink-0 w-6 h-6 opacity-50 text-red-500">
      <IconTrash />
    </button>
  );
}

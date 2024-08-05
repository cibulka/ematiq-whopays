import { useCallback } from "react";

import { IconPen } from "@/icons/IconPen";

type PeopleListViewProps = {
  value: string;
  onEdit: (value: string) => void;
};

export function PeopleListView({ onEdit, value }: PeopleListViewProps) {
  const onClick = useCallback(() => onEdit(value), [onEdit, value]);
  return (
    <button className="flex items-center gap-2 p-2" type="button" onClick={onClick}>
      <span className="w-6 h-6">
        <IconPen />
      </span>
      <span className="border-b-2 border-dotted border-neutral-700">{value}</span>
    </button>
  );
}

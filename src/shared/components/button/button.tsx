import { PropsWithChildren, ReactNode } from "react";

import { Spinner } from "@/shared/components/spinner";

type ButtonProps = PropsWithChildren<{
  className?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  loading?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}>;

export function Button(props: ButtonProps) {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className={[
        props.className,
        "flex justify-center gap-2 w-60",
        "px-4 py-2",
        "rounded-md bg-red-500 text-white",
        "text-lg font-bold",
        props.loading && "opacity-50",
      ]
        .filter(Boolean)
        .join(" ")}
      disabled={!props.onClick || props.loading}
    >
      {props.children}
      {props.loading && <Spinner className="-mr-8" />}
    </button>
  );
}

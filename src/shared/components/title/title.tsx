import { PropsWithChildren } from "react";

export function Title({ children }: PropsWithChildren) {
  return (
    <div className="flex items-center h-20">
      <div className="text-2xl md:text-4xl">{children}</div>
    </div>
  );
}

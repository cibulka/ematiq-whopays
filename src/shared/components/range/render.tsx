import { PropsWithChildren } from "react";

import type { IThumbProps, ITrackProps } from "react-range/lib/types";
import { TrackLine } from "./track-line";

export function renderTrack({ props, children, scale }: PropsWithChildren<{ props: ITrackProps; scale: number }>) {
  return (
    <div {...props} className="relative flex flex-1 items-center h-10" style={props.style}>
      <TrackLine className="bg-neutral-300" />
      {typeof scale === "number" && <TrackLine className="opacity-70 bg-red-500" scale={scale} />}
      {children}
    </div>
  );
}

export function renderThumb({ props }: { props: IThumbProps }) {
  return (
    <div
      {...props}
      className={["w-10 h-10 flex items-center justify-center"].join(" ")}
      key={props.key}
      style={props.style}
    >
      <div className="w-4 h-4 rounded-full bg-red-500" />
    </div>
  );
}

import { useCallback } from "react";
import { Range as RangeLib } from "react-range";
import type { IRenderTrackParams, IThumbProps } from "react-range/lib/types";

import { renderThumb as renderThumbEnhanced, renderTrack as renderTrackEnhanced } from "./render";

type RangeProps = {
  className?: string;
  label?: string;
  min: number;
  max: number;
  value: number;
  onChange?: (value: number) => void;
};

export function Range({ className, label, onChange, min, max, value }: RangeProps) {
  const onChangeValue = useCallback((values: number[]) => onChange?.(values[0]), [onChange]);

  const renderTrack = useCallback(
    ({ props, children }: IRenderTrackParams) => {
      const scale = (value - min) / (max - min);
      return renderTrackEnhanced({ props, children, scale });
    },
    [max, min, value]
  );

  const renderThumb = useCallback(
    ({ props }: { props: IThumbProps }) => {
      return renderThumbEnhanced({ props, label });
    },
    [label]
  );

  return (
    <div className={["flex items-center gap-4", className].filter(Boolean).join(" ")}>
      <RangeLib
        disabled={!onChange}
        values={[value]}
        min={min}
        max={max}
        step={1}
        onChange={onChangeValue}
        renderThumb={renderThumb}
        renderTrack={renderTrack}
      />
      <div className="text-xl text-right w-6">{value}</div>
    </div>
  );
}

import { useCallback, useEffect, useRef, useState } from "react";

import { useAppContext } from "@/context";
import { AppActionType } from "@/context/action-types";
import { getRandomValue } from "@/shared/utils/get-random";

type UseRouletteProps = {
  values: string[];
  value: string;
  spinMs: number;
  totalMs: number;
};

export function useRoulette({ values, value, spinMs, totalMs }: UseRouletteProps) {
  const {
    dispatch,
    state: { suspense },
  } = useAppContext();
  const [isSpinning, setIsSpinning] = useState(suspense);
  const [displayValue, setDisplayValue] = useState(values[0]);

  const onSpinning = useCallback(() => setDisplayValue(getRandomValue(values)), [values]);
  const onFinished = useCallback(() => {
    setDisplayValue(value);
    dispatch?.({ type: AppActionType.RESOLVE_SUSPENSE });
  }, [dispatch, value]);

  const intervalRef = useRef<NodeJS.Timeout>();
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (isSpinning) {
      intervalRef.current = setInterval(onSpinning, spinMs);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isSpinning, onSpinning, spinMs]);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsSpinning(false);
      onFinished();
      clearInterval(intervalRef.current);
    }, totalMs);
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [onFinished, totalMs]);

  return {
    displayValue: isSpinning && suspense ? displayValue : value,
    isSpinning,
  };
}

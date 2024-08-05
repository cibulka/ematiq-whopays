import { useAppContext } from "@/context";
import { maxNameLength } from "@/shared/constants/app";
import { useCallback, useState } from "react";

type UseInputProps = {
  initialValue: string;
};

export function useInput({ initialValue }: UseInputProps) {
  const {
    state: { people },
  } = useAppContext();

  const [isFocus, setIsFocus] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [currentValue, setCurrentValue] = useState(initialValue);

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event?.target.value;
      setCurrentValue(inputValue);
      setIsInvalid(!inputValue || inputValue.length > maxNameLength || people.includes(inputValue));
    },
    [people]
  );

  const onBlur = useCallback(() => {
    setIsFocus(false);
  }, []);

  const onFocus = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    event.target.select();
    setIsFocus(true);
  }, []);

  return { currentValue, isFocus, onBlur, onChange, onFocus, isInvalid };
}

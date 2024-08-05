"use client";
import { useIntl } from "react-intl";

import { useAppCallbacks } from "@/context/callbacks";
import { Button } from "@/shared/components/button";

import { messages } from "./messages";

interface ResetButtonProps {
  isSpinning: boolean;
}

export function ResetButton({ isSpinning }: ResetButtonProps) {
  const { formatMessage } = useIntl();
  const { onReset } = useAppCallbacks();

  return (
    <Button type="button" onClick={onReset} loading={isSpinning}>
      {isSpinning ? formatMessage(messages.loading) : formatMessage(messages.reset)}
    </Button>
  );
}

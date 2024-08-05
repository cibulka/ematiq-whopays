import { useIntl } from "react-intl";

import { useAppContext } from "@/context";

import { Confetti } from "./confetti";
import { messages } from "./messages";
import { Progress } from "./progress";
import { ResetButton } from "./reset-button";
import { useRoulette } from "./use-roulette";

type RouletteProps = {
  person: string;
};

export function Roulette({ person }: RouletteProps) {
  const intl = useIntl();

  const {
    state: { people },
  } = useAppContext();

  const { displayValue, isSpinning } = useRoulette({
    values: people,
    value: person,
    spinMs: 50,
    totalMs: 3000,
  });

  return (
    <>
      <Progress />
      <div className="flex items-center h-20">
        <div className="text-4xl">{intl.formatMessage(messages.payer, { name: <strong>{displayValue}</strong> })}</div>
      </div>
      <ResetButton isSpinning={isSpinning} />
      <div className="flex-1"></div>
      {!isSpinning && <Confetti />}
    </>
  );
}

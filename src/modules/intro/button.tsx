import { useIntl } from "react-intl";

import { useAppCallbacks } from "@/context/callbacks";
import { Button } from "@/shared/components/button";

import { useAppContext } from "@/context";
import { messages } from "./messages";

export function IntroButton() {
  const { formatMessage } = useIntl();
  const {
    state: { loaded },
  } = useAppContext();
  const { onResolveIndex } = useAppCallbacks();
  return (
    <Button className="sticky top-8 z-20" onClick={onResolveIndex} loading={!loaded}>
      {formatMessage(messages.button)}
    </Button>
  );
}

import { useIntl } from "react-intl";

import { Title } from "@/shared/components/title";

import { useAppContext } from "@/context";
import { messages } from "./messages";

export function IntroTitle() {
  const { formatMessage } = useIntl();
  const {
    state: { people, loaded },
  } = useAppContext();

  return (
    <Title>
      {loaded
        ? formatMessage(messages.title, {
            value: people.length,
          })
        : formatMessage(messages.titleLoading)}
    </Title>
  );
}

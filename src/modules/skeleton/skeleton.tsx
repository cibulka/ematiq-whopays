import { useIntl } from "react-intl";

import { Button } from "@/shared/components/button";
import { Title } from "@/shared/components/title";
import { messages } from "./messages";

export function AppSkeleton() {
  const intl = useIntl();
  return (
    <>
      <div className="flex items-center w-full h-10">
        <div className="bg-neutral-100 h-3 w-full rounded-md" />
      </div>
      <Title>&nbsp;</Title>
      <Button loading>{intl.formatMessage(messages.button)}</Button>
    </>
  );
}

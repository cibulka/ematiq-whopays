import Link from "next/link";

import { Locales } from "@/shared/i18n/config";
import { getIntl } from "@/shared/i18n/get-intl";
import { PropsWithLocale } from "@/shared/types/params";

import { messages } from "./messages";

export async function LocaleSelect({ locale }: PropsWithLocale) {
  const { formatMessage: formatMessageCs } = await getIntl(Locales.CS);
  const { formatMessage: formatMessageEn } = await getIntl(Locales.EN);

  const labels = {
    [Locales.CS]: formatMessageEn(messages.lang),
    [Locales.EN]: formatMessageCs(messages.lang),
  };

  const hrefs = {
    [Locales.CS]: "/en",
    [Locales.EN]: "/cs",
  };

  return (
    <Link href={hrefs[locale]} className="underline">
      {labels[locale]}
    </Link>
  );
}

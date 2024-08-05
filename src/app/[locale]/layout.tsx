import { PropsWithChildren } from "react";

import { IconLogo } from "@/icons/IconLogo";
import { IconOnion } from "@/icons/IconOnion";
import { getIntl } from "@/shared/i18n/get-intl";
import { ParamsWithLocale } from "@/shared/types/params";

import styles from "./layout.module.css";
import { LocaleSelect } from "./locale-select";
import { messages, metaMessages } from "./messages";
import { Providers } from "./providers";

export async function generateMetadata({ params: { locale } }: ParamsWithLocale) {
  const { formatMessage } = await getIntl(locale);
  return {
    title: formatMessage(metaMessages.title),
    description: formatMessage(metaMessages.description),
  };
}

export default async function Layout({ children, params: { locale } }: ParamsWithLocale<PropsWithChildren>) {
  const { formatMessage } = await getIntl(locale);
  return (
    <Providers locale={locale}>
      <div className="flex flex-1 flex-col">
        <nav className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <IconLogo className="w-8 h-8 text-red-500 -mt-1" />
            <h1 className="font-bold">{formatMessage(messages.title)}</h1>
          </div>
          <LocaleSelect locale={locale} />
        </nav>
        <div className="flex-1">
          <div
            className={[
              "flex flex-col items-center gap-4 p-4",
              "w-full max-w-2xl ml-auto mr-auto",
              styles.layout_content,
            ].join(" ")}
          >
            {children}
          </div>
        </div>
        <footer className="flex justify-center mb-4 gap-1 text-sm">
          <span>
            {formatMessage(messages.footer, {
              // TODO: Fix this TS error
              // @ts-expect-error react-intl should accept elements
              link: (
                <a className="underline" href="/">
                  {formatMessage(messages.name)}
                </a>
              ),
            })}
          </span>
          <span className="text-emerald-500 w-4 h-4">
            <IconOnion />
          </span>
        </footer>
      </div>
    </Providers>
  );
}

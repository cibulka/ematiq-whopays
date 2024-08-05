import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

import { AppProvider } from "@/context";
import { getIntl } from "@/shared/i18n/get-intl";
import ServerIntlProvider from "@/shared/i18n/provider";
import { PropsWithLocale } from "@/shared/types/params";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export async function Providers({ locale, children }: PropsWithChildren & PropsWithLocale) {
  const intl = await getIntl(locale);
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <ServerIntlProvider messages={intl.messages} locale={locale}>
          <AppProvider>{children}</AppProvider>
        </ServerIntlProvider>
      </body>
    </html>
  );
}

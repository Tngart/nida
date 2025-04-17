import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale } from 'next-intl';

import CustomAppBar from '@/components/app-bar';
import Footer from '@/components/footer';
import { routing } from '@/i18n/routing';
import Providers from '@/providers';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <Providers>
          <NextIntlClientProvider>
            <CustomAppBar />
            <div className="px-4 xl:px-32">{children}</div>
            <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}

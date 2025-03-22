import type { AppProps } from 'next/app';
import type { NextPage } from 'next'; 
import { I18nextProvider } from 'react-i18next';
import i18next from '@/core/i18n';
import '@/styles/globals.css';
import '@/core/fontAwesome';

type AppPropsWithLayout = AppProps & {
  Component: NextPage & {
    getLayout?: (page: React.ReactElement) => React.ReactNode;
  };
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <I18nextProvider i18n={i18next}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
}

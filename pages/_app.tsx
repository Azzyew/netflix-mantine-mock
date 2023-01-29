import React from 'react';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps: { session, ...pageProps }, router }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <>
      <Head>
        <title>Mockflix</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              colorScheme: 'dark',
              colors: {
                dark: [
                  '#E5E5E5',
                  '#A6A7AB',
                  '#909296',
                  '#5C5F66',
                  '#373A40',
                  '#2C2E33',
                  '#25262B',
                  '#141414',
                  '#141517',
                  '#101113',
                ]
              },
              fontFamily: 'Martel Sans, sans-serif',
              fontSizes: {
                sm: 14,
                md: 17,
                lg: 20,
                xl: 23,
              },
            }}
          >
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </MantineProvider>
        </QueryClientProvider>
      </SessionProvider>
    </>
  );
}

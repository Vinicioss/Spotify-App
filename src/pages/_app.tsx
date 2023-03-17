import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps} }) {
  return (
    
      <ThemeProvider theme={theme}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
        <GlobalStyles />
      </ThemeProvider>

  );
}

export default MyApp;

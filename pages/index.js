import { CssBaseline, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import theme from '../src/common/theme';
import Main from '../src/components/main';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Content Genie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Main />
      </ThemeProvider>
    </div>
  );
}

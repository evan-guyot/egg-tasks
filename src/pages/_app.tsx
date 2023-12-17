"use client";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@/utils/createEmotionCache";
import defaultTheme from "@/styles/theme/theme";
import Layout from "@/components/layout";

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <title>Egg Tasks</title>
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} className="root" />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

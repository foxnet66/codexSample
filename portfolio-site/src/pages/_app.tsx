import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { LanguageProvider } from "@/context/LanguageContext";
import seoConfig from "../seo.config";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <DefaultSeo {...seoConfig} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

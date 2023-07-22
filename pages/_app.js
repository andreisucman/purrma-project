import Head from 'next/head';
import { useEffect } from "react";
import i18n from "../i18n";
import { useRouter } from "next/router";
import TagManager from "react-gtm-module";
import Header from "../components/Header";
import { locales } from "../locales.js"
import { I18nextProvider } from "react-i18next";
import Layout from "../components/common/Layout";
import CustomComponent from "../components/common/CustomComponent";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID });
  }, []);

useEffect(() => {
    if (!router.isReady) return;
    const language = navigator.language;

    for (const locale of locales) {
      if (locale.includes(language?.split("-")?.[0])) {
        i18n.changeLanguage(locale).then(() => {
          const tId = setTimeout(() => {
            clearTimeout(tId);
          }, 2000);
        });

        if (router.locale !== locale) {
          router.push(router.pathname, router.asPath, { locale: locale });
        }
      }
    }
  }, [router.isReady, i18n]);

  return (
    <I18nextProvider i18n={i18n}>

      <Layout>
        <Header />
        <CustomComponent Component={Component} pageProps={...pageProps} />
      </Layout>
    </I18nextProvider>
  );
}

export default MyApp;

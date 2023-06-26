import Head from 'next/head';
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import Header from "../components/Header";
import Layout from "../components/common/Layout";
import CustomComponent from "../components/common/CustomComponent";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID });
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap" rel="stylesheet"/>
      </Head>
      <Layout>
        <Header />
        <CustomComponent Component={Component} pageProps={...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

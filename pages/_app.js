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
    <Layout>
      <Header />
      <CustomComponent Component={Component} pageProps={...pageProps} />
    </Layout>
  );
}

export default MyApp;

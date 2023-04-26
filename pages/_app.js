import { useEffect } from "react";
import { Montserrat } from "next/font/google";
import TagManager from "react-gtm-module";
import Header from "../components/Header";
import Layout from "../components/common/Layout";
import CustomComponent from "../components/common/CustomComponent";
import "../styles/globals.scss";

const font = Montserrat({
  weights: [400, 700],
  display: "swap",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID });
  // }, []);

  return (
    <Layout>
      <Header />
      <main id="body" className={`${font.className} main`}>
        <CustomComponent Component={Component} pageProps={pageProps} />;
      </main>
    </Layout>
  );
}

export default MyApp;

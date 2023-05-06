import { Montserrat } from "next/font/google";
import TagManager from "react-gtm-module";
import Header from "../components/Header";
import Layout from "../components/common/Layout";
import { UserCtxProvider } from "../state/UserCtx";
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
      <UserCtxProvider>
        <Header />
        <main id="body" className={`${font.className} main`}>
              <CustomComponent Component={Component} pageProps={...pageProps} />
        </main>
      </UserCtxProvider>
    </Layout>
  );
}

export default MyApp;

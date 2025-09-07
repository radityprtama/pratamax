import "@/styles/global.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Router from "next/router";
import { DefaultSeo, SocialProfileJsonLd } from "next-seo";
import config from "site.config";
import { AnimatePresence, motion } from "framer-motion";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    //CAT
    console.log(
      `%c
           /\\_____/\\ \r
          /  o   o  \\ \r
         ( ==  ^  == ) \r
          )         ( \r
         (           ) \r
        ( (  )   (  ) ) \r
       (__(__)___(__)__)
    `,
      "font-weight:bold; font-size:15px;color:#ff4747"
    );
  }, []);
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <DefaultSeo
        description={config.description}
        defaultTitle="Hi i'm Raditya."
        titleTemplate={`%s · Raditya`}
        openGraph={{
          title: "Hi i'm Raditya.",
          description: config.description,
          images: [
            {
              url: `${config.baseUrl}/favicon/og-default.jpg`,
            },
          ],
        }}
        twitter={{
          handle: "@urvyss",
          cardType: "summary_large_image",
        }}
      />
      <SocialProfileJsonLd
        type="Person"
        name="Raditya Alia Pratama"
        url={config.baseUrl}
        sameAs={[
          "http://www.linkedin.com/in/raaap",
          "https://github.com/zurravie",
          "https://medium.com/@radityprtama",
          "https://instagram.com/unsqin_",
        ]}
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            key={router.route}
            className="flex flex-col h-full flex-grow"
            animate="enter"
            exit="exit"
            initial="initial"
            variants={{
              initial: { opacity: 0, y: 5 },
              enter: { opacity: 1, y: 0, transition: { duration: 0.1 } },
              exit: { opacity: 0, transition: { duration: 0.1 } },
            }}
          >
            <Component {...pageProps} />
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
export default MyApp;

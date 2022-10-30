import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Layouts/Navbar";
import NextNProgress from "nextjs-progressbar";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <NextNProgress color="#16a34a" />
        <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;

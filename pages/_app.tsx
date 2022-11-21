import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Layouts/Navbar/Navbar";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#16a34a" />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Layouts/Navbar/Navbar";
import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#16a34a" />
      <ToastContainer />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

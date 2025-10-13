// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonical =
    "https://portailmyopie.fr" +
    (router.asPath === "/" ? "" : router.asPath.split("?")[0]);

  return (
    <>
      <Head>
        <link rel="canonical" href={canonical} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

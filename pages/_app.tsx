// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathNoQuery = router.asPath.split("?")[0] || "/";
  const canonical =
    "https://portailmyopie.fr" + (pathNoQuery === "/" ? "" : pathNoQuery);

  const defaultTitle = "Portail Myopie";
  const defaultDesc =
    "Infos fiables et outils pratiques sur la myopie de l’enfant et de l’adolescent : freination, optique, atropine, simulateur.";

  return (
    <>
      <Head>
        <title>{defaultTitle}</title>
        <meta name="description" content={defaultDesc} />
        <link rel="canonical" href={canonical} />
        {/* Open Graph par défaut */}
        <meta property="og:title" content={defaultTitle} />
        <meta property="og:description" content={defaultDesc} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://portailmyopie.fr/og-default.jpg" />
        {/* Twitter Card (si tu veux un bel aperçu) */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

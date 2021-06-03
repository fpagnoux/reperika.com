import Head from "next/head";

import Header from "../Header";

import styles from "./BaseLayout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Rep. Erika Uyterhoeven</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css2?family=Alice:wght@400&amp;family=Montserrat:wght@400;700"
        />
        {/* TODO: opengraph tags */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header />
      <div className={styles.main}>{children}</div>
    </>
  );
}

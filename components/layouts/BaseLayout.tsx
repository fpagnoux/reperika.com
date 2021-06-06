import { useState } from "react";
import Head from "next/head";

import Header from "../Header";
import Footer from "../Footer";
// @ts-expect-error
import settings from "../../settings.yaml";

import styles from "./BaseLayout.module.scss";

type Props = { children: React.ReactElement; title?: string };

export default function Layout({ children, title }: Props) {
  const baseTitle = "Rep. Erika Uyterhoeven";
  const pageTitle = title == null ? baseTitle : `${baseTitle} | ${title}`;
  const [hideFooter, setHideFooter] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta property="og:site_name" content="Rep. Erika Uyterhoeven" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={settings.description} />
        <meta property="og:image" content={`${settings.url}/img/banner.jpeg`} />
        <meta property=" og:url" content={settings.url} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css2?family=Alice:wght@400&amp;family=Montserrat:wght@400;700"
        />
        <script
          defer
          charSet="utf-8"
          type="text/javascript"
          src="//js.hsforms.net/forms/shell.js"
        ></script>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <Header setHideFooter={setHideFooter} />
      <div className={styles.main}>{children}</div>
      <Footer hideFooter={hideFooter} />
    </>
  );
}

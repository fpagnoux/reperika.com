import Link from "next/link";

import styles from "./Footer.module.scss";

export default function Footer({}) {
  return (
    <>
      <div className={styles.placeholder}></div>
      <footer className={styles.footer}>
        <a href="#" onClick={() => {}}>
          Sign up for the newsletter
        </a>
      </footer>
    </>
  );
}

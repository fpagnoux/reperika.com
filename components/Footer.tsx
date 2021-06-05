import { useState } from "react";

import NewsletterModal from "./NewsletterModal";
import styles from "./Footer.module.scss";

export default function Footer({}) {
  const [isNewsletterFormOpen, setIsNewsletterFormOpen] =
    useState<boolean>(false);
  return (
    <>
      <div className={styles.placeholder}></div>
      <footer className={styles.footer}>
        <a href="#" onClick={() => setIsNewsletterFormOpen(true)}>
          Sign up for the newsletter
        </a>
        {isNewsletterFormOpen && (
          <NewsletterModal
            open={isNewsletterFormOpen}
            onClose={() => setIsNewsletterFormOpen(false)}
          />
        )}
      </footer>
    </>
  );
}

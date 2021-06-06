import { useState } from "react";
import Link from "@material-ui/core/Link";

import NewsletterModal from "./NewsletterModal";
import styles from "./Footer.module.scss";

export default function Footer({}) {
  const [isNewsletterFormOpen, setIsNewsletterFormOpen] =
    useState<boolean>(false);
  return (
    <>
      <div className={styles.placeholder}></div>
      {!isNewsletterFormOpen && (
        <footer className={styles.footer}>
          <Link
            component="button"
            onClick={() => setIsNewsletterFormOpen(true)}
          >
            Sign up for the newsletter
          </Link>
        </footer>
      )}
      {isNewsletterFormOpen && (
        <NewsletterModal
          open={isNewsletterFormOpen}
          onClose={() => setIsNewsletterFormOpen(false)}
        />
      )}
    </>
  );
}

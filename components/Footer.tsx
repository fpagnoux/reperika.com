import { useState, useEffect } from "react";
import Link from "@material-ui/core/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import NewsletterModal from "./NewsletterModal";
import styles from "./Footer.module.scss";

export default function Footer({}) {
  const [isNewsletterFormOpen, setIsNewsletterFormOpen] =
    useState<boolean>(false);
  const [showBanner, setShowBanner] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window !== "undefined" && window != null) {
      if (sessionStorage.getItem("hideNewsletterSignup")) {
        setShowBanner(false);
      }
    }
  }, []);

  const hideBanner = () => {
    setShowBanner(false);
    sessionStorage.setItem("hideNewsletterSignup", "true");
  };

  return (
    <>
      <div className={styles.placeholder}></div>
      {!isNewsletterFormOpen && showBanner && (
        <footer className={styles.footer}>
          <div className={styles.footerCloseButton}>
            <Link component="button" onClick={hideBanner}>
              <FontAwesomeIcon icon={faTimes} size="2x" />
            </Link>
          </div>
          <div className={styles.footerContent}>
            <Link
              component="button"
              onClick={() => setIsNewsletterFormOpen(true)}
            >
              Sign up for the newsletter
            </Link>
          </div>
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

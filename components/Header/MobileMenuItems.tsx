import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// @ts-expect-error
import menu from "../../menu.yaml";

import { Menu, isMenuLeaf } from "./types";
import styles from "./MobileMenu.module.scss";

export default function MobileMenuItems() {
  return (
    <div className={styles.drawer}>
      <div className={styles.imgHeader}>
        <Link href="/">
          <a>
            <img src="/img/logo.png" />
          </a>
        </Link>
      </div>
      {(menu as Menu).map((item, idx) => {
        if (isMenuLeaf(item)) {
          return (
            <div className={styles.menuHeader} key={item.href}>
              <Link href={item.href}>{item.title}</Link>
            </div>
          );
        }
        return (
          <Accordion className={styles.menuAccordion} key={item.title}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon icon={faChevronDown} size="2x" />}
              aria-controls={`panel-content-${idx}`}
              id={`panel-header-${idx}`}
              className={styles.menuAccordionSummary}
            >
              {item.title}
            </AccordionSummary>
            <AccordionDetails>
              <div className={styles.menuSection}>
                {item.items.map(({ title, href }) => {
                  return (
                    <div className={styles.menuLink} key={href}>
                      <Link href={href}>{title}</Link>
                    </div>
                  );
                })}
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import MateriaLink from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// @ts-expect-error
import menu from "../../menu.yaml";

import { Menu, isMenuLeaf } from "./types";
import styles from "./MobileMenu.module.scss";

export default function MobileMenuItems() {
  return (
    <div className={styles.drawer}>
      {(menu as Menu).map((item, idx) => {
        if (isMenuLeaf(item)) {
          return (
            <div className={styles.menuHeader}>
              <Link key={item.href} href={item.href}>
                {item.title}
              </Link>
            </div>
          );
        }
        return (
          <Accordion className={styles.menuAccordion}>
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
                    <div className={styles.menuLink}>
                      <Link key={href} href={href}>
                        {title}
                      </Link>
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

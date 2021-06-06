import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import MobileMenuItems from "./MobileMenuItems";
import styles from "./MobileMenu.module.scss";

const useStyles = makeStyles({
  list: {
    width: "500",
  },
  fullList: {
    width: "auto",
  },
});

export default function MobileMenu() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <div className={`mobile-only ${styles.menu}`}>
      <Button onClick={open}>
        <FontAwesomeIcon icon={faBars} size="1x" />
      </Button>
      <Drawer anchor="left" open={isOpen} onClose={close}>
        <div
          className={clsx(classes.list, {
            [classes.fullList]: false,
          })}
          role="presentation"
        >
          <MobileMenuItems />
        </div>
      </Drawer>
    </div>
  );
}

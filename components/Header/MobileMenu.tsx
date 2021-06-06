import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

// @ts-expect-error
import menu from "../../menu.yaml";

import { Menu, isMenuLeaf } from "./types";
import styles from "./MobileMenu.module.scss";

const useStyles = makeStyles({
  list: {
    width: 250,
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

  const list = () => (
    <div
      className={clsx(styles.drawer, classes.list, {
        [classes.fullList]: false,
      })}
      role="presentation"
      onClick={close}
      onKeyDown={close}
    >
      <List>
        {(menu as Menu).map((item) => {
          if (isMenuLeaf(item)) {
            const { title, href } = item;
            return (
              <ListItem button key={href}>
                <Link key={href} href={href}>
                  <Button>{title}</Button>
                </Link>
              </ListItem>
            );
          }
          return (
            <>
              <h3>{item.title}</h3>
              <List>
                {item.items.map(({ title, href }) => {
                  return (
                    <ListItem button key={href}>
                      <Link key={href} href={href}>
                        <Button>{title}</Button>
                      </Link>
                    </ListItem>
                  );
                })}
              </List>
            </>
          );
        })}
      </List>
    </div>
  );

  return (
    <div className={`mobile-only ${styles.menu}`}>
      <Button onClick={open}>
        <FontAwesomeIcon icon={faBars} size="1x" />
      </Button>
      <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        {list()}
      </Drawer>
    </div>
  );
}

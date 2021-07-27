import React from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import styles from "./MenuButton.module.scss";

type Props = {
  title: string;
  items: { title: string; href: string }[];
  id: string;
};

export default function SimpleMenu({ title, items, id }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const close = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button aria-controls={id} aria-haspopup="true" onClick={openMenu}>
        {title}
      </Button>
      <Menu
        id={id}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={close}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        getContentAnchorEl={null}
      >
        <div className={styles.submenu}>
          {items.map(({ title, href }) => {
            return (
              <MenuItem>
                <Link key={href} href={href}>
                  <a>{title}</a>
                </Link>
              </MenuItem>
            );
          })}
        </div>
      </Menu>
    </>
  );
}

import Link from "next/link";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

// @ts-expect-error
import menu from "../../menu.yaml";

import styles from "./Header.module.scss";
import MenuButton from "./MenuButton";
import MobileMenu from "./MobileMenu";
import { Menu, isMenuLeaf } from "./types";

export default function Header({}) {
  return (
    <header className={styles.headerContainer}>
      <Container maxWidth="md">
        <div className={styles.header}>
          <Link href="/">
            <a>
              <img src="/img/logo.png" />
            </a>
          </Link>
          <DesktopMenu />
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}

function DesktopMenu() {
  return (
    <ul className="desktop-only">
      {(menu as Menu).map((item) => {
        if (isMenuLeaf(item)) {
          const { title, href } = item;
          return (
            <Link key={href} href={href}>
              <Button>{title}</Button>
            </Link>
          );
        }
        return (
          <MenuButton
            title={item.title}
            items={item.items}
            id={item.title}
            key={item.title}
          />
        );
      })}
    </ul>
  );
}

import Link from "next/link";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

// @ts-expect-error
import menu from "../menu.yaml";

import styles from "./Header.module.scss";
import MenuButton from "./MenuButton";

type MenuLeaf = {
  title: string;
  href: string;
};

type MenuNode = {
  title: string;
  items: MenuLeaf[];
};

type Menu = (MenuLeaf | MenuNode)[];

export default function Header({}) {
  return (
    <header className={styles.headerContainer}>
      <Container maxWidth="md">
        <div className={styles.header}>
          <Link href="/">
            <img src="/img/logo.png" />
          </Link>
          <ul>
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
        </div>
      </Container>
    </header>
  );
}

function isMenuLeaf(menuItem: MenuLeaf | MenuNode): menuItem is MenuLeaf {
  return (menuItem as MenuLeaf).href != null;
}

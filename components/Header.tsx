import Link from "next/link";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

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

const menuItems: Menu = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Issues",
    items: [
      { title: "Climate Crisis", href: "/issues/climate-crisis" },
      { title: "Clean and Fair Elections", href: "/issues/clean-elections" },
    ],
  },
  {
    title: "News",
    href: "/news",
  },
];

export default function Header({}) {
  return (
    <header>
      <Container maxWidth="md">
        <div className={styles.header}>
          <a href="/">
            <img src="/img/logo.png" />
          </a>
          <ul>
            {menuItems.map((item) => {
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

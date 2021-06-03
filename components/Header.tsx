import Link from "next/link";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import styles from "./Header.module.scss";

const menuItems = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Agenda",
    href: "/agenda",
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
            {menuItems.map(({ title, href }) => (
              <Link key={href} href={href}>
                <Button>{title}</Button>
              </Link>
            ))}
          </ul>
        </div>
      </Container>
    </header>
  );
}

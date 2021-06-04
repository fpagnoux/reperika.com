import Container from "@material-ui/core/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faShieldVirus,
  faHome,
  faBriefcase,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import Layout from "../components/layouts/BaseLayout";

import styles from "./Home.module.scss";

const heroItems = [
  { title: "Contact", icon: faEnvelope },
  { title: "Unemployment", icon: faBriefcase },
  { title: "Housing", icon: faHome },
  { title: "Food Access", icon: faUtensils },
  { title: "Covid", icon: faShieldVirus },
];

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.hero}>
          {/* <Container maxWidth="md"> */}
          {/* <div className={styles.iconBar}> */}
          {/* {heroItems.map(({ title, icon }) => (
                <FontAwesomeIcon icon={icon} size="3x" />
              ))} */}
          {/* <h1>Proudly serving Somerville</h1> */}
          {/* </div> */}
          {/* </Container> */}
        </div>
        <div>
          <Container maxWidth="md">
            <h1 id="contact">How to reach me</h1>
            <p>Contact me at 857-264-1096 or Erika.Uyterhoeven@mahouse.gov</p>
            <h3>Constituant service center</h3>
            <ul>
              <li>Unemployment</li>
              <li>Housing</li>
              <li>Food Access</li>
              <li>Covid Vaccine</li>
            </ul>
          </Container>
          <Container maxWidth="md">
            <h1>
              <Link href="/about/our-district">Our district</Link>
            </h1>
            <Link href="/about/our-district">
              <img src="/img/district.png" style={{ cursor: "pointer" }} />
            </Link>
          </Container>
        </div>
      </main>
    </Layout>
  );
}

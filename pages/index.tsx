import Container from "@material-ui/core/Container";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            <h1 id="contact">Committed to serving you</h1>
            <p>Do you need help with Massachusetts state services? Call Erika at 857-264-1096 or email at Erika.Uyterhoeven@mahouse.gov and my aide Lucas or I will get back to you within 24 hours, Monday through Friday.</p>
            <h3>Constituent services include:</h3>
            <ul>
              <li>Claiming unemployment insurance</li>
              <li>Accessing MassHealth Connector</li>
              <li>Assistance with housing and legal services</li>
              <li>Help with food access and resources</li>
              <li>Accessing the COVID-19 vaccine</li>
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

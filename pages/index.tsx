import Container from "@material-ui/core/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faShieldVirus,
  faHome,
  faBriefcase,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

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
          <Container maxWidth="md" style={{ height: "100%" }}>
            <div className={styles.iconBar}>
              {heroItems.map(({ title, icon }) => (
                <FontAwesomeIcon icon={icon} size="3x" />
              ))}
              {/* <h1>Proudly serving Somerville</h1> */}
            </div>
          </Container>
        </div>
      </main>
    </Layout>
  );
}

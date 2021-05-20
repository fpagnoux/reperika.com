import Container from "@material-ui/core/Container";

import Layout from "../components/Layout";

import styles from "./Home.module.scss";

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.hero}>
          <Container maxWidth="md" style={{ height: "100%" }}>
            <div className="title-container">
              <h1>Proudly serving Somerville</h1>
            </div>
          </Container>
        </div>
      </main>
    </Layout>
  );
}

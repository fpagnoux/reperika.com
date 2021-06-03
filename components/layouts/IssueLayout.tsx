import Container from "@material-ui/core/Container";

import BaseLayout from "./BaseLayout";
import styles from "./IssueLayout.module.scss";

export default function IssueLayout({ children }) {
  return (
    <BaseLayout>
      <Container maxWidth="md" className={styles.main}>
        {children}
      </Container>
    </BaseLayout>
  );
}
